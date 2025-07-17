
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'sg6ov4g1',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-15',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ запросы
export const QUERIES = {
  teamMembers: '*[_type == "teamMember"] | order(_createdAt asc)',
  teamMemberBySlug: '*[_type == "teamMember" && slug.current == $slug][0]',
  
  caseStudies: '*[_type == "caseStudy"] | order(_createdAt desc)',
  caseStudyBySlug: '*[_type == "caseStudy" && slug.current == $slug][0]',
  featuredCaseStudies: '*[_type == "caseStudy" && featured == true] | order(_createdAt desc)',
  
  blogPosts: '*[_type == "blogPost"] | order(publishedAt desc)',
  blogPostBySlug: '*[_type == "blogPost" && slug.current == $slug][0] { ..., author-> }',
  featuredBlogPosts: '*[_type == "blogPost" && featured == true] | order(publishedAt desc)',
  
  services: '*[_type == "service"] | order(_createdAt asc)',
  serviceBySlug: '*[_type == "service" && slug.current == $slug][0] { ..., relatedCases[]-> }',
}
