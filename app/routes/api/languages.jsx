export async function loader({ context }) {
    const { storefront } = context;
  
    const { localization } = await storefront.query(
      `#graphql
      query Localization {
        localization {
          availableLanguages {
            isoCode
            name
          }
        }
      }`
    );
  
    return new Response(JSON.stringify(localization.availableLanguages), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  