import { gql } from "@shopify/hydrogen";

export const COUNTRIES_QUERY = gql`
  {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`;
