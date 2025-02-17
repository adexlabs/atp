// app/graphql/country-queries/CountryQuery.js

export const COUNTRY_FRAGMENT = `#graphql
  fragment CountryDetails on Localization {
    availableCountries {
      isoCode
      name
    }
  }
`;

export const COUNTRIES_QUERY = `#graphql
  query {
    localization {
      ...CountryDetails
    }
  }
  ${COUNTRY_FRAGMENT}
`;
