
import { createDirectus, rest } from '@directus/sdk';
import { BlogPost, CaseStudy, DirectusResponse, DirectusQueryParams } from '@shared/directus-types';

const DIRECTUS_URL = 'https://directus-production-6ce1.up.railway.app';

// Create Directus client
export const directus = createDirectus(DIRECTUS_URL).with(rest());

// Helper function to build query string
function buildQueryString(params: DirectusQueryParams): string {
  const searchParams = new URLSearchParams();
  
  if (params.limit) searchParams.set('limit', params.limit.toString());
  if (params.offset) searchParams.set('offset', params.offset.toString());
  if (params.page) searchParams.set('page', params.page.toString());
  if (params.sort) searchParams.set('sort', params.sort.join(','));
  if (params.search) searchParams.set('search', params.search);
  if (params.fields) searchParams.set('fields', params.fields.join(','));
  
  // Handle complex filters
  if (params.filter) {
    Object.entries(params.filter).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        searchParams.set(`filter[${key}][_in]`, value.join(','));
      } else if (typeof value === 'object' && value !== null) {
        // Handle nested filter operators like _contains, _intersects
        Object.entries(value).forEach(([operator, operatorValue]) => {
          searchParams.set(`filter[${key}][${operator}]`, operatorValue.toString());
        });
      } else {
        searchParams.set(`filter[${key}]`, value.toString());
      }
    });
  }
  
  return searchParams.toString();
}

// Generic fetch function for Directus
async function fetchFromDirectus<T>(endpoint: string, params?: DirectusQueryParams): Promise<DirectusResponse<T>> {
  const queryString = params ? buildQueryString(params) : '';
  const url = `${DIRECTUS_URL}/${endpoint}${queryString ? '?' + queryString : ''}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from Directus: ${url}`, error);
    throw error;
  }
}

// Blog API functions
export const blogApi = {
  // Get all blog posts
  getAll: (params?: DirectusQueryParams): Promise<DirectusResponse<BlogPost>> => 
    fetchFromDirectus<BlogPost>('items/blog_posts', params),

  // Get single blog post by slug
  getBySlug: (slug: string): Promise<BlogPost | null> => 
    fetchFromDirectus<BlogPost>('items/blog_posts', {
      filter: { slug },
      limit: 1,
    }).then(response => response.data[0] || null),

  // Get featured blog posts
  getFeatured: (limit = 3): Promise<DirectusResponse<BlogPost>> =>
    fetchFromDirectus<BlogPost>('items/blog_posts', {
      filter: { featured: true },
      limit,
      sort: ['-published_date'],
    }),

  // Get blog posts by category
  getByCategory: (category: string, params?: DirectusQueryParams): Promise<DirectusResponse<BlogPost>> =>
    fetchFromDirectus<BlogPost>('items/blog_posts', {
      ...params,
      filter: {
        category: { _contains: category },
        ...params?.filter,
      },
    }),

  // Search blog posts
  search: (searchTerm: string, params?: DirectusQueryParams): Promise<DirectusResponse<BlogPost>> =>
    fetchFromDirectus<BlogPost>('items/blog_posts', {
      ...params,
      search: searchTerm,
    }),
};

// Case Studies API functions
export const caseStudiesApi = {
  // Get all case studies
  getAll: (params?: DirectusQueryParams): Promise<DirectusResponse<CaseStudy>> => 
    fetchFromDirectus<CaseStudy>('items/case_studies', {
      ...params,
      filter: {
        status: 'published',
        ...params?.filter,
      },
    }),

  // Get single case study by slug
  getBySlug: (slug: string): Promise<CaseStudy | null> => 
    fetchFromDirectus<CaseStudy>('items/case_studies', {
      filter: { slug, status: 'published' },
      limit: 1,
    }).then(response => response.data[0] || null),

  // Get featured case studies
  getFeatured: (limit = 3): Promise<DirectusResponse<CaseStudy>> =>
    fetchFromDirectus<CaseStudy>('items/case_studies', {
      filter: { featured: true, status: 'published' },
      limit,
      sort: ['-completion_date'],
    }),

  // Get case studies by category
  getByCategory: (category: string, params?: DirectusQueryParams): Promise<DirectusResponse<CaseStudy>> =>
    fetchFromDirectus<CaseStudy>('items/case_studies', {
      ...params,
      filter: {
        category,
        status: 'published',
        ...params?.filter,
      },
    }),
};

// Helper function to get image URL from Directus
export function getDirectusImageUrl(fileId: string, params?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}): string {
  if (!fileId) return '';
  
  const baseUrl = `${DIRECTUS_URL}/assets/${fileId}`;
  
  if (!params) return baseUrl;
  
  const searchParams = new URLSearchParams();
  if (params.width) searchParams.set('width', params.width.toString());
  if (params.height) searchParams.set('height', params.height.toString());
  if (params.quality) searchParams.set('quality', params.quality.toString());
  if (params.format) searchParams.set('format', params.format);
  
  return `${baseUrl}?${searchParams.toString()}`;
}

// Helper function to format date
export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// Helper function to calculate read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} мин`;
}
