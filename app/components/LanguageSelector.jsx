import { useShopQuery } from "@shopify/hydrogen";
import gql from "graphql-tag"; // ✅ Import gql from "graphql-tag"
import { useState } from "react";

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
  const [selectedCountry, setSelectedCountry] = useState("");

  if (!data) return <p>Loading...</p>;

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {data.localization.availableCountries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
