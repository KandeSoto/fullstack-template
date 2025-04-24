import { DropdownItem } from "reactstrap"
import IconoIonic from "../../components/Ionicon"
import { SubMenuItemProps } from "../types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SubMenuItem = ({iconSubMenu, subMenuTitle, route}: SubMenuItemProps) => {
  const { t } = useTranslation();
  return (
    <DropdownItem tag={Link} to={route}>
      <IconoIonic name={iconSubMenu} className="nav-link-icon" />
      <span className="px-2">{t(subMenuTitle)}</span>
    </DropdownItem>
  )
}
