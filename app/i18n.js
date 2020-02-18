// /**
//  * i18n.js
//  *
//  * This will setup the i18n language files and locale data for your app.
//  *
//  *   IMPORTANT: This file is used by the internal build
//  *   script `extract-intl`, and must use CommonJS module syntax
//  *   You CANNOT use import/export in this file.
//  */
// const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
// const enLocaleData = require('react-intl/locale-data/en');
// const deLocaleData = require('react-intl/locale-data/de');
// const frLocaleData = require('react-intl/locale-data/fr');
// const viLocaleData = require('react-intl/locale-data/vi');

// const enTranslationMessages = require('./translations/en.json');
// const deTranslationMessages = require('./translations/de.json');
// const frTranslationMessages = require('./translations/fr.json');
// const viTranslationMessages = require('./translations/vi.json');

// addLocaleData(enLocaleData);
// addLocaleData(deLocaleData);
// addLocaleData(frLocaleData);
// addLocaleData(viLocaleData);

// const DEFAULT_LOCALE = 'en';

// // prettier-ignore
// const appLocales = [
//     'en',
//     'vi',
// ];

// const formatTranslationMessages = (locale, messages) => {
//     const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
//     const flattenFormattedMessages = (formattedMessages, key) => {
//         const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
//         return Object.assign(formattedMessages, { [key]: formattedMessage });
//     };
//     return Object.keys(messages).reduce(flattenFormattedMessages, {});
// };

// const translationMessages = {
//     en: formatTranslationMessages('en', enTranslationMessages),
//     de: formatTranslationMessages('de', deTranslationMessages),
//     fr: formatTranslationMessages('fr', frTranslationMessages),
//     vi: formatTranslationMessages('vi', viTranslationMessages),
// };

// exports.appLocales = appLocales;
// exports.formatTranslationMessages = formatTranslationMessages;
// exports.translationMessages = translationMessages;
// exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import En from "./translations/En";
import Vi from "./translations/Vi";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    resources: {
      en: { translation: En },
      vi: { translation: Vi }
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default,
    }
  });
let DEFAULT_LOCALE = "vi";
export default i18n;
export { DEFAULT_LOCALE };
