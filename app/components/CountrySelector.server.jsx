import { useEffect, useState } from "react";
import CountrySelectorClient from "./CountrySelectorClient";

export default function CountrySelector() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data || []);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return <CountrySelectorClient countries={countries} />;
}
