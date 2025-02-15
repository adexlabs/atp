import { useState } from "react";

export default function CountrySelectorClient({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  if (!Array.isArray(countries) || countries.length === 0) {
    return <p>Loading countries...</p>;
  }

  return (
    <div>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
