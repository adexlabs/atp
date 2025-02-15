import { graphql } from "@shopify/hydrogen";
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

export default async function CountrySelector() {
  const { data } = await fetchSync({ query: GET_COUNTRIES });

  return <CountrySelectorClient countries={data.localization.availableCountries} />;
}
