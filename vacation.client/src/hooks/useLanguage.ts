import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lang: 'es' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return {
    currentLanguage,
    changeLanguage,
  };
};
