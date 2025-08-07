
import { useEffect, useRef, useCallback } from 'react';
import { throttle } from '../lib/performance';

export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const isMounted = useRef(false);

  const updateCursor = useCallback((x: number, y: number) => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower || !isMounted.current) return;

    // Используем только transform для избежания reflow
    const transformCursor = `translate3d(${x}px, ${y}px, 0)`;
    const transformFollower = `translate3d(${x}px, ${y}px, 0)`;

    // Батчим все DOM операции в одном RAF
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (cursor && follower && isMounted.current) {
        cursor.style.transform = transformCursor;
        follower.style.transform = transformFollower;
      }
    });
  }, []);

  // Уменьшенный throttle для более плавной анимации
  const throttledUpdateCursor = useCallback(
    throttle((e: MouseEvent) => {
      updateCursor(e.clientX, e.clientY);
    }, 8), // ~120 FPS для курсора
    [updateCursor]
  );

  useEffect(() => {
    isMounted.current = true;
    
    // Проверяем поддержку hover для десктопов
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    document.addEventListener('mousemove', throttledUpdateCursor, { passive: true });

    return () => {
      isMounted.current = false;
      document.removeEventListener('mousemove', throttledUpdateCursor);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [throttledUpdateCursor]);

  return { cursorRef, followerRef };
};
