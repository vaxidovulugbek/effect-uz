import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import transUzb from './Lang/uz.json'
import transRus from './Lang/ru.json'
import transEng from './Lang/eng.json'


const resources = {
  eng: {
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
    fallbackLng: "eng",
    fallbackLng: "rus",

    interpolation: {
      escapeValue: false
    }
  });
  

  export default i18n