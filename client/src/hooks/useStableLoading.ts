
import { useState, useLayoutEffect, useRef, useCallback } from 'react';

interface UseStableLoadingOptions<T> {
  fetcher: () => Promise<T>;
  initialData?: T;
  minLoadingTime?: number; // минимальное время показа skeleton
}

interface UseStableLoadingReturn<T> {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useStableLoading<T>({
  fetcher,
  initialData,
  minLoadingTime = 300 // минимум 300ms для избежания мигания
}: UseStableLoadingOptions<T>): UseStableLoadingReturn<T> {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const loadingStartTime = useRef<number>(0);
  const isMountedRef = useRef(true);

  const loadData = useCallback(async () => {
    if (!isMountedRef.current) return;
    
    loadingStartTime.current = Date.now();
    setError(null);
    
    try {
      const result = await fetcher();
      
      if (!isMountedRef.current) return;
      
      // Обеспечиваем минимальное время загрузки для стабильности UI
      const elapsed = Date.now() - loadingStartTime.current;
      const remainingTime = Math.max(0, minLoadingTime - elapsed);
      
      if (remainingTime > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingTime));
      }
      
      if (isMountedRef.current) {
        setData(result);
        setIsLoading(false);
      }
    } catch (err) {
      if (isMountedRef.current) {
        setError(err as Error);
        setIsLoading(false);
      }
    }
  }, [fetcher, minLoadingTime]);

  useLayoutEffect(() => {
    isMountedRef.current = true;
    loadData();
    
    return () => {
      isMountedRef.current = false;
    };
  }, [loadData]);

  const refetch = useCallback(() => {
    setIsLoading(true);
    loadData();
  }, [loadData]);

  return { data, isLoading, error, refetch };
}
