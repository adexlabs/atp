import { useLoaderData } from '@remix-run/react';

export function loader() {
  return fetch('/api/languages').then((res) => res.json());
}

export default function LanguageSelector() {
  const languages = useLoaderData();

  // ✅ Debugging
  console.log("Fetched Languages:", languages);

  // ✅ Ensure it's an array
  if (!Array.isArray(languages)) {
    return <p>⚠️ No languages available</p>;
  }

  return (
    <div>
      <h3>🌍 Select Language</h3>
      <select>
        {languages.map((lang) => (
          <option key={lang.isoCode} value={lang.isoCode}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
