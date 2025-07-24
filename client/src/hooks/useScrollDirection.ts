
import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Показываем хедер в самом верху
      if (currentScrollY < 10) {
        setVisible(true);
        setScrollDirection(null);
        setPrevScrollY(currentScrollY);
        return;
      }

      // Определяем направление скролла
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        // Скролл вниз - скрываем хедер
        setScrollDirection('down');
        setVisible(false);
      } else if (currentScrollY < prevScrollY) {
        // Скролл вверх - показываем хедер
        setScrollDirection('up');
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [prevScrollY]);

  return { scrollDirection, visible };
};
