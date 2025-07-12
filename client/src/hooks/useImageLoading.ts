
import { useEffect } from 'react';
import { startGlobalLoading, stopGlobalLoading } from './useGlobalLoading';

export const useImageLoading = () => {
  useEffect(() => {
    const handleImageLoad = () => {
      stopGlobalLoading();
    };

    const handleImageError = () => {
      stopGlobalLoading();
    };

    const handleImageStart = () => {
      startGlobalLoading();
    };

    // Отслеживание всех изображений на странице
    const trackImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        if (!img.complete) {
          handleImageStart();
          img.addEventListener('load', handleImageLoad, { once: true });
          img.addEventListener('error', handleImageError, { once: true });
        }
      });
    };

    // Отслеживание новых изображений через MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // Проверяем добавленные img элементы
            if (element.tagName === 'IMG') {
              const img = element as HTMLImageElement;
              if (!img.complete) {
                handleImageStart();
                img.addEventListener('load', handleImageLoad, { once: true });
                img.addEventListener('error', handleImageError, { once: true });
              }
            }
            
            // Проверяем img внутри добавленных элементов
            const childImages = element.querySelectorAll('img');
            childImages.forEach(img => {
              if (!img.complete) {
                handleImageStart();
                img.addEventListener('load', handleImageLoad, { once: true });
                img.addEventListener('error', handleImageError, { once: true });
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Первоначальная проверка
    trackImages();

    return () => {
      observer.disconnect();
    };
  }, []);
};
