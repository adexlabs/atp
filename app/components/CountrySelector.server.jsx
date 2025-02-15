import { fetchSync, graphql } from "@shopify/hydrogen";
import CountrySelectorClient from "./CountrySelectorClient";

const GET_COUNTRIES = graphql(`
  query GetAvailableCountries {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`);

export default function CountrySelector() {
  const { data } = fetchSync({ query: GET_COUNTRIES });

  if (!data || !data.localization || !data.localization.availableCountries) {
    return <p>Loading countries...</p>;
  }

  return <CountrySelectorClient countries={data.localization.availableCountries} />;
}
