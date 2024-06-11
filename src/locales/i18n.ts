import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './en.json';
import fr from './fr.json';

const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';

export const resources = {
  en: { ...en },
  fr: { ...fr }
} as const;

i18next.use(initReactI18next).init({
  ns: ['en', 'fr'],
  resources,
  compatibilityJSON: 'v3',
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
