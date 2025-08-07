
import { useLayoutEffect, useRef, useCallback, useState } from 'react';

export const usePreventReflow = () => {
  const elementRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Принудительно устанавливаем hardware acceleration
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
    
    // Предотвращаем flash of unstyled content
    element.style.willChange = 'opacity, transform';
    
    // Оптимизируем для композитинга
    element.style.isolation = 'isolate';
    element.style.contain = 'layout style paint';

    return () => {
      // Cleanup
      if (element) {
        element.style.willChange = 'auto';
      }
    };
  }, []);

  return elementRef;
};

// Хук для батчинга DOM операций с улучшенной производительностью
export const useBatchedDOMOperations = () => {
  const pendingOperations = useRef<(() => void)[]>([]);
  const isScheduled = useRef(false);
  const frameId = useRef<number>();

  const batchDOMOperation = useCallback((operation: () => void) => {
    pendingOperations.current.push(operation);

    if (!isScheduled.current) {
      isScheduled.current = true;
      
      // Отменяем предыдущий frame если он еще не выполнился
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      frameId.current = requestAnimationFrame(() => {
        // Выполняем операции в оптимальном порядке
        const operations = pendingOperations.current;
        pendingOperations.current = [];
        
        // Группируем DOM операции для минимизации reflow
        const reads: (() => void)[] = [];
        const writes: (() => void)[] = [];
        
        operations.forEach(op => {
          // Простая эвристика для разделения read/write операций
          const opString = op.toString();
          if (opString.includes('getBounding') || opString.includes('offset') || 
              opString.includes('client') || opString.includes('scroll')) {
            reads.push(op);
          } else {
            writes.push(op);
          }
        });
        
        // Сначала все чтения, потом все записи
        reads.forEach(op => op());
        writes.forEach(op => op());
        
        isScheduled.current = false;
        frameId.current = undefined;
      });
    }
  }, []);

  return batchDOMOperation;
};

// Хук для стабильных размеров
export const useStableDimensions = (initialWidth?: number, initialHeight?: number) => {
  const [dimensions, setDimensions] = useState({ 
    width: initialWidth || 0, 
    height: initialHeight || 0 
  });
  const elementRef = useRef<HTMLElement>(null);
  const resizeObserver = useRef<ResizeObserver>();

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Устанавливаем начальные размеры если они не заданы
    if (!initialWidth || !initialHeight) {
      const rect = element.getBoundingClientRect();
      setDimensions(prev => ({
        width: initialWidth || rect.width || prev.width,
        height: initialHeight || rect.height || prev.height
      }));
    }

    // Следим за изменениями размеров для предотвращения layout shift
    resizeObserver.current = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    resizeObserver.current.observe(element);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [initialWidth, initialHeight]);

  return { dimensions, elementRef };
};
