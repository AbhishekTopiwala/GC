import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import guTranslation from './locales/gu.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    gu: {
        translation: guTranslation,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'gu', // default to Gujarati if detection fails
        debug: false,
        detection: {
            order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
