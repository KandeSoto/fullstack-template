import { createContext } from 'react';
import { LoadingContextType } from './types';

export const LoadingContext = createContext<LoadingContextType>({
  loadingCount: 0,
  showLoading: () => {},
  hideLoading: () => {},
});
