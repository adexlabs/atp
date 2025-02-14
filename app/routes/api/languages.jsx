import { json } from '@shopify/remix-oxygen';

export async function loader({ context }) {
  console.log("🛠 Fetching Available Languages...");

  const { storefront } = context;
  const { data } = await storefront.query(`
    query Localization {
      localization {
        availableLanguages {
          isoCode
          name
        }
      }
    }
  `);

  console.log("API Response:", data.localization.availableLanguages);

  // ✅ Ensure response is an array
  return json(data.localization.availableLanguages || []);
}
