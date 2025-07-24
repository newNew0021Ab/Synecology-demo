import { useEffect, useRef, useCallback } from 'react';
import { throttle } from '../lib/performance';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const updateParallax = useCallback((scrollY: number) => {
    const element = elementRef.current;
    if (!element) return;

    // Отмена предыдущего кадра
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // GPU-ускоренная анимация
    animationFrameRef.current = requestAnimationFrame(() => {
      const rate = scrollY * -speed;
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
      element.style.willChange = 'transform';
    });
  }, [speed]);

  // Throttle для оптимизации производительности
  const throttledUpdateParallax = useCallback(
    throttle(() => {
      updateParallax(window.pageYOffset);
    }, 16), // ~60 FPS
    [updateParallax]
  );

  useEffect(() => {
    // Пассивный слушатель для лучшей производительности
    window.addEventListener('scroll', throttledUpdateParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledUpdateParallax);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [throttledUpdateParallax]);

  return elementRef;
};