
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Пассивные слушатели событий
export const addPassiveEventListener = (
  element: Element | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  const passiveOptions = {
    passive: true,
    ...options
  };
  element.addEventListener(event, handler, passiveOptions);
};

// Intersection Observer для ленивой загрузки
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Оптимизация запросов к DOM
export const batchDOMOperations = (operations: (() => void)[]) => {
  requestAnimationFrame(() => {
    operations.forEach(op => op());
  });
};

// Предзагрузка критических ресурсов
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Оптимизированный скролл до элемента
export const smoothScrollTo = (element: Element, options?: ScrollIntoViewOptions) => {
  const defaultOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'start',
    ...options
  };
  
  element.scrollIntoView(defaultOptions);
};
