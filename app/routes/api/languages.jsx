import { json } from '@shopify/remix-oxygen';

export async function loader({ context }) {
    console.log("🛠 Fetching Available Languages...");
  
    try {
      const { storefront } = context;
      const { data, errors } = await storefront.query(`  
        query Localization {
          localization {
            availableLanguages {
              isoCode
              name
            }
          }
        }
      `);
  
      if (errors) {
        console.error("GraphQL Errors:", errors);
      }
  
      if (!data || !data.localization) {
        console.error("❌ Localization data not found");
        return json([]);
      }
  
      console.log("✅ Available Languages:", data.localization.availableLanguages);
      return json(data.localization.availableLanguages || []);
  
    } catch (error) {
      console.error("❌ Error fetching languages:", error);
      return json([]);
    }
  }
  