import 'i18next';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import { resources } from '@/locales/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: (typeof resources)['en'];
  }
}
