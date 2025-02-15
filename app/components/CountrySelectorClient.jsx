import { useState, useEffect } from "react";

export default function CountrySelectorClient({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  if (!countries || countries.length === 0) {
    return <p>Loading countries...</p>;
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
