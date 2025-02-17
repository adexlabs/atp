import { gql } from "graphql-tag"; // ✅ Correct import

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
