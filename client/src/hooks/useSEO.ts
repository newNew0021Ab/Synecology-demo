
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  alternateLanguages?: Array<{ href: string; hreflang: string; }>;
}

export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
  structuredData,
  author,
  publishedTime,
  modifiedTime,
  alternateLanguages = []
}: SEOProps) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
    
    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph title
    if (ogTitle) {
      let ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (!ogTitleMeta) {
        ogTitleMeta = document.createElement('meta');
        ogTitleMeta.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleMeta);
      }
      ogTitleMeta.setAttribute('content', ogTitle);
    }
    
    // Update Open Graph description
    if (ogDescription) {
      let ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (!ogDescMeta) {
        ogDescMeta = document.createElement('meta');
        ogDescMeta.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescMeta);
      }
      ogDescMeta.setAttribute('content', ogDescription);
    }
    
    // Update Open Graph image
    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph type
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement('meta');
      ogTypeMeta.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeMeta);
    }
    ogTypeMeta.setAttribute('content', ogType);

    // Update Open Graph site name
    let ogSiteNameMeta = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteNameMeta) {
      ogSiteNameMeta = document.createElement('meta');
      ogSiteNameMeta.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteNameMeta);
    }
    ogSiteNameMeta.setAttribute('content', 'Synecology');

    // Update Open Graph locale
    let ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
    if (!ogLocaleMeta) {
      ogLocaleMeta = document.createElement('meta');
      ogLocaleMeta.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocaleMeta);
    }
    ogLocaleMeta.setAttribute('content', 'ru_BY');

    // Update author meta tag
    if (author) {
      let authorMeta = document.querySelector('meta[name="author"]');
      if (!authorMeta) {
        authorMeta = document.createElement('meta');
        authorMeta.setAttribute('name', 'author');
        document.head.appendChild(authorMeta);
      }
      authorMeta.setAttribute('content', author);
    }

    // Update article published time
    if (publishedTime) {
      let publishedTimeMeta = document.querySelector('meta[property="article:published_time"]');
      if (!publishedTimeMeta) {
        publishedTimeMeta = document.createElement('meta');
        publishedTimeMeta.setAttribute('property', 'article:published_time');
        document.head.appendChild(publishedTimeMeta);
      }
      publishedTimeMeta.setAttribute('content', publishedTime);
    }

    // Update article modified time
    if (modifiedTime) {
      let modifiedTimeMeta = document.querySelector('meta[property="article:modified_time"]');
      if (!modifiedTimeMeta) {
        modifiedTimeMeta = document.createElement('meta');
        modifiedTimeMeta.setAttribute('property', 'article:modified_time');
        document.head.appendChild(modifiedTimeMeta);
      }
      modifiedTimeMeta.setAttribute('content', modifiedTime);
    }

    // Update alternate language links
    // Remove existing alternate links first
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternates.forEach(link => link.remove());
    
    alternateLanguages.forEach(({ href, hreflang }) => {
      const alternateLink = document.createElement('link');
      alternateLink.setAttribute('rel', 'alternate');
      alternateLink.setAttribute('href', href);
      alternateLink.setAttribute('hreflang', hreflang);
      document.head.appendChild(alternateLink);
    });

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Update robots meta tag with enhanced options
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    
    const robotsContent = noindex 
      ? 'noindex, nofollow, noarchive, nosnippet' 
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    robotsMeta.setAttribute('content', robotsContent);

    // Add viewport meta tag if missing
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
      document.head.appendChild(viewportMeta);
    }
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonical, noindex, structuredData, author, publishedTime, modifiedTime, alternateLanguages]);
}
