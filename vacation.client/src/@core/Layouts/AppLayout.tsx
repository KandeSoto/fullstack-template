import { TopBar } from './TopBar';
import { AppRoutes } from '@src/router/AppRoutes';

export const AppLayout = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
      <TopBar />
      <div className="app-main">
        <div className="app-main__inner">
          <AppRoutes />
        </div>
      </div>      
    </div>
  );
};
