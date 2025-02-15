import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import CountrySelectorClient from "./CountrySelectorClient";

const GET_COUNTRIES = gql`
  query GetAvailableCountries {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`;

export default function CountrySelector() {
  const { data } = useShopQuery({
    query: GET_COUNTRIES,
    cache: CacheLong(),
  });

  console.log("Fetched Countries Data:", data); // 🔍 Debugging: Check if data is coming

  const countries = data?.localization?.availableCountries || [];

  return <CountrySelectorClient countries={countries} />;
}
