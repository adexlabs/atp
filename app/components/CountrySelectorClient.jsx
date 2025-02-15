import { useState } from "react";

export default function CountrySelectorClient({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  if (!countries.length) {
    return <p>Failed to load countries. Please try again.</p>;
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
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
