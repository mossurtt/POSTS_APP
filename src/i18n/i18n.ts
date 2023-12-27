import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import translationEnglish from './translation/en/translation.json';
import translationPolish from './translation/pl/translation.json';
import translationUkrainian from './translation/uk/translation.json';

const resources = {
  en: {
    translation: translationEnglish,
  },
  pl: {
    translation: translationPolish,
  },
  uk: {
    translation: translationUkrainian,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
});

export default i18next;
