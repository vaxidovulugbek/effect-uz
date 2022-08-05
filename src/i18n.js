import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import transUzb from './Lang/uz.json'
import transRus from './Lang/ru.json'
import transEng from './Lang/oz.json'


const resources = {
  oz: {
    translation: transEng
  },
  uz: {
    translation: transUzb
  },
  ru : {
    translation: transRus
  }
};


i18n
.use(initReactI18next) 
  .init({
    resources,
    lng: "uz",
    fallbackLng: "oz",
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false
    }
  });
  

  export default i18n