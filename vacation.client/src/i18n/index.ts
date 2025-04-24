import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(LanguageDetector) // detecta automáticamente el idioma del navegador
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // idioma predeterminado
    debug: false,
    interpolation: {
      escapeValue: false, // no escapar HTML
    },
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  });

export default i18n;
