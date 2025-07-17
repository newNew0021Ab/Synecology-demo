
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  slug: {
    current: string
  }
  role: string
  image: SanityImage
  quote?: string
  bio?: string
  approach?: string
  expertise?: string[]
  experience?: string
  education?: string
  contact?: {
    email?: string
    phone?: string
  }
  certificates?: Array<{
    title: string
    issuer: string
    year: string
    image?: SanityImage
  }>
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
}

export interface CaseStudy {
  _id: string
  _type: 'caseStudy'
  title: string
  slug: {
    current: string
  }
  category: string
  description: string
  fullDescription?: string
  image?: SanityImage
  gallery?: SanityImage[]
  results?: string[]
  challenge?: string
  solution?: string
  outcome?: string
  tags?: string[]
  timeline?: string
  completion?: string
  featured?: boolean
  clientTestimonial?: {
    quote: string
    author: string
    position: string
    company: string
  }
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  content?: any[]
  category?: string
  tags?: string[]
  author?: TeamMember
  publishedAt: string
  readTime?: string
  featuredImage?: SanityImage
  featured?: boolean
}

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: {
    current: string
  }
  description: string
  fullDescription?: any[]
  features?: string[]
  image?: SanityImage
  icon?: string
  tags?: string[]
  price?: {
    amount?: number
    currency?: string
    period?: string
    isVariable?: boolean
  }
  timeline?: string
  deliverables?: string[]
  process?: Array<{
    step: string
    description: string
  }>
  relatedCases?: CaseStudy[]
}
