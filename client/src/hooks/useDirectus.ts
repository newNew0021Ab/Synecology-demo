import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { BlogPost, CaseStudy, DirectusResponse, DirectusQueryParams } from '@shared/directus-types';
import { blogApi, caseStudiesApi } from '@/lib/directus';
import { directus } from '@/lib/directus';

// Blog hooks
export function useBlogPosts(params?: DirectusQueryParams): UseQueryResult<DirectusResponse<BlogPost>> {
  return useQuery({
    queryKey: ['blog-posts', params],
    queryFn: () => blogApi.getAll(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useBlogPost(slug: string): UseQueryResult<BlogPost | null> {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => blogApi.getBySlug(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useFeaturedBlogPosts(limit = 3): UseQueryResult<DirectusResponse<BlogPost>> {
  return useQuery({
    queryKey: ['featured-blog-posts', limit],
    queryFn: () => blogApi.getFeatured(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useBlogSearch(searchTerm: string, params?: DirectusQueryParams): UseQueryResult<DirectusResponse<BlogPost>> {
  return useQuery({
    queryKey: ['blog-search', searchTerm, params],
    queryFn: () => blogApi.search(searchTerm, params),
    enabled: !!searchTerm && searchTerm.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

// Case Studies hooks
export function useCaseStudies(params?: DirectusQueryParams): UseQueryResult<DirectusResponse<CaseStudy>> {
  return useQuery({
    queryKey: ['case-studies', params],
    queryFn: () => caseStudiesApi.getAll(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export const useCaseStudy = (slug: string) => {
  return useQuery({
    queryKey: ['case-study', slug],
    queryFn: async () => {
      console.log('Fetching case study with slug:', slug);
      const response = await directus.items('case_studies').readByQuery({
        filter: { slug: { _eq: slug } },
        limit: 1
      });
      console.log('Case study response:', response);
      return response;
    },
    select: (data) => {
      console.log('Case study data:', data);
      return data.data?.[0];
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

export function useFeaturedCaseStudies(limit = 3): UseQueryResult<DirectusResponse<CaseStudy>> {
  return useQuery({
    queryKey: ['featured-case-studies', limit],
    queryFn: () => caseStudiesApi.getFeatured(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Combined hook for getting unique categories and tags
export function useBlogFilters(): UseQueryResult<{
  categories: string[];
  tags: string[];
}> {
  return useQuery({
    queryKey: ['blog-filters'],
    queryFn: async () => {
      const response = await blogApi.getAll({
        fields: ['category', 'tags'],
        limit: -1, // Get all records
      });

      const categories = new Set<string>();
      const tags = new Set<string>();

      response.data.forEach(post => {
        if (post.category) post.category.forEach(cat => categories.add(cat));
        if (post.tags) post.tags.forEach(tag => tags.add(tag));
      });

      return {
        categories: Array.from(categories).sort(),
        tags: Array.from(tags).sort(),
      };
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

export function useCaseStudyFilters(): UseQueryResult<{
  categories: string[];
  tags: string[];
}> {
  return useQuery({
    queryKey: ['case-study-filters'],
    queryFn: async () => {
      const response = await caseStudiesApi.getAll({
        fields: ['category', 'tags'],
        limit: -1,
      });

      const categories = new Set<string>();
      const tags = new Set<string>();

      response.data.forEach(study => {
        if (study.category) study.category.forEach(cat => categories.add(cat));
        if (study.tags) study.tags.forEach(tag => tags.add(tag));
      });

      return {
        categories: Array.from(categories).sort(),
        tags: Array.from(tags).sort(),
      };
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}