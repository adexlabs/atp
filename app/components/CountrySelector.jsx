import { Form } from "@remix-run/react";

export default function CountrySelector({ availableCountries, currentCountry }) {
  return (
    <Form method="POST" action="/localization">
      <select name="country" defaultValue={currentCountry}>
        {availableCountries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
      <button type="submit">Change</button>
    </Form>
  );
}
