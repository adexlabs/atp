// app/components/CountrySelector.jsx

import { useState, useEffect } from "react";
import { useLoaderData } from "@shopify/hydrogen"; // To access loader data
import { COUNTRIES_QUERY } from "../graphql/country-queries/CountryQuery"; // Import query

export default function CountrySelector() {
  // Get data from the loader function
  const data = useLoaderData();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (data?.localization?.availableCountries) {
      setCountries(data.localization.availableCountries);
      setSelectedCountry(data.localization.availableCountries[0]); // Default first country select
    }
  }, [data]);

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
