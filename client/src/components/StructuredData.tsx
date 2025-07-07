
import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Article' | 'Service' | 'Organization' | 'WebPage';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    let structuredData;

    switch (type) {
      case 'Article':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Person",
            "name": data.author?.name || "Synecology Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Synecology",
            "logo": {
              "@type": "ImageObject",
              "url": "https://synecology.ru/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          }
        };
        break;

      case 'Service':
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
          "serviceType": "Экологическое консультирование",
          "category": "Экологические услуги",
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "RUB"
          }
        };
        break;

      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Synecology",
          "url": "https://synecology.ru",
          "logo": "https://synecology.ru/logo.png",
          "description": "Экологическое консультирование и природоохранные решения",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-495-XXX-XXXX",
            "contactType": "Клиентская поддержка"
          },
          "sameAs": [
            "https://vk.com/synecology",
            "https://t.me/synecology"
          ]
        };
        break;

      default:
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title,
          "description": data.description,
          "url": window.location.href
        };
    }

    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
}
