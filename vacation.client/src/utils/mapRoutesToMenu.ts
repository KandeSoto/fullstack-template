// src/utils/mapRoutesToMenu.ts
import { AppRoute } from '@src/router/routes';
import { MenuItemProps } from '@src/@core/Layouts/types';

export const mapRoutesToMenu = (routes: AppRoute[]): MenuItemProps[] => {
  return routes
    .filter(r => r.children?.length) // solo agrupadores (como Administrativo, Vacaciones...)
    .map(r => ({
      iconMenu: r.icon || '',
      menuTitle: r.name,
      subMenuList: r.children!.map(child => ({
        iconSubMenu: child.icon || '',
        subMenuTitle: child.name,
        route: `${r.path}/${child.path}`.replace(/\/+/, '/'),
      })),
    }));
};
