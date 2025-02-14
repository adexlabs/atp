import { json } from "@shopify/remix-oxygen";
import { useLoaderData, Form } from "@remix-run/react";

export async function loader({ context }) {
  const { localization } = await context.storefront.query(COUNTRIES_QUERY);
  return json({ localization });
}

const COUNTRIES_QUERY = `#graphql
  query {
    localization {
      availableCountries {
        isoCode
        name
      }
      country {
        isoCode
      }
    }
  }
`;

export default function Index() {
  const { localization } = useLoaderData();
  const availableCountries = localization.availableCountries;
  const currentCountry = localization.country.isoCode;

  return (
    <main>
      <h1>Welcome to My Shopify Store</h1>
      <CountrySelector availableCountries={availableCountries} currentCountry={currentCountry} />
    </main>
  );
}

function CountrySelector({ availableCountries, currentCountry }) {
  return (
    <Form method="POST" action="/localization">
      <select name="country" defaultValue={currentCountry}>
        {availableCountries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
      <button type="submit">Change</button>
    </Form>
  );
}
