import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

type TranslationContent = {
  [key: string]: {
    [key: string]: string;
  };
};

type Translations = {
  [lang: string]: TranslationContent;
};

export const i18nInit = (translations: Translations) => {
  const resources: any = {};
  for (const lang in translations) {
    resources[lang] = { translation: translations[lang] };
  }
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      pluralSeparator: '_',
      resources,
      detection: {
        order: ['cookie', 'navigator'],
        caches: [], // Disable caching by default
      },
      debug: false,
      fallbackLng: 'en', // use en if detected lng is not available
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    } as any);
  return i18n;
};
