import {useLoaderData} from '@remix-run/react';

export default function LocalizationPage() {
  const localization = useLoaderData();

  return (
    <div>
      <h2>Available Languages</h2>
      <ul>
        {localization.availableLanguages.map((lang) => (
          <li key={lang.isoCode}>
            {lang.endonymName} ({lang.isoCode})
          </li>
        ))}
      </ul>

      <h2>Available Countries</h2>
      <ul>
        {localization.availableCountries.map((country) => (
          <li key={country.isoCode}>
            {country.name} ({country.isoCode})
          </li>
        ))}
      </ul>
    </div>
  );
}
