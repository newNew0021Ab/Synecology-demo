
export interface StructuredDataBusiness {
  "@context": "https://schema.org";
  "@type": "Organization" | "LocalBusiness";
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  currenciesAccepted?: string[];
  areaServed?: string;
}

export interface StructuredDataArticle {
  "@context": "https://schema.org";
  "@type": "Article" | "BlogPosting";
  headline: string;
  description?: string;
  image?: string;
  author?: {
    "@type": "Person" | "Organization";
    name: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface StructuredDataService {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
    url?: string;
  };
  areaServed: string;
  serviceType: string;
  category?: string;
}

export interface StructuredDataBreadcrumb {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

// Default business structured data for Synecology
export const defaultBusinessStructuredData: StructuredDataBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Synecology",
  description: "Экологический консалтинг для устойчивого будущего. Экспертные решения в области экологической оценки, планирования устойчивости и соответствия требованиям в Беларуси.",
  url: "https://synecology.ru",
  logo: "https://synecology.ru/og-image.jpg",
  image: "https://synecology.ru/og-image.jpg",
  areaServed: "Беларусь",
  priceRange: "$$",
  sameAs: [
    "https://synecology.ru"
  ]
};

// Generate article structured data
export const generateArticleStructuredData = (
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  modifiedDate?: string,
  image?: string,
  url?: string
): StructuredDataArticle => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: image || "https://synecology.ru/og-image.jpg",
  author: {
    "@type": "Organization",
    name: author
  },
  publisher: {
    "@type": "Organization",
    name: "Synecology",
    logo: {
      "@type": "ImageObject",
      url: "https://synecology.ru/og-image.jpg"
    }
  },
  datePublished: publishedDate,
  dateModified: modifiedDate || publishedDate,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url || "https://synecology.ru"
  }
});

// Generate service structured data
export const generateServiceStructuredData = (
  serviceName: string,
  serviceDescription: string,
  serviceType: string,
  category?: string
): StructuredDataService => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: serviceDescription,
  provider: {
    "@type": "Organization",
    name: "Synecology",
    url: "https://synecology.ru"
  },
  areaServed: "Беларусь",
  serviceType,
  category
});

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>
): StructuredDataBreadcrumb => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.url
  }))
});

// SEO title templates
export const generateTitle = (pageTitle?: string, siteName = "Synecology") => {
  if (!pageTitle) return siteName;
  return `${pageTitle} | ${siteName}`;
};

// SEO meta description templates
export const generateMetaDescription = (content: string, maxLength = 160) => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3).trim() + '...';
};

// Generate canonical URL
export const generateCanonicalUrl = (path: string, baseUrl = "https://synecology.ru") => {
  return `${baseUrl}${path}`;
};

// Common keywords for the site
export const commonKeywords = [
  "экологический консалтинг",
  "экологическое планирование",
  "устойчивое развитие",
  "экологические услуги",
  "Беларусь",
  "экология",
  "консультации",
  "экологические стандарты",
  "экологическая оценка"
];

// Generate keywords string
export const generateKeywords = (pageKeywords: string[] = []) => {
  const allKeywords = [...commonKeywords, ...pageKeywords];
  return [...new Set(allKeywords)].join(', ');
};
