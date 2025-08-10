
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
  // Additional fields for detail page
  challenge?: string;
  solution?: string;
  client?: string;
  location?: string;
  team_size?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
    slug: string;
  };
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
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
        featured: Boolean(item.featured),
        // Additional fields for detail page
        challenge: item.challenge || '',
        solution: item.solution || '',
        client: item.client || '',
        location: item.location || '',
        team_size: item.team_size || ''
      };
    });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const url = '/api/directus-blog';

  try {
    console.log('Fetching blog from proxy:', url);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log('Blog response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Blog proxy error response:', errorText);
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
    
    console.log('Blog proxy API Response:', json);

    // Check if this is an error response from our proxy
    if (json.status === 500) {
      throw new Error(json.message || 'Proxy server error');
    }

    if (!json.data) {
      console.warn('No data field in blog response:', json);
      return [];
    }

    return json.data.map((item: any) => {
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
        slug: item.slug || `blog-${item.id}`,
        excerpt: item.excerpt || item.preview_text || '',
        content: item.content || '',
        coverImage: getImageUrl(item.cover_image),
        category: category || 'Без категории',
        tags: tags,
        featured: Boolean(item.featured),
        publishDate: item.publish_date || item.date_created || new Date().toISOString(),
        readTime: item.read_time || '5 мин',
        author: {
          name: item.author_name || 'Корякин Егор Дмитриевич',
          role: item.author_role || 'Директор',
          avatar: getImageUrl(item.author_avatar),
          slug: item.author_slug || 'egor-koryakin'
        },
        seoTitle: item.seo_title || item.title,
        seoDescription: item.seo_description || item.excerpt,
        seoKeywords: item.seo_keywords || tags
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export { getImageUrl };
