import { graphql } from "@shopify/hydrogen";

export const COUNTRIES_QUERY = `#graphql
  {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`;
