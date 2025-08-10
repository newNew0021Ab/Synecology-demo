export const DIRECTUS_URL = "https://directus-production-6ce1.up.railway.app";

function getImageUrl(id?: string) {
  return id ? `${DIRECTUS_URL}/assets/${id}` : null;
}

export type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category?: string[];
  tags?: string[];
  client?: string;
  projectDate?: string;
  featured?: boolean;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  timeline?: string;
  completionDate?: string;
  location?: string;
  teamSize?: string;
  results?: string[];
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  author?: string;
  status: 'published' | 'draft';
  date_created: string;
  date_updated: string;
  tags?: string[];
  featured?: boolean;
};

export async function fetchDirectusCases(): Promise<CaseStudy[]> {
  try {
    console.log('Loading cases from Directus...');

    const res = await fetch('/api/directus-cases');
    console.log('Response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.log('Proxy error response:', errorText);
      throw new Error(`Failed to fetch case studies: ${res.status} ${res.statusText}`);
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

    if (!Array.isArray(json.data)) {
      console.warn('Data is not an array:', json.data);
      return [];
    }

    const caseStudies = json.data.map((item: any): CaseStudy => {
      console.log('Processing case study item:', item);

      // Handle category field - it might be a string or array
      let category = [];
      if (Array.isArray(item.category)) {
        category = item.category.filter(cat => cat && cat.trim());
      } else if (typeof item.category === 'string' && item.category.trim()) {
        category = [item.category.trim()];
      }

      // Handle tags field - it might be a string or array
      let tags = [];
      if (typeof item.tags === 'string' && item.tags.trim()) {
        try {
          tags = JSON.parse(item.tags);
        } catch {
          tags = item.tags.split(',').map(t => t.trim()).filter(t => t);
        }
      } else if (Array.isArray(item.tags)) {
        tags = item.tags.filter(tag => tag && tag.trim());
      }

      // Handle results field - it might be a string or array
      let results = [];
      if (typeof item.results === 'string' && item.results.trim()) {
        try {
          results = JSON.parse(item.results);
        } catch {
          results = item.results.split(',').map(r => r.trim()).filter(r => r);
        }
      } else if (Array.isArray(item.results)) {
        results = item.results.filter(result => result && result.trim());
      }

      return {
        id: item.id,
        title: item.title || '',
        slug: item.slug || `case-${item.id}`,
        excerpt: item.preview_text || item.excerpt || '',
        content: item.content || item.full_content || '',
        coverImage: getImageUrl(item.cover_image),
        category: category.length > 0 ? category : undefined,
        tags: tags.length > 0 ? tags : undefined,
        client: item.client || undefined,
        projectDate: item.project_date || undefined,
        featured: Boolean(item.featured),
        fullDescription: item.full_description || undefined,
        challenge: item.challenge || undefined,
        solution: item.solution || undefined,
        timeline: item.timeline || undefined,
        completionDate: item.completion_date || undefined,
        location: item.location || undefined,
        teamSize: item.team_size || undefined,
        results: results.length > 0 ? results : undefined,
      };
    });

    console.log('Successfully loaded cases from Directus:', caseStudies.length, 'cases');
    return caseStudies;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Loading blog posts from Directus...');
    console.log('Fetching from proxy:', '/api/directus-blog');

    const response = await fetch('/api/directus-blog');
    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.log('Received HTML error page instead of JSON:', text.substring(0, 200));
      throw new Error('Server returned HTML instead of JSON');
    }

    const data = await response.json();

    if (data && data.data) {
      return data.data.filter((item: BlogPost) => item.status === 'published');
    }

    return [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export { getImageUrl };