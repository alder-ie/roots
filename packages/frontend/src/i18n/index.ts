import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { fallback, supportedLocales } from './common'
import locale from './locale'

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: fallback,
    resources: supportedLocales,
    lng: 'en',
    interpolation: {
      escapeValue: false
    },
    keySeparator: '.'
  })

i18n.addResourceBundle('en', 'translation', locale['en'])

export default i18n
