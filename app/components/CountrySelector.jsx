import { useEffect, useState } from "react";
import CountrySelectorClient from "./CountrySelectorClient";
import localCountries from "../data/countries.json"; // Local JSON fallback

export default function CountrySelector() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => {
        // Ensure China is in the list
        const hasChina = data.some((c) => c.isoCode === "CN");
        if (!hasChina) {
          data.push({ isoCode: "CN", name: "China" });
        }

        setCountries(data.length > 0 ? data : localCountries);
      })
      .catch(() => setCountries(localCountries));
  }, []);

  return <CountrySelectorClient countries={countries} />;
}
