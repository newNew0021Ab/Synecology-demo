
import { useEffect, useCallback, useRef } from 'react';
import { throttle } from '../lib/performance';

interface UseOptimizedScrollProps {
  onScroll?: (scrollY: number) => void;
  throttleMs?: number;
}

export const useOptimizedScroll = ({ 
  onScroll, 
  throttleMs = 16 
}: UseOptimizedScrollProps) => {
  const frameRef = useRef<number>();
  const isMobile = useRef(false);

  useEffect(() => {
    // Определяем мобильное устройство
    isMobile.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                      window.innerWidth < 768;
  }, []);

  const handleScroll = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    // Батчим все чтения DOM в одном RAF
    frameRef.current = requestAnimationFrame(() => {
      // Читаем все layout-свойства за один раз
      const scrollY = window.pageYOffset;
      
      // На мобильных устройствах используем прямой вызов
      if (isMobile.current) {
        onScroll?.(scrollY);
      } else {
        // На десктопе добавляем дополнительную оптимизацию
        requestAnimationFrame(() => {
          onScroll?.(scrollY);
        });
      }
    });
  }, [onScroll]);

  const throttledScroll = useCallback(
    // Увеличиваем throttle для мобильных устройств
    throttle(handleScroll, isMobile.current ? 33 : throttleMs),
    [handleScroll, throttleMs]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [throttledScroll]);

  const scrollTo = useCallback((element: Element, options?: ScrollIntoViewOptions) => {
    const defaultOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start',
      ...options
    };
    
    element.scrollIntoView(defaultOptions);
  }, []);

  return { scrollTo };
};
