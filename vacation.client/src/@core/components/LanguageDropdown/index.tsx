import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useLanguage } from '@src/hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

export const LanguageDropdown = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <UncontrolledDropdown direction="down" inNavbar>
      <DropdownToggle nav caret className="dropdown-item">
        {t('language.title')}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          active={currentLanguage === 'es'}
          onClick={() => changeLanguage('es')}
        >
          <Flag code="MX" style={{ width: 20 }} className="me-2" />
          {t('language.spanish')}
        </DropdownItem>
        <DropdownItem
          active={currentLanguage === 'en'}
          onClick={() => changeLanguage('en')}
        >
          <Flag code="US" style={{ width: 20 }} className="me-2" />
          {t('language.english')}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
