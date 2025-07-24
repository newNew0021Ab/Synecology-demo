
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

  const handleScroll = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      onScroll?.(window.pageYOffset);
    });
  }, [onScroll]);

  const throttledScroll = useCallback(
    throttle(handleScroll, throttleMs),
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
