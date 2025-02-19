// @ts-check

/**
 * @typedef {import('@shopify/hydrogen').Storefront} HydrogenStorefront
 * 
 * // If you want to document your locale information, you can define your own types:
 * 
 * /** 
 *  * @typedef {Object} Locale
 *  * @property {import('@shopify/hydrogen/storefront-api-types').LanguageCode} language
 *  * @property {import('@shopify/hydrogen/storefront-api-types').CountryCode} country
 *  * @property {string} label
 *  * @property {import('@shopify/hydrogen/storefront-api-types').CurrencyCode} currency
 *  *\/
 * 
 * /** 
 *  * @typedef {Locale & { pathPrefix: string }} I18nLocale
 *  *\/
 * 
 * // Since HydrogenStorefront is not generic, just alias it directly:
 * 
 * /** @typedef {HydrogenStorefront} Storefront */
