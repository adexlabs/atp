import { useLocalization } from "@shopify/hydrogen-react"; // ✅ Correct Import
import gql from "graphql-tag";
import { useQuery } from "@tanstack/react-query";

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
  const { country } = useLocalization();

  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("/api/countries");
      return response.json();
    },
  });

  if (!data) return <p>Loading...</p>;

  const availableCountries = data.availableCountries;
  const currentCountry = country.isoCode;

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
