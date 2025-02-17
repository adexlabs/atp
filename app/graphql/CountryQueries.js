// app/graphql/CountryQueries.js

export const COUNTRIES_QUERY = `#graphql
  query {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`;
