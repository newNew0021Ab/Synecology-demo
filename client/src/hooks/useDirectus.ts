import { useQuery } from '@tanstack/react-query';
import { 
  fetchBlogPosts, 
  fetchBlogPost, 
  fetchCaseStudies, 
  fetchCaseStudy, 
  fetchBlogMeta,
  type BlogPost,
  type CaseStudy
} from '@/lib/directus';

// Hook for fetching multiple blog posts
export const useBlogPosts = (limit = 12) => {
  return useQuery({
    queryKey: ['blogPosts', limit],
    queryFn: () => fetchBlogPosts(limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

// Hook for fetching single blog post
export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
};

// Hook for fetching case studies
export const useCaseStudies = (limit = 20) => {
  return useQuery({
    queryKey: ['caseStudies', limit],
    queryFn: () => fetchCaseStudies(limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

// Hook for fetching single case study
export const useCaseStudy = (slug: string) => {
  return useQuery({
    queryKey: ['caseStudy', slug],
    queryFn: () => fetchCaseStudy(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
};

// Hook for fetching blog meta (categories, tags)
export const useBlogMeta = () => {
  return useQuery({
    queryKey: ['blogMeta'],
    queryFn: fetchBlogMeta,
    staleTime: 15 * 60 * 1000, // 15 minutes
    retry: 2,
  });
};

export type { BlogPost, CaseStudy };