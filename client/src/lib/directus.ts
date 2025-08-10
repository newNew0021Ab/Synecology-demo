
const API_BASE = "https://directus-production-6ce1.up.railway.app";

function getImageUrl(id?: string) {
  return id ? `${API_BASE}/assets/${id}` : null;
}

export type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  previewText: string;
  coverImage: string | null;
  timeline: string;
  completionDate: string;
  results: string[];
  category?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
};

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  const url = '/api/directus-cases';

  try {
    console.log('Fetching from proxy:', url);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log('Response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Proxy error response:', errorText);
      throw new Error(`HTTP ${res.status}: ${errorText.substring(0, 200)}`);
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const responseText = await res.text();
      console.error('Non-JSON response received:', responseText.substring(0, 300));
      throw new Error(`Expected JSON but received ${contentType}: ${responseText.substring(0, 100)}`);
    }

    const json = await res.json();
    console.log('Proxy API Response:', json);

    // Check if this is an error response from our proxy
    if (json.status === 500) {
      throw new Error(json.message || 'Proxy server error');
    }

    if (!json.data) {
      console.warn('No data field in response:', json);
      return [];
    }

    return json.data.map((item: any) => ({
      id: item.id,
      title: item.title || 'Untitled',
      slug: item.slug || `case-${item.id}`,
      previewText: item.preview_text || item.description || '',
      coverImage: getImageUrl(item.cover_image),
      timeline: item.timeline || 'N/A',
      completionDate: item.completion_date || new Date().toISOString(),
      results: Array.isArray(item.results) ? item.results : [],
      category: item.category,
      description: item.description,
      tags: Array.isArray(item.tags) ? item.tags : [],
      featured: Boolean(item.featured)
    }));
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export { getImageUrl };
