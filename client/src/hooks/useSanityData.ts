
import { useQuery } from '@tanstack/react-query'
import { client, QUERIES } from '@/lib/sanity'
import type { TeamMember, CaseStudy, BlogPost, Service } from '@/types/sanity'

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
    queryFn: () => client.fetch(QUERIES.teamMembers),
    staleTime: 5 * 60 * 1000, // 5 минут
  })
}

export function useTeamMember(slug: string) {
  return useQuery<TeamMember>({
    queryKey: ['teamMember', slug],
    queryFn: () => client.fetch(QUERIES.teamMemberBySlug, { slug }),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

export function useCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ['caseStudies'],
    queryFn: () => client.fetch(QUERIES.caseStudies),
    staleTime: 5 * 60 * 1000,
  })
}

export function useCaseStudy(slug: string) {
  return useQuery<CaseStudy>({
    queryKey: ['caseStudy', slug],
    queryFn: () => client.fetch(QUERIES.caseStudyBySlug, { slug }),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

export function useFeaturedCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ['featuredCaseStudies'],
    queryFn: () => client.fetch(QUERIES.featuredCaseStudies),
    staleTime: 5 * 60 * 1000,
  })
}

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: () => client.fetch(QUERIES.blogPosts),
    staleTime: 5 * 60 * 1000,
  })
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost>({
    queryKey: ['blogPost', slug],
    queryFn: () => client.fetch(QUERIES.blogPostBySlug, { slug }),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

export function useFeaturedBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ['featuredBlogPosts'],
    queryFn: () => client.fetch(QUERIES.featuredBlogPosts),
    staleTime: 5 * 1000,
  })
}

export function useServices() {
  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: () => client.fetch(QUERIES.services),
    staleTime: 5 * 60 * 1000,
  })
}

export function useService(slug: string) {
  return useQuery<Service>({
    queryKey: ['service', slug],
    queryFn: () => client.fetch(QUERIES.serviceBySlug, { slug }),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}
