import { useState, ReactNode, useEffect } from 'react';
import { LoadingContext } from './LoadingContext';

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const showLoading = () => setLoadingCount(count => count + 1);
  const hideLoading = () => setLoadingCount(count => Math.max(0, count - 1));

  useEffect(() => {
    if (loadingCount > 0) {
      setVisible(true);
    } else {
      // delay to allow fade out
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [loadingCount]);

  return (
    <LoadingContext.Provider value={{ loadingCount, showLoading, hideLoading }}>
      {children}
      {(loadingCount > 0 || visible) && (
        <div className={`loading-overlay ${loadingCount === 0 ? 'fade-out' : ''}`}>
          <div className="spinner-border text-primary" />
        </div>
      )}
    </LoadingContext.Provider>
  );
};
