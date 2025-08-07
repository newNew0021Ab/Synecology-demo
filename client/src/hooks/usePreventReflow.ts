
import { useLayoutEffect, useRef } from 'react';

export const usePreventReflow = () => {
  const elementRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Предотвращаем мигание через visibility
    element.style.visibility = 'hidden';
    element.style.opacity = '0';
    element.style.transform = 'translateZ(0)';

    // Показываем элемент после следующего кадра
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (element) {
          element.style.visibility = 'visible';
          element.style.opacity = '1';
          element.classList.add('loaded');
        }
      });
    });
  }, []);

  return elementRef;
};

// Хук для батчинга DOM операций
export const useBatchedDOMOperations = () => {
  const pendingOperations = useRef<(() => void)[]>([]);
  const isScheduled = useRef(false);

  const batchDOMOperation = (operation: () => void) => {
    pendingOperations.current.push(operation);

    if (!isScheduled.current) {
      isScheduled.current = true;
      requestAnimationFrame(() => {
        // Выполняем все операции в одном кадре
        pendingOperations.current.forEach(op => op());
        pendingOperations.current = [];
        isScheduled.current = false;
      });
    }
  };

  return batchDOMOperation;
};
