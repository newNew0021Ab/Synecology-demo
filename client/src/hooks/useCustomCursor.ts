import { useEffect, useRef, useCallback } from 'react';
import { throttle } from '../lib/performance';

export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const updateCursor = useCallback((x: number, y: number) => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Использование transform вместо left/top для GPU-ускорения
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    // Оптимизированная анимация follower
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }, []);

  // Throttle для снижения частоты вызовов
  const throttledUpdateCursor = useCallback(
    throttle((e: MouseEvent) => {
      updateCursor(e.clientX, e.clientY);
    }, 16), // ~60 FPS
    [updateCursor]
  );

  useEffect(() => {
    document.addEventListener('mousemove', throttledUpdateCursor, { passive: true });

    return () => {
      document.removeEventListener('mousemove', throttledUpdateCursor);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [throttledUpdateCursor]);

  return { cursorRef, followerRef };
};