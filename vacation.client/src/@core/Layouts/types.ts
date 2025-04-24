export interface SubMenuItemProps {
  iconSubMenu: string;
  subMenuTitle: string;
  route: string;
}

export interface MenuItemProps {
  iconMenu: string;
  menuTitle: string;
  subMenuList: SubMenuItemProps[];
}
