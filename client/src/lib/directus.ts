
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
    const responseText = await res.text();
    
    // Check if response is HTML (error page)
    if (responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<html')) {
      console.error('Received HTML error page instead of JSON:', responseText.substring(0, 200));
      throw new Error('Server returned HTML error page instead of JSON data');
    }
    
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Non-JSON response received:', responseText.substring(0, 300));
      throw new Error(`Expected JSON but received ${contentType}: ${responseText.substring(0, 100)}`);
    }

    let json;
    try {
      json = JSON.parse(responseText);
    } catch (parseError) {
      console.error('JSON parse error:', parseError, 'Response text:', responseText.substring(0, 300));
      throw new Error(`Failed to parse JSON response: ${parseError.message}`);
    }
    
    console.log('Proxy API Response:', json);

    // Check if this is an error response from our proxy
    if (json.status === 500) {
      throw new Error(json.message || 'Proxy server error');
    }

    if (!json.data) {
      console.warn('No data field in response:', json);
      return [];
    }

    return json.data.map((item: any) => {
      // Handle results field - it might be a string or array
      let results = [];
      if (typeof item.results === 'string') {
        try {
          results = JSON.parse(item.results);
        } catch {
          results = item.results.split('\n').filter(r => r.trim());
        }
      } else if (Array.isArray(item.results)) {
        results = item.results;
      }

      // Handle tags field - it might be a string or array
      let tags = [];
      if (typeof item.tags === 'string') {
        try {
          tags = JSON.parse(item.tags);
        } catch {
          tags = item.tags.split(',').map(t => t.trim()).filter(t => t);
        }
      } else if (Array.isArray(item.tags)) {
        tags = item.tags;
      }

      // Handle category field
      let category = item.category;
      if (Array.isArray(item.category)) {
        category = item.category[0] || 'Без категории';
      }

      return {
        id: item.id,
        title: item.title || 'Untitled',
        slug: item.slug || `case-${item.id}`,
        previewText: item.preview_text || item.description || '',
        coverImage: getImageUrl(item.cover_image),
        timeline: item.timeline || 'N/A',
        completionDate: item.completion_date || item.project_date || new Date().toISOString(),
        results: results,
        category: category || 'Без категории',
        description: item.description || item.full_description || '',
        tags: tags,
        featured: Boolean(item.featured)
      };
    });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export { getImageUrl };
