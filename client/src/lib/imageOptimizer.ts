
export interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
}

export class ImageOptimizer {
  private static cloudinaryBase = 'https://res.cloudinary.com/demo/image/fetch/';
  
  static optimizeImage(url: string, options: ImageOptions = {}): string {
    const {
      width = 800,
      height,
      quality = 80,
      format = 'auto'
    } = options;

    // Если это уже оптимизированное изображение, возвращаем как есть
    if (url.includes('cloudinary.com') || url.includes('?')) {
      return url;
    }

    // Строим параметры оптимизации
    const params = [
      `f_${format}`,
      `q_${quality}`,
      width && `w_${width}`,
      height && `h_${height}`,
      'c_fill', // crop and fill
      'g_auto' // automatic gravity/focus
    ].filter(Boolean).join(',');

    return `${this.cloudinaryBase}${params}/${encodeURIComponent(url)}`;
  }

  // Для responsive изображений
  static generateSrcSet(url: string, sizes: number[] = [400, 800, 1200]): string {
    return sizes
      .map(size => `${this.optimizeImage(url, { width: size })} ${size}w`)
      .join(', ');
  }
}

// Хук для использования в компонентах
export const useOptimizedImage = (url: string, options?: ImageOptions) => {
  return {
    src: ImageOptimizer.optimizeImage(url, options),
    srcSet: ImageOptimizer.generateSrcSet(url),
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  };
};
