import { i18nInit } from './init-i18n';

import enTranslations from './locales/en/translation';
import ruTranslations from './locales/ru/translation';

const i18n = i18nInit({
  en: enTranslations,
  ru: ruTranslations,
});

export default i18n;
