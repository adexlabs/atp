import { useEffect, useState } from 'react';

export default function LanguageSelector() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch('/api/languages')
      .then((res) => res.json())
      .then((data) => setLanguages(data));
  }, []);

  return (
    <div>
      <h2>Choose Language</h2>
      <select>
        {languages.map((lang) => (
          <option key={lang.isoCode} value={lang.isoCode}>
            {lang.name} ({lang.isoCode})
          </option>
        ))}
      </select>
    </div>
  );
}
