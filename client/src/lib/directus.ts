
import { createDirectus, rest, readItems } from '@directus/sdk';

// Define the Directus schema types
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image?: string | { id: string; filename_download: string };
  published_date: string;
  category: string;
  tags: string[];
  seo_title?: string;
  seo_description?: string;
  status: string;
}

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string | { id: string; filename_download: string };
  completion_date: string;
  client_name: string;
  project_type: string;
  gallery?: Array<{ id: string; filename_download: string }>;
  metrics?: Array<{ name: string; value: string; unit?: string }>;
  results?: string[];
  seo_title?: string;
  seo_description?: string;
  status: string;
}

// Create Directus client
const directusUrl = 'https://directus-production-6ce1.up.railway.app';
const directus = createDirectus(directusUrl).with(rest());

// Export directus client
export { directus };

// Helper function to get image URL
export const getImageUrl = (image: string | { id: string; filename_download: string } | null | undefined): string | null => {
  if (!image) return null;
  
  if (typeof image === 'string') {
    return `${directusUrl}/assets/${image}`;
  }
  
  if (typeof image === 'object' && image.id) {
    return `${directusUrl}/assets/${image.id}`;
  }
  
  return null;
};

// Helper function to safely parse content
export const parseContent = (content: string | null | undefined): string => {
  if (!content) return '';
  return content;
};

// Helper function to safely handle arrays
export const safeArray = <T>(arr: T[] | null | undefined): T[] => {
  return Array.isArray(arr) ? arr : [];
};

// Fetch blog posts
export const fetchBlogPosts = async (limit = 12): Promise<BlogPost[]> => {
  try {
    const posts = await directus.request(
      readItems('blog_posts', {
        limit,
        sort: ['-published_date']
      })
    );
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch single blog post by slug
export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const posts = await directus.request(
      readItems('blog_posts', {
        filter: {
          slug: { _eq: slug }
        },
        limit: 1
      })
    );
    return posts?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Fetch case studies
export const fetchCaseStudies = async (limit = 20): Promise<CaseStudy[]> => {
  try {
    const studies = await directus.request(
      readItems('case_studies', {
        limit,
        sort: ['-completion_date']
      })
    );
    return studies || [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
};

// Fetch single case study by slug
export const fetchCaseStudy = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const studies = await directus.request(
      readItems('case_studies', {
        filter: {
          slug: { _eq: slug }
        },
        limit: 1
      })
    );
    return studies?.[0] || null;
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
};

// Fetch blog categories and tags
export const fetchBlogMeta = async () => {
  try {
    const posts = await directus.request(
      readItems('blog_posts', {
        fields: ['category', 'tags'],
        limit: -1
      })
    );

    const categories = [...new Set(posts?.map(post => post.category).filter(Boolean))];
    const allTags = posts?.flatMap(post => safeArray(post.tags)) || [];
    const tags = [...new Set(allTags.filter(Boolean))];

    return { categories, tags };
  } catch (error) {
    console.error('Error fetching blog meta:', error);
    return { categories: [], tags: [] };
  }
};

export type { BlogPost, CaseStudy };
