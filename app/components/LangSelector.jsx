// app/components/LanguageSelector.jsx

import { useLocalization } from "@shopify/hydrogen";

export default function LangSelector() {
  const { language, availableLanguages, setLanguage } = useLocalization(); // Get current language and available languages
  
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage); // Change language when user selects a new one
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Select Language</label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name} {/* Display the language name (e.g., "English", "French") */}
          </option>
        ))}
      </select>
    </div>
  );
}
