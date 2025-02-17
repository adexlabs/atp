import { useQuery, gql } from "@shopify/hydrogen-react";

const QUERY = gql`
  query GetCountries {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`;

export default function CountrySelector() {
  const { data, error } = useQuery({
    query: QUERY,
  });

  if (error) {
    console.error("Error fetching countries:", error);
    return <p>Failed to load countries.</p>;
  }

  const countries = data?.localization?.availableCountries || [];

  return (
    <div>
      <label htmlFor="country-selector">Select Country:</label>
      <select id="country-selector">
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
