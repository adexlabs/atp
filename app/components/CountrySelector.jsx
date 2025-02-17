// app/components/CountrySelector.jsx

import { useLoaderData } from "@shopify/hydrogen";
import { useState } from "react";

export default function CountrySelector() {
  const data = useLoaderData();  // Using the loader data
  const [selectedCountry, setSelectedCountry] = useState(data?.localization?.availableCountries[0]?.isoCode || "");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    // Handle country selection logic
    console.log("Selected Country:", event.target.value);
  };

  return (
    <div className="country-selector">
      <label htmlFor="country-select">Select Country</label>
      <select id="country-select" value={selectedCountry} onChange={handleChange}>
        {data.localizations.availableCountries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
