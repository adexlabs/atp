import { json } from '@shopify/remix-oxygen';

export async function loader({ context }) {
  console.log("🛠 Fetching Available Languages...");

  // Storefront API se Localization Query Call karni hai
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

  return json(data.localization.availableLanguages);
}
