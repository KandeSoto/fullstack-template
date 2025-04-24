// src/router/generateRoutes.ts
import { AppRoute } from './routes';
import { RouteObject } from 'react-router-dom';

export const generateRoutesFromConfig = (routes: AppRoute[]): RouteObject[] => {
  return routes.map(route => ({
    path: route.path,
    element: route.element,
    children: route.children ? generateRoutesFromConfig(route.children) : undefined,
  }));
};
