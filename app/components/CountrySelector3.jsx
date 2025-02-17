// app/components/CountrySelector.jsx

import { useState, useEffect } from "react";
import { useQuery } from "@shopify/hydrogen";  // Use useQuery from Hydrogen to fetch data
import { FOOTER_QUERY } from "../lib/fragments/FOOTER_QUERY";  // Use existing query

export default function CountrySelector() {
  const language = "en";  // Set the language (can be dynamic)
  const footerMenuHandle = "footer-menu";  // Set the footer menu handle (can be dynamic)
  
  // Use useQuery to fetch countries and menu data
  const { data, error, loading } = useQuery({
    query: FOOTER_QUERY,
    variables: {
      language, 
      footerMenuHandle,
      country: null,  // Fetch without country filter initially (can be dynamic)
    },
  });

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (data?.menu?.countries) {
      const countryData = data.menu.countries;  // Assuming the query returns countries
      setCountries(countryData);
      setSelectedCountry(countryData[0]);  // Default to the first country
    }
  }, [data]);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error fetching countries</p>;

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
