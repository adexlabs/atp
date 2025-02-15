import { useState, useEffect } from "react";

export default function CountrySelector2() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("/api/countries"); // API Call
        const data = await res.json();
        setCountries(data);
        setSelectedCountry(data[0]); // First country select by default
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (!countries.length) return <p>No countries available</p>;

  return (
    <div>
      <h3>Select Your Country</h3>
      <select
        value={selectedCountry?.code}
        onChange={(e) =>
          setSelectedCountry(countries.find((c) => c.code === e.target.value))
        }
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} ({country.currency})
          </option>
        ))}
      </select>

      <p>Selected Country: {selectedCountry?.name}</p>
      <p>Currency: {selectedCountry?.currency}</p>
    </div>
  );
}
