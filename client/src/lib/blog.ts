
const API_BASE = "https://directus-production-6ce1.up.railway.app";

function getImageUrl(id?: string) {
  return id ? `${API_BASE}/assets/${id}` : null;
}

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category?: string[];
  tags?: string[];
  readTime?: string;
  authorName?: string;
  authorRole?: string;
  authorSlug?: string;
  authorAvatar?: string | null;
  publishedDate?: string;
  featured?: boolean;
};

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const url = '/api/directus-blog';

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
      // Handle category field
      let category = item.category;
      if (Array.isArray(item.category)) {
        category = item.category;
      } else if (typeof item.category === 'string') {
        try {
          category = JSON.parse(item.category);
        } catch {
          category = [item.category];
        }
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

      return {
        id: item.id,
        title: item.title || 'Untitled',
        slug: item.slug || `blog-${item.id}`,
        excerpt: item.excerpt || item.preview_text || '',
        content: item.content || item.full_content || '',
        coverImage: getImageUrl(item.cover_image),
        category: category || [],
        tags: tags,
        readTime: item.read_time || item.reading_time || '',
        authorName: item.author_name || item.author || '',
        authorRole: item.author_role || '',
        authorSlug: item.author_slug || '',
        authorAvatar: getImageUrl(item.author_avatar),
        publishedDate: item.published_date || item.publication_date || item.date || new Date().toISOString(),
        featured: Boolean(item.featured)
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export { getImageUrl };
