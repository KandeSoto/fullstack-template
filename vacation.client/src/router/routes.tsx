// src/constants/routes.ts
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { book, gift } from 'ionicons/icons';

import { Dashboard } from '@src/pages/dashboard/Dashboard';
import { Areas } from '@src/pages/catalogs';
import { NotFound } from '@src/pages/NotFound';

export interface AppRoute {
  name: string;
  path: string;
  icon?: string;
  element?: ReactNode;
  children?: AppRoute[];
}

export const HOME_ROUTE = '/dashboard';

export const ROUTES: AppRoute[] = [
  {
    name: 'Dashboard',
    path: HOME_ROUTE,
    icon: gift,
    element: <Dashboard />
  },
  {
    name: 'menu.admin',
    path: '/administrativo',
    icon: gift,
    element: <Outlet />,
    children: [
      {
        name: 'menu.area',
        path: 'areas',
        icon: book,
        element: <Areas />
      },
      {
        name: 'menu.users',
        path: 'usuarios',
        icon: book,
        element: <h1>Usuarios</h1>
      }
    ]
  },
  {
    name: 'menu.vacation',
    path: '/vacaciones',
    icon: gift,
    element: <Outlet />,
    children: [
      {
        name: 'menu.adminvacation',
        path: 'admin',
        icon: book,
        element: <h1>Vacaciones Administración</h1>
      },
      {
        name: 'menu.supervisorvacation',
        path: 'supervisor',
        icon: book,
        element: <h1>Vacaciones supervisor</h1>
      },
      {
        name: 'menu.operatorlogin',
        path: 'login-operador',
        icon: book,
        element: <h1>Vacaciones login operador</h1>
      }
    ]
  },
  {
    name: 'menu.report',
    path: '/reportes',
    icon: gift,
    element: <Outlet />,
    children: [
      {
        name: 'menu.rhreport',
        path: 'rh',
        icon: book,
        element: <h1>Reporte RH</h1>
      },
      {
        name: 'menu.operationcontrol',
        path: 'operaciones',
        icon: book,
        element: <h1>Reporte Operaciones</h1>
      },
      {
        name: 'menu.supervisor',
        path: 'supervisor',
        icon: book,
        element: <h1>Reporte Supervisor</h1>
      }
    ]
  },
  {
    name: 'Home',
    path: '/',
    element: <Navigate to="/dashboard" replace />
  },
  {
    name: 'Not Found',
    path: '*',
    element: <NotFound />
  }
];
