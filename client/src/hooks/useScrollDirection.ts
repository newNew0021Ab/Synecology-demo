
import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      
      if (Math.abs(scrollY - prevScrollY) < 10) {
        ticking = false;
        return;
      }
      
      const direction = scrollY > prevScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      
      // Показывать шапку если:
      // 1. В самом верху страницы (scrollY <= 100)
      // 2. Скроллим вверх
      if (scrollY <= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(direction === 'up');
      }
      
      setPrevScrollY(scrollY > 0 ? scrollY : 0);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    const onScroll = () => requestTick();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [prevScrollY]);

  return { scrollDirection, isVisible };
};
