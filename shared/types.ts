
export interface ApiResponse<T = any> {
  status: number;
  data?: T;
  message?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  preview_text: string;
  content: string;
  cover_image: string;
  category: string[];
  tags: string[];
  client: string;
  project_date: string;
  featured: boolean;
  full_description: string;
  challenge: string;
  solution: string;
  timeline: string;
  completion_date: string;
  location: string;
  team_size: string;
  results: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string[];
  tags: string[];
  read_time: string;
  author_name: string;
  author_role: string;
  author_slug: string;
  author_avatar: string;
  published_date: string;
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}
