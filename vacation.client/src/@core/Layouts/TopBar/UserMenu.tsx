import { ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"
import { LanguageDropdown } from '@src/@core/components';
import avatar from '../../img/Heijiro.png';

export const UserMenu = () => {
  return (
    <div className="header-btn-lg pe-0">
        <div className="widget-content p-0">
            <div className="widget-content-wrapper">

                <div className="widget-content-left">
                    <ButtonGroup>
                        <UncontrolledDropdown inNavbar>
                            <DropdownToggle nav caret className="p-0" color="link">
                                <img width="42" className="rounded-circle" src={avatar} />                                           
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-lg" right>
                                <DropdownItem header className="dropdown-menu-header bg-secondary">
                                    <div className="menu-header-image opacity-2"></div>
                                    <div className="menu-header-content text-start">
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <img width="42" className="rounded-circle" src={avatar} alt="AvatarUser" /> 
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading"> Heijiro Corral</div>
                                                    <div className="widget-subheading opacity-8"> Gerente Desarrollo de Apps</div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </DropdownItem>
                            
                                <LanguageDropdown />
                                
                                <DropdownItem>
                                    Acerca
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="flex-column text-center pt-3 pb-3">
                                    v1.0.0
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ButtonGroup>
                </div>

                <div className="widget-content-lef ms-3 header-user-info">
                    <div className="widget-heading"> Heijiro Corral</div>
                    <div className="widget-subheading"> Gerente Desarrollo de Apps</div>
                </div>
            
            </div>
        </div>
    </div>
  )
}
