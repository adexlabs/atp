import { useEffect, useState } from "react";
import CountrySelectorClient from "./CountrySelectorClient";
import localCountries from "../data/countries"; // Fallback JSON

export default function CountrySelector() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("Fetching countries...");

    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        if (!data || data.length === 0) {
          console.log("Using Fallback JSON Data");
          setCountries(localCountries); // Fallback
        } else {
          setCountries(data);
        }
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
        setCountries(localCountries);
      });
  }, []);

  console.log("Countries in state:", countries);

  return (
    <div>
      {countries.length === 0 ? (
        <p>Loading countries...</p>
      ) : (
        <select>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
