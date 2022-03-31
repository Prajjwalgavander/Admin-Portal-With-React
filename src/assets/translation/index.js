import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import deCommon from './locales/de/common.json'
import esCommon from './locales/es/common.json'
import frCommon from './locales/fr/common.json'
import ptCommon from './locales/pt/common.json'
import ruCommon from './locales/ru/common.json'
import { LANGUAGES } from 'utils/constants'
import { getLocalLanguage } from 'utils/common-services/localstorage.services'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon
    },
    de: {
      common: deCommon
    },
    es: {
      common: esCommon
    },
    fr: {
      common: frCommon
    },
    pt: {
      common: ptCommon
    },
    ru: {
      common: ruCommon
    }
  }, // languages available
  lng: getLocalLanguage() || LANGUAGES[0].languageCode, // by default english language
  fallbackLng: LANGUAGES[0].languageCode,
  ns: 'common', //
  defaultNS: 'common',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
