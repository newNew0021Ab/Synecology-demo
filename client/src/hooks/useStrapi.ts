
import { useQuery } from '@tanstack/react-query';
import { 
  getServices, 
  getService, 
  getCaseStudies, 
  getCaseStudy, 
  getBlogPosts, 
  getBlogPost, 
  getTeamMembers, 
  getTeamMember 
} from '@/lib/strapi';

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useService = (slug: string) => {
  return useQuery({
    queryKey: ['service', slug],
    queryFn: () => getService(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCaseStudies = () => {
  return useQuery({
    queryKey: ['case-studies'],
    queryFn: getCaseStudies,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCaseStudy = (slug: string) => {
  return useQuery({
    queryKey: ['case-study', slug],
    queryFn: () => getCaseStudy(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => getBlogPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['team-members'],
    queryFn: getTeamMembers,
    staleTime: 5 * 60 * 1000,
  });
};

export const useTeamMember = (slug: string) => {
  return useQuery({
    queryKey: ['team-member', slug],
    queryFn: () => getTeamMember(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};
