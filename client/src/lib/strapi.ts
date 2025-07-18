
import axios from 'axios';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export const strapiApi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  timeout: 10000,
});

// Типы для Strapi ответов
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity<T> {
  id: number;
  attributes: T & {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Типы данных
export interface ServiceData {
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  icon: string;
  features?: string[];
  process?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  benefits?: string[];
  requirements?: string[];
  timeline?: string;
  price?: string;
  tags?: string[];
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  gallery?: {
    data: Array<{
      attributes: {
        url: string;
        alternativeText?: string;
      };
    }>;
  };
  seoTitle?: string;
  seoDescription?: string;
}

export interface CaseStudyData {
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  metrics?: Array<{
    icon: string;
    value: string;
    label: string;
    color: string;
  }>;
  timeline?: string;
  completion?: string;
  featured: boolean;
  tags?: string[];
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  gallery?: {
    data: Array<{
      attributes: {
        url: string;
        alternativeText?: string;
      };
    }>;
  };
  client?: string;
  industry?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPostData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime?: string;
  featured: boolean;
  tags?: string[];
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  publishedDate?: string;
  author?: {
    data: StrapiEntity<TeamMemberData>;
  };
  seoTitle?: string;
  seoDescription?: string;
}

export interface TeamMemberData {
  name: string;
  slug: string;
  role: string;
  quote?: string;
  bio?: string;
  approach?: string;
  expertise?: string[];
  keyProjects?: Array<{
    title: string;
    role: string;
    description: string;
    link: string;
  }>;
  experience?: string;
  education?: string;
  certificates?: Array<{
    title: string;
    issuer: string;
    year: string;
    image: string;
  }>;
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  contact?: {
    email: string;
    phone: string;
  };
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// API функции
export const getServices = async (): Promise<StrapiEntity<ServiceData>[]> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<ServiceData>[]>>('/services?populate=*');
  return response.data.data;
};

export const getService = async (slug: string): Promise<StrapiEntity<ServiceData> | null> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<ServiceData>[]>>(`/services?filters[slug][$eq]=${slug}&populate=*`);
  return response.data.data[0] || null;
};

export const getCaseStudies = async (): Promise<StrapiEntity<CaseStudyData>[]> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<CaseStudyData>[]>>('/case-studies?populate=*');
  return response.data.data;
};

export const getCaseStudy = async (slug: string): Promise<StrapiEntity<CaseStudyData> | null> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<CaseStudyData>[]>>(`/case-studies?filters[slug][$eq]=${slug}&populate=*`);
  return response.data.data[0] || null;
};

export const getBlogPosts = async (): Promise<StrapiEntity<BlogPostData>[]> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<BlogPostData>[]>>('/blog-posts?populate=*');
  return response.data.data;
};

export const getBlogPost = async (slug: string): Promise<StrapiEntity<BlogPostData> | null> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<BlogPostData>[]>>(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  return response.data.data[0] || null;
};

export const getTeamMembers = async (): Promise<StrapiEntity<TeamMemberData>[]> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<TeamMemberData>[]>>('/team-members?populate=*');
  return response.data.data;
};

export const getTeamMember = async (slug: string): Promise<StrapiEntity<TeamMemberData> | null> => {
  const response = await strapiApi.get<StrapiResponse<StrapiEntity<TeamMemberData>[]>>(`/team-members?filters[slug][$eq]=${slug}&populate=*`);
  return response.data.data[0] || null;
};

// Утилитарная функция для получения URL изображения
export const getStrapiImageUrl = (imageData: any): string => {
  if (!imageData?.data?.attributes?.url) return '';
  
  const url = imageData.data.attributes.url;
  if (url.startsWith('http')) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
};
