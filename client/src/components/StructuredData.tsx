
import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'BreadcrumbList' | 'WebPage';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    let structuredData;

    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Synecology",
          "url": "https://synecology.ru",
          "logo": "https://synecology.ru/og-image.jpg",
          "description": "Экологический консалтинг для устойчивого будущего. Экспертные решения в области экологической оценки, планирования устойчивости и соответствия требованиям.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BY",
            "addressLocality": "Минск"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://synecology.ru/contact"
          },
          "sameAs": [
            "https://synecology.ru"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 5,
            "maxValue": 20
          }
        };
        break;

      case 'WebSite':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Synecology",
          "url": "https://synecology.ru",
          "description": "Экологический консалтинг в Беларуси",
          "inLanguage": "ru-BY",
          "publisher": {
            "@type": "Organization",
            "name": "Synecology"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://synecology.ru/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };
        break;

      case 'Service':
        if (data) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.title,
            "description": data.description,
            "provider": {
              "@type": "Organization",
              "name": "Synecology",
              "url": "https://synecology.ru"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Беларусь"
            },
            "serviceType": "Экологический консалтинг",
            "url": `https://synecology.ru/services/${data.slug}`
          };
        }
        break;

      case 'Article':
        if (data) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.title,
            "description": data.excerpt,
            "author": {
              "@type": "Organization",
              "name": "Synecology"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Synecology",
              "logo": {
                "@type": "ImageObject",
                "url": "https://synecology.ru/og-image.jpg"
              }
            },
            "datePublished": data.publishedAt,
            "dateModified": data.updatedAt,
            "url": `https://synecology.ru/blog/${data.slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://synecology.ru/blog/${data.slug}`
            }
          };

          if (data.coverImage) {
            structuredData.image = {
              "@type": "ImageObject",
              "url": data.coverImage,
              "width": 1200,
              "height": 630
            };
          }
        }
        break;

      case 'BreadcrumbList':
        if (data && Array.isArray(data)) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": item.url
            }))
          };
        }
        break;

      case 'WebPage':
        if (data) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": data.title,
            "description": data.description,
            "url": data.url || window.location.href,
            "mainEntity": {
              "@type": "Organization",
              "name": "Synecology"
            },
            "breadcrumb": data.breadcrumb
          };
        }
        break;
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData, null, 2);
      script.id = `structured-data-${type}`;
      
      // Удаляем предыдущий script если есть
      const existingScript = document.getElementById(`structured-data-${type}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      
      document.head.appendChild(script);

      // Cleanup при unmount
      return () => {
        const scriptToRemove = document.getElementById(`structured-data-${type}`);
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove);
        }
      };
    }
  }, [type, data]);

  return null;
}

export default StructuredData;
