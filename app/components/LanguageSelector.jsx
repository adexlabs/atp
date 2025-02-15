import { useLocalization, useServerProps } from "@shopify/hydrogen";

export default function LanguageSelector() {
  const { availableCountries, country } = useLocalization();
  const { setServerProps } = useServerProps();

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setServerProps("country", countryCode);
  };

  return (
    <div>
      <select value={country.isoCode} onChange={handleCountryChange}>
        {availableCountries.map((c) => (
          <option key={c.isoCode} value={c.isoCode}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
