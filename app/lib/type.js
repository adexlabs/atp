/**
 * @typedef {Object} Locale
 * @property {string} language - Language code (e.g., "EN").
 * @property {string} country - Country code (e.g., "US").
 * @property {string} label - Display label for the locale.
 * @property {string} currency - Currency code (e.g., "USD").
 */

/**
 * @typedef {Record<string, Locale>} Localizations
 */

/**
 * @typedef {Locale & { pathPrefix: string }} I18nLocale
 */

/**
 * @typedef {import('@shopify/hydrogen').Storefront<I18nLocale>} Storefront
 */

/**
 * Function to remove null values from an object.
 * @param {Object} obj - Input object.
 * @returns {Object} - Object with non-nullable fields.
 */
function removeNullFields(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined)
    );
  }
  
  export { removeNullFields };
  