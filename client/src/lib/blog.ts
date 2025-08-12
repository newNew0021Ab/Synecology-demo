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
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
};

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching from proxy:', '/api/directus-blog');

    const response = await fetch('/api/directus-blog');
    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Proxy error response:', errorText);
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const htmlContent = await response.text();
      console.log('Received HTML error page instead of JSON:', htmlContent.substring(0, 200));
      throw new Error(`Expected JSON but got ${contentType}`);
    }

    let data;
    try {
      data = await response.json();
      console.log('Proxy API Response:', data);
    } catch (parseError) {
      console.log('JSON parse error:', parseError);
      throw new Error('Invalid JSON response from server');
    }

    if (!data.data || !Array.isArray(data.data)) {
      console.log('Invalid data structure:', data);
      throw new Error('Invalid data structure from Directus API');
    }

    const blogPosts = data.data.map((item: any): BlogPost => {
      console.log('Processing blog item:', item);

      // Handle category field - it might be a string or array
      let category = [];
      if (Array.isArray(item.category)) {
        category = item.category;
      } else if (typeof item.category === 'string') {
        category = [item.category];
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
        category: category,
        tags: tags,
        readTime: item.read_time || '',
        authorName: item.author_name || '',
        authorRole: item.author_role || '',
        authorSlug: item.author_slug || '',
        authorAvatar: getImageUrl(item.author_avatar),
        publishedDate: item.published_date || item.date_created || new Date().toISOString(),
        featured: Boolean(item.featured),
        seoTitle: item.seo_title || '',
        seoDescription: item.seo_description || '',
        seoKeywords: item.seo_keywords || []
      };
    });

    console.log('Successfully loaded blog posts from Directus:', blogPosts.length, 'posts');
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export { getImageUrl };