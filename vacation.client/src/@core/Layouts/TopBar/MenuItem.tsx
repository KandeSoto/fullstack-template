import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"
import { MenuItemProps } from "../types";
import IconoIonic from "../../components/Ionicon"
import { SubMenuItem } from "./SubMenuItem";
import { useTranslation } from 'react-i18next';

export const MenuItem = ({iconMenu, menuTitle, subMenuList}: MenuItemProps) => {
  const { t } = useTranslation();
  return (
    <UncontrolledDropdown nav inNavbar className="nav-item">
      <DropdownToggle nav caret>
        <IconoIonic name={iconMenu} className="nav-link-icon"/>
        {t(menuTitle)}
      </DropdownToggle>
      <DropdownMenu>
        {subMenuList.map(({iconSubMenu, subMenuTitle, route}, index) => (
          <SubMenuItem key={index} iconSubMenu={iconSubMenu} subMenuTitle={subMenuTitle} route={route}/>
        ))}     
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}
