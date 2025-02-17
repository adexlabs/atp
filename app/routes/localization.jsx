import { useLocalization } from "@shopify/hydrogen-react";

export default function CountrySelector() {
  const { countries, country } = useLocalization();

  return (
    <select defaultValue={country.isoCode}>
      {countries.map((c) => (
        <option key={c.isoCode} value={c.isoCode}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
