
import type { StrapiService, StrapiCase, StrapiBlog } from '@/../../shared/schema';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

// Получить все сервисы
export async function getServices(): Promise<StrapiService[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/services?populate=*`);
    if (!response.ok) throw new Error('Failed to fetch services');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Получить сервис по slug
export async function getServiceBySlug(slug: string): Promise<StrapiService | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/services?filters[slug][$eq]=${slug}&populate=*`);
    if (!response.ok) throw new Error('Failed to fetch service');
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Получить все кейсы
export async function getCases(): Promise<StrapiCase[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/cases?populate=*&sort=createdAt:desc`);
    if (!response.ok) throw new Error('Failed to fetch cases');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching cases:', error);
    return [];
  }
}

// Получить рекомендуемые кейсы
export async function getFeaturedCases(): Promise<StrapiCase[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/cases?filters[featured][$eq]=true&populate=*&sort=createdAt:desc`);
    if (!response.ok) throw new Error('Failed to fetch featured cases');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching featured cases:', error);
    return [];
  }
}

// Получить кейс по slug
export async function getCaseBySlug(slug: string): Promise<StrapiCase | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/cases?filters[slug][$eq]=${slug}&populate=*`);
    if (!response.ok) throw new Error('Failed to fetch case');
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching case:', error);
    return null;
  }
}

// Получить все блог посты
export async function getBlogPosts(): Promise<StrapiBlog[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*&sort=createdAt:desc`);
    if (!response.ok) throw new Error('Failed to fetch blog posts');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Получить блог пост по slug
export async function getBlogPostBySlug(slug: string): Promise<StrapiBlog | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
    if (!response.ok) throw new Error('Failed to fetch blog post');
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Получить URL изображения
export function getStrapiImageUrl(imageData: any): string {
  if (!imageData?.data?.attributes?.url) return '';
  const url = imageData.data.attributes.url;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}
