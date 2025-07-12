
import React from 'react';

interface LoadingOverlayProps {
  isVisible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Анимированный лого */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full border-4 border-sea-green/20 animate-spin">
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-transparent border-t-sea-green animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-sea-green rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Текст загрузки */}
        <div className="space-y-2">
          <div className="text-xl font-heading font-semibold text-dark-slate animate-pulse">
            Загрузка...
          </div>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-sea-green rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-sea-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-sea-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
