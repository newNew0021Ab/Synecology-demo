
import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { startGlobalLoading, stopGlobalLoading } from './useGlobalLoading';

export const useRouteLoading = () => {
  const [location] = useLocation();

  useEffect(() => {
    startGlobalLoading();
    
    // Небольшая задержка для имитации загрузки маршрута
    const timer = setTimeout(() => {
      stopGlobalLoading();
    }, 300);

    return () => {
      clearTimeout(timer);
      stopGlobalLoading();
    };
  }, [location]);
};
