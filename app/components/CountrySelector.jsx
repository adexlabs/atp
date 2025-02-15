import { useEffect, useState } from "react";
import CountrySelectorClient from "./CountrySelectorClient";
import localCountries from "../data/countries.json"; // Fallback JSON

export default function CountrySelector() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          setCountries(localCountries); // Fallback
        } else {
          setCountries(data);
        }
      })
      .catch(() => setCountries(localCountries)); // Handle errors
  }, []);

  return <CountrySelectorClient countries={countries} />;
}
