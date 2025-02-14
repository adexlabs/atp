import { useLocalization, useCountry } from "@shopify/hydrogen-react";

export default function CountrySelector() {
  const { countries } = useLocalization(); // Shopify से देश लाने का सही तरीका
  const { country: currentCountry, setCountry } = useCountry(); // Current selected country

  const handleChange = (event) => {
    setCountry(event.target.value); // Shopify के in-built function से country update
  };

  return (
    <form>
      <select name="country" value={currentCountry.isoCode} onChange={handleChange}>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </form>
  );
}
