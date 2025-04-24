// src/router/AppRoutes.tsx
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';
import { generateRoutesFromConfig } from './generateRoutes';

export const AppRoutes = () => {
  return useRoutes(generateRoutesFromConfig(ROUTES));
};
