import { i18nInit } from './init-i18n';

import enTranslations from './locales/en/translation'; // English
import ruTranslations from './locales/ru/translation'; // Russian
import esTranslations from './locales/es/translation'; // Spanish
import ptTranslations from './locales/pt/translation'; // Portuguese
import hiTranslations from './locales/hi/translation'; // Hindi
import idTranslations from './locales/id/translation'; // Indonesian
import trTranslations from './locales/tr/translation'; // Turkish
import frTranslations from './locales/fr/translation'; // French
import itTranslations from './locales/it/translation'; // Italian
import deTranslations from './locales/de/translation'; // German
import viTranslations from './locales/vi/translation'; // Vietnamese
import thTranslations from './locales/th/translation'; // Thai
import bnTranslations from './locales/bn/translation'; // Bengali
import jaTranslations from './locales/ja/translation'; // Japanese
import koTranslations from './locales/ko/translation'; // Korean
import tlTranslations from './locales/tl/translation'; // Tagalog
import uzTranslations from './locales/uz/translation'; // Uzbek
import zhTranslations from './locales/zh/translation'; // Chinese

const i18n = i18nInit({
  en: enTranslations,
  ru: ruTranslations,
  es: esTranslations,
  pt: ptTranslations,
  hi: hiTranslations,
  id: idTranslations,
  tr: trTranslations,
  fr: frTranslations,
  it: itTranslations,
  de: deTranslations,
  vi: viTranslations,
  th: thTranslations,
  bn: bnTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  tl: tlTranslations,
  uz: uzTranslations,
  zh: zhTranslations,
});

export const languages = {
  bn: 'বাংলা',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  ru: 'Русский',
  th: 'ไทย',
  tl: 'Tagalog',
  tr: 'Türkçe',
  uz: "O'zbek",
  vi: 'Tiếng Việt',
  zh: '中文',
};

export default i18n;
