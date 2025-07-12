
import React, { useState, useEffect } from 'react';
import { startGlobalLoading, stopGlobalLoading } from '@/hooks/useGlobalLoading';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  fallback,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    startGlobalLoading();

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      stopGlobalLoading();
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      stopGlobalLoading();
      if (fallback) {
        setImageSrc(fallback);
      }
    };
    
    img.src = src;

    return () => {
      stopGlobalLoading();
    };
  }, [src, fallback]);

  if (isLoading) {
    return (
      <div className={`loading-shimmer ${className}`} {...props}>
        <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
      </div>
    );
  }

  if (hasError && !fallback) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`} {...props}>
        <span className="text-gray-400 text-sm">Изображение недоступно</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${className}`}
      {...props}
    />
  );
};
