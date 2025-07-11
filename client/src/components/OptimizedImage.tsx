
import React from 'react';
import { useOptimizedImage, ImageOptions } from '@/lib/imageOptimizer';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  imageOptions?: ImageOptions;
  lazy?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  imageOptions,
  lazy = true,
  className,
  ...props 
}: OptimizedImageProps) {
  const { src: optimizedSrc, srcSet, sizes } = useOptimizedImage(src, imageOptions);

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      className={className}
      {...props}
    />
  );
}
