
import { useState, useEffect, useCallback } from 'react';

interface LoadingState {
  isLoading: boolean;
  loadingCount: number;
}

let globalLoadingState: LoadingState = {
  isLoading: false,
  loadingCount: 0
};

let listeners: ((state: LoadingState) => void)[] = [];

const updateGlobalState = (newState: LoadingState) => {
  globalLoadingState = newState;
  listeners.forEach(listener => listener(newState));
};

export const useGlobalLoading = () => {
  const [state, setState] = useState(globalLoadingState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  const startLoading = useCallback(() => {
    const newCount = globalLoadingState.loadingCount + 1;
    updateGlobalState({
      isLoading: true,
      loadingCount: newCount
    });
  }, []);

  const stopLoading = useCallback(() => {
    const newCount = Math.max(0, globalLoadingState.loadingCount - 1);
    updateGlobalState({
      isLoading: newCount > 0,
      loadingCount: newCount
    });
  }, []);

  return {
    isLoading: state.isLoading,
    startLoading,
    stopLoading
  };
};

// Глобальные функции для использования вне компонентов
export const startGlobalLoading = () => {
  const newCount = globalLoadingState.loadingCount + 1;
  updateGlobalState({
    isLoading: true,
    loadingCount: newCount
  });
};

export const stopGlobalLoading = () => {
  const newCount = Math.max(0, globalLoadingState.loadingCount - 1);
  updateGlobalState({
    isLoading: newCount > 0,
    loadingCount: newCount
  });
};
