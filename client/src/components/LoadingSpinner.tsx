
import React from 'react';
import { Leaf } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-off-white via-white to-sea-green/5 flex items-center justify-center z-50">
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sea-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-blue/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main loading logo container */}
        <div className="relative mb-8">
          {/* Glassmorphic container for logo */}
          <div className="relative w-20 h-20 glassmorphic rounded-2xl flex items-center justify-center animate-float">
            {/* Animated leaf logo */}
            <Leaf className="w-8 h-8 text-sea-green animate-spin-slow" />
            
            {/* Rotating ring around logo */}
            <div className="absolute inset-0 rounded-2xl border-2 border-sea-green/30 animate-spin"></div>
            
            {/* Pulsing outer ring */}
            <div className="absolute -inset-2 rounded-3xl border border-sea-green/20 animate-ping"></div>
          </div>

          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold text-dark-slate mb-2 animate-fade-in">
            Synecology
          </h3>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-sea-green rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-sea-green rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-sea-green rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
