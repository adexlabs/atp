export async function loader({ context }) {
  const query = `
    query GetAvailableCountries {
      localization {
        availableCountries {
          isoCode
          name
        }
      }
    }
  `;

  const { data, errors } = await context.storefront.query(query);

  console.log("Fetched Countries Data:", JSON.stringify(data, null, 2));
  console.log("GraphQL Errors:", errors);

  if (errors) {
    return new Response(JSON.stringify({ error: errors }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data?.localization?.availableCountries || []), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
