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
    window.location.href = backUrl;
  } else {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  }
}

export const addFromParam = (href: string, currentLocation: string): string => {
  return getUrlWithFrom(href, currentLocation);
};