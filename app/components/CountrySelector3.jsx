import { useShopQuery, gql } from "@shopify/hydrogen";
import { useState, useEffect } from "react";
import { COUNTRIES_QUERY } from "../graphql/counrty-queries/CounrtyQuery"; // Import query from separate file



export default function CountrySelector3() {
    const { data } = useShopQuery({
        query: COUNTRIES_QUERY,
      });

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (data?.localization?.availableCountries) {
      setCountries(data.localization.availableCountries);
      setSelectedCountry(data.localization.availableCountries[0]); // Default first country
    }
  }, [data]);

  if (error) return <p>Error fetching countries</p>;
  if (!countries.length) return <p>Loading countries...</p>;

  return (
    <div className="country-selector">
      <h3>Select Your Country</h3>
      <select
        value={selectedCountry?.isoCode}
        onChange={(e) =>
          setSelectedCountry(
            countries.find((c) => c.isoCode === e.target.value)
          )
        }
      >
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      <p>Selected Country: {selectedCountry?.name}</p>
    </div>
  );
}
