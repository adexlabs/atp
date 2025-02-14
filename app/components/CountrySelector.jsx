import { useShop } from "@shopify/hydrogen";

export function CountrySelector() {
  const { localization } = useShop(); 

  const availableCountries = localization?.availableCountries || [];
  const currentCountry = localization?.country?.isoCode || "US"; // Default US

  const handleChange = (event) => {
    document.cookie = `shopify_country=${event.target.value}; path=/; max-age=31536000`; 
    window.location.reload(); 
  };

  return (
    <form>
      <select name="country" value={currentCountry} onChange={handleChange}>
        {availableCountries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </form>
  );
}
