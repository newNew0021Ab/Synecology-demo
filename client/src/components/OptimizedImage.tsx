
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createIntersectionObserver } from '@/lib/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [isReady, setIsReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Предотвращаем мигание через CSS visibility
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.visibility = 'hidden';
      containerRef.current.style.opacity = '0';
    }
  }, []);

  // Показываем контейнер только после готовности
  useLayoutEffect(() => {
    if (isReady && containerRef.current) {
      containerRef.current.style.visibility = 'visible';
      containerRef.current.style.opacity = '1';
    }
  }, [isReady]);

  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = createIntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '100px' }
      );

      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } else {
      setIsReady(true);
    }
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsReady(true);
  };

  const handleError = () => {
    setIsReady(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden transition-opacity duration-300 ${className}`}
      style={{ 
        width, 
        height,
        willChange: 'transform, opacity',
        transform: 'translateZ(0)' // GPU acceleration
      }}
    >
      {placeholder && !isLoaded && isInView && (
        <div 
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1) translateZ(0)',
            willChange: 'opacity'
          }}
        />
      )}
      
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            transition-opacity duration-300 
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          loading={loading}
          decoding="async"
          style={{
            contain: 'layout style paint',
            contentVisibility: 'auto',
            transform: 'translateZ(0)',
            willChange: 'opacity'
          }}
        />
      )}
    </div>
  );
};
