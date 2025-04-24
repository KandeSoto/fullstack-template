import IconoIonic from '../../components/Ionicon';
import { home } from 'ionicons/icons';
import { NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from '@src/router/routes';
import { useTranslation } from 'react-i18next';

export const HeaderLogo = () => {
  const { t } = useTranslation();

  return (       
    <NavbarBrand className='app-header__logo' tag={Link} to={HOME_ROUTE}>
      <IconoIonic name={home} className="header-text-icon-white"/>
      <div className="header-text-icon-white p-2">{t('nameApp')}</div> 
    </NavbarBrand>                    
  )
}
