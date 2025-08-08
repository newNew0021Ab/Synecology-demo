
// Directus API response wrapper
export interface DirectusResponse<T> {
  data: T[];
  meta?: {
    total_count: number;
    filter_count: number;
  };
}

// Blog collection interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image: string;
  category?: string[];
  tags?: string[];
  read_time?: string;
  author_name?: string;
  author_role?: string;
  author_slug?: string;
  author_avatar?: string;
  published_date?: string;
  featured?: boolean;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
  status?: string;
  date_created?: string;
  date_updated?: string;
}

// Case Studies collection interface
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  preview_text?: string;
  content: string;
  cover_image: string;
  gallery?: string[];
  category?: string[];
  tags?: string[];
  client?: string;
  project_date?: string;
  featured?: boolean;
  full_description?: string;
  challenge?: string;
  solution?: string;
  timeline?: string;
  completion_date?: string;
  location?: string;
  team_size?: string;
  results?: string[];
  metrics?: string[];
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
  status?: string;
  date_created?: string;
  date_updated?: string;
}

// Query parameters for filtering and pagination
export interface DirectusQueryParams {
  limit?: number;
  offset?: number;
  page?: number;
  sort?: string[];
  filter?: Record<string, any>;
  fields?: string[];
  search?: string;
}
