
import { useQuery } from '@tanstack/react-query';
import {
  getServices,
  getServiceBySlug,
  getCases,
  getFeaturedCases,
  getCaseBySlug,
  getBlogPosts,
  getBlogPostBySlug
} from '@/lib/strapi';

// Хук для получения всех сервисов
export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000, // 5 минут
  });
}

// Хук для получения сервиса по slug
export function useService(slug: string) {
  return useQuery({
    queryKey: ['service', slug],
    queryFn: () => getServiceBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

// Хук для получения всех кейсов
export function useCases() {
  return useQuery({
    queryKey: ['cases'],
    queryFn: getCases,
    staleTime: 5 * 60 * 1000,
  });
}

// Хук для получения рекомендуемых кейсов
export function useFeaturedCases() {
  return useQuery({
    queryKey: ['cases', 'featured'],
    queryFn: getFeaturedCases,
    staleTime: 5 * 60 * 1000,
  });
}

// Хук для получения кейса по slug
export function useCase(slug: string) {
  return useQuery({
    queryKey: ['case', slug],
    queryFn: () => getCaseBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

// Хук для получения всех блог постов
export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
    staleTime: 5 * 60 * 1000,
  });
}

// Хук для получения блог поста по slug
export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => getBlogPostBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
