import { useShopQuery, gql, useServerProps } from "@shopify/hydrogen";

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
  const { data } = useShopQuery({ query: GET_COUNTRIES });
  const { setServerProps } = useServerProps();

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setServerProps("country", countryCode);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <select onChange={handleCountryChange}>
        {data.localization.availableCountries.map((c) => (
          <option key={c.isoCode} value={c.isoCode}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
