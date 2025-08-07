
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { usePreventReflow } from '@/hooks/usePreventReflow';
import { cn } from '@/lib/utils';

interface StableCardProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  minHeight?: number;
  skeletonContent?: React.ReactNode;
}

const StableCard: React.FC<StableCardProps> = ({
  isLoading,
  children,
  className,
  delay = 0,
  minHeight = 300,
  skeletonContent
}) => {
  const cardRef = usePreventReflow();
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultSkeleton = (
    <div className="space-y-4 p-6">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full transition-all duration-300 ease-out",
        className
      )}
      style={{ minHeight: `${minHeight}px` }}
    >
      <div
        ref={cardRef}
        className="absolute inset-0 w-full h-full"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full glassmorphic rounded-2xl overflow-hidden"
            >
              {skeletonContent || defaultSkeleton}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StableCard;
