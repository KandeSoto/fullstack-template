import { Navbar } from "reactstrap"
import { HeaderLogo } from "./HeaderLogo"
import { HeaderContent } from "./HeaderContent"

export const TopBar = () => {
  return (
    <Navbar container={false} className="app-header header-shadow bg-night-sky header-text-light">      
      <HeaderLogo />      
      <HeaderContent />
    </Navbar>
  )
}
