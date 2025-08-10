import { useRouter } from "wouter";

/**
 * Генерирует URL с параметром from для корректного возврата
 */
export function getUrlWithFrom(targetUrl: string, currentPath: string): string {
  const url = new URL(targetUrl, window.location.origin);
  url.searchParams.set('from', currentPath);
  return url.pathname + url.search;
}

/**
 * Возвращает корректный URL для кнопки "Назад"
 */
export function getBackUrl(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('from');
}

/**
 * Выполняет навигацию назад с учетом параметра from
 */
export function navigateBack(): void {
  const backUrl = getBackUrl();

  if (backUrl) {
    // Если есть параметр from, идем по нему
    window.location.href = backUrl;
  } else {
    // Если нет параметра from, используем стандартный возврат браузера
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Если это первая страница в сессии, идем на главную
      window.location.href = '/';
    }
  }
}

export const getUrlWithFrom = (href: string, currentLocation: string): string => {
  if (!currentLocation || currentLocation === '/') {
    return href;
  }

  const url = new URL(href, window.location.origin);
  url.searchParams.set('from', currentLocation);
  return url.pathname + url.search;
};

export const addFromParam = (href: string, currentLocation: string): string => {
  return getUrlWithFrom(href, currentLocation);
};