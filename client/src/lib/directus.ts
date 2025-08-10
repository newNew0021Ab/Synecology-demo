
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
  const url = `${API_BASE}/items/case_studies?fields=*`;

  try {
    const res = await fetch(url, {
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch case studies: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();

    return (json.data || []).map((item: any) => ({
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
