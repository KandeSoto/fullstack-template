import { Nav } from "reactstrap"
import { MenuItem } from "./MenuItem";
//import { MENU } from "@src/router/menuItems"
import { mapRoutesToMenu } from "@src/utils/mapRoutesToMenu";
import { ROUTES } from "@src/router/routes";

export const Menu = () => {
  const menuItems = mapRoutesToMenu(ROUTES); // ✅ generado desde rutas reales

  return (                                 
    <Nav className="header-megamenu nav">
      {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
      ))}                   
    </Nav>                  
  )
}
