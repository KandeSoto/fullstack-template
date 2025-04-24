import { Menu } from "./Menu";
import { NotificationButton } from "./NotificationButton";
import { UserMenu } from "./UserMenu";

export const HeaderContent = () => {
  return (
    <div className="app-header__content">
        <div className="app-header-left">      
          <Menu />                
        </div>
        <div className="app-header-right">
            <NotificationButton />
            <UserMenu />                      
        </div>            
    </div>
  )
}
