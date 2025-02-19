import {RemixI18Next} from 'remix-i18next';
import {createCookie} from '@shopify/remix-oxygen';

import i18n from '~/i18n';

import enCommon from '../public/locales/en/common.json';
import deCommon from '../public/locales/de/common.json';

export const localeCookie = createCookie('locale', {
 path: '/',
 httpOnly: true,
});
const i18next = new RemixI18Next({
 detection: {
   supportedLanguages: i18n.supportedLngs,
   fallbackLanguage: i18n.fallbackLng,
   cookie: localeCookie,
 },
 // This is the configuration for i18next used
 // when translating messages server-side only
 i18next: {
   ...i18n,
   supportedLngs: ['de', 'en'],
   resources: {
     de: {common: deCommon},
     en: {common: enCommon},
   },
 },
 // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
 // E.g. The Backend plugin for loading translations from the file system
 // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
});

export default i18next;