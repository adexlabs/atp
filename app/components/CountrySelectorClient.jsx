import { useState } from "react";

export default function CountrySelectorClient({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  // Ensure countries is an array before using .length
  if (!Array.isArray(countries) || countries.length === 0) {
    return <p>No countries available. Please try again later.</p>;
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
