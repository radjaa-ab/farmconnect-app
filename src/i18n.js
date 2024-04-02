import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInAr from './locales/ar/translation.json';
import translationsInFr from './locales/fr/translation.json';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


  const resources = {
  ar: {
    translation: translationsInAr
  },
  fr: {
    translation: translationsInFr
  },
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // resources are important to load translations for the languages.
    lng: localStorage.getItem("lang"), // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "fr", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });
export default i18n;