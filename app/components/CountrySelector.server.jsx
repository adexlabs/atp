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
    console.log("Countries data:", JSON.stringify(data, null, 2));
  const { data } = useShopQuery({
    query: GET_COUNTRIES,
    cache: CacheLong(), // Cache response for better performance
  });

  const countries = data?.localization?.availableCountries || [];

  return <CountrySelectorClient countries={countries} />;
}
