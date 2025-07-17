
import { useQuery } from '@tanstack/react-query'
import { client, TeamMember, Service, CaseStudy, BlogPost } from '@/lib/sanity'

// Запросы для команды
export const useTeamMembers = () => {
  return useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      const query = `*[_type == "teamMember"] | order(name asc) {
        _id,
        name,
        slug,
        role,
        quote,
        bio,
        image,
        expertise,
        approach,
        keyProjects,
        articles,
        contact,
        experience,
        education,
        certificates
      }`
      return await client.fetch(query)
    },
  })
}

export const useTeamMember = (slug: string) => {
  return useQuery<TeamMember>({
    queryKey: ['teamMember', slug],
    queryFn: async () => {
      const query = `*[_type == "teamMember" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        role,
        quote,
        bio,
        image,
        expertise,
        approach,
        keyProjects,
        articles,
        contact,
        experience,
        education,
        certificates
      }`
      return await client.fetch(query, { slug })
    },
    enabled: !!slug,
  })
}

// Запросы для услуг
export const useServices = () => {
  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: async () => {
      const query = `*[_type == "service"] | order(title asc) {
        _id,
        title,
        slug,
        description,
        features,
        image,
        tags,
        pricing,
        timeline,
        process,
        requirements,
        deliverables
      }`
      return await client.fetch(query)
    },
  })
}

export const useService = (slug: string) => {
  return useQuery<Service>({
    queryKey: ['service', slug],
    queryFn: async () => {
      const query = `*[_type == "service" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        features,
        image,
        tags,
        pricing,
        timeline,
        process,
        requirements,
        deliverables
      }`
      return await client.fetch(query, { slug })
    },
    enabled: !!slug,
  })
}

// Запросы для кейсов
export const useCaseStudies = () => {
  return useQuery<CaseStudy[]>({
    queryKey: ['caseStudies'],
    queryFn: async () => {
      const query = `*[_type == "caseStudy"] | order(completion desc) {
        _id,
        title,
        slug,
        category,
        description,
        fullDescription,
        challenge,
        solution,
        results,
        metrics,
        image,
        images,
        tags,
        timeline,
        completion,
        featured,
        client,
        teamMembers[]->{
          _id,
          name,
          slug,
          role
        }
      }`
      return await client.fetch(query)
    },
  })
}

export const useCaseStudy = (slug: string) => {
  return useQuery<CaseStudy>({
    queryKey: ['caseStudy', slug],
    queryFn: async () => {
      const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        category,
        description,
        fullDescription,
        challenge,
        solution,
        results,
        metrics,
        image,
        images,
        tags,
        timeline,
        completion,
        featured,
        client,
        teamMembers[]->{
          _id,
          name,
          slug,
          role
        }
      }`
      return await client.fetch(query, { slug })
    },
    enabled: !!slug,
  })
}

// Запросы для блога
export const useBlogPosts = () => {
  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const query = `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        publishedAt,
        readTime,
        image,
        tags,
        featured,
        author->{
          _id,
          name,
          slug,
          role
        }
      }`
      return await client.fetch(query)
    },
  })
}

export const useBlogPost = (slug: string) => {
  return useQuery<BlogPost>({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      const query = `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        content,
        category,
        publishedAt,
        readTime,
        image,
        tags,
        featured,
        author->{
          _id,
          name,
          slug,
          role
        },
        seo
      }`
      return await client.fetch(query, { slug })
    },
    enabled: !!slug,
  })
}
