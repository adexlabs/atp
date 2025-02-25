import { useLocalization } from '@shopify/hydrogen';
import { useState, useEffect } from 'react';

export default function CountrySelector2() {
  const { country, setCountry } = Localizatio(); // Shopify Hydrogen localization
  const [selectedCountry, setSelectedCountry] = useState(country.isoCode);

  // 🌍 Automatically detect user's country from browser
  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage; // Detect browser language
    const countryCode = userLanguage.split('-')[1] || 'US'; // Extract country code (e.g., en-US → US)

    if (countryCode !== selectedCountry) {
      setSelectedCountry(countryCode);
      setCountry(countryCode); // Update Shopify store locale
    }
  }, [selectedCountry, setCountry]);

  const handleChange = (event) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
    setCountry(newCountry); // Update Shopify store locale
  };

  return (
    <div>
      <label htmlFor="country-select">🌍 Select your country:</label>
      <select id="country-select" value={selectedCountry} onChange={handleChange}>
        <option value="US">🇺🇸 United States</option>
        <option value="CA">🇨🇦 Canada</option>
        <option value="IN">🇮🇳 India</option>
        <option value="GB">🇬🇧 United Kingdom</option>
        <option value="AU">🇦🇺 Australia</option>
      </select>
    </div>
  );
}
