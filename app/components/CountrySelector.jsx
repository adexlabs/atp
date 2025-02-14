import { useShopQuery, gql, CacheLong } from "@shopify/hydrogen";

const COUNTRIES_QUERY = gql`
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

export function CountrySelector() {
  const { data } = useShopQuery({
    query: COUNTRIES_QUERY,
    cache: CacheLong(),
  });

  const availableCountries = data.localization.availableCountries;
  const currentCountry = data.localization.country.isoCode;

  return (
    <form method="POST" action="/localization">
      <select name="country" defaultValue={currentCountry}>
        {availableCountries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
      <button type="submit">Change</button>
    </form>
  );
}
