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
            escapeValue: false, // not needed for react as it escapes by default,

        }
    });

export default i18n;
