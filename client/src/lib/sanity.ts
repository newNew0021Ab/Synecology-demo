
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'sg6ov4g1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Типы для TypeScript
export interface TeamMember {
  _id: string
  name: string
  slug: { current: string }
  role: string
  quote?: string
  bio?: string
  image?: any
  expertise?: string[]
  approach?: string
  keyProjects?: Array<{
    title: string
    role: string
    description: string
    link: string
  }>
  articles?: Array<{
    title: string
    link: string
  }>
  contact?: {
    email: string
    phone: string
  }
  experience?: string
  education?: string
  certificates?: Array<{
    title: string
    issuer: string
    year: string
    image?: any
  }>
}

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  description: string
  features?: string[]
  image?: any
  tags?: string[]
  pricing?: {
    from: number
    to: number
    currency: string
  }
  timeline?: string
  process?: Array<{
    step: string
    description: string
  }>
  requirements?: string[]
  deliverables?: string[]
}

export interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  description?: string
  fullDescription?: string
  challenge?: string
  solution?: string
  results?: string[]
  metrics?: Array<{
    value: string
    label: string
    color: string
  }>
  image?: any
  images?: any[]
  tags?: string[]
  timeline?: string
  completion?: string
  featured?: boolean
  client?: string
  teamMembers?: TeamMember[]
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  content?: any[]
  category?: string
  publishedAt?: string
  readTime?: string
  image?: any
  tags?: string[]
  featured?: boolean
  author?: TeamMember
  seo?: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}
