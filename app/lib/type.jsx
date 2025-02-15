import { Storefront as HydrogenStorefront } from "@shopify/hydrogen";

/**
 * Ensures all fields in an object are non-nullable.
 * @param {Object} obj - The object to make non-nullable.
 * @returns {Object} - The object with non-nullable fields.
 */
export function makeNonNullable(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Defines a locale object structure.
 * @typedef {Object} Locale
 * @property {string} language - The language code.
 * @property {string} country - The country code.
 * @property {string} label - The display label.
 * @property {string} currency - The currency code.
 */

/**
 * Defines a record of locale objects.
 * @typedef {Record<string, Locale>} Localizations
 */

/**
 * Extended locale with pathPrefix.
 * @typedef {Object} I18nLocale
 * @property {string} language - The language code.
 * @property {string} country - The country code.
 * @property {string} label - The display label.
 * @property {string} currency - The currency code.
 * @property {string} pathPrefix - The path prefix for localization.
 */

export const Storefront = HydrogenStorefront;
