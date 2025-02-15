const countries = [
  { label: "United States (USD $)", language: "EN", country: "US", currency: "USD" },
  { label: "Andorra (EUR €)", language: "EN", country: "AD", currency: "EUR" },
  { label: "Austria (EUR €)", language: "EN", country: "AT", currency: "EUR" },
  { label: "Australia (AUD $)", language: "EN", country: "AU", currency: "AUD" },
  { label: "Belgium (EUR €)", language: "EN", country: "BE", currency: "EUR" },
  { label: "Canada (CAD $)", language: "EN", country: "CA", currency: "CAD" },
  { label: "China (CNY ¥)", language: "EN", country: "CN", currency: "CNY" },
  { label: "Germany (EUR €)", language: "EN", country: "DE", currency: "EUR" },
  { label: "France (EUR €)", language: "EN", country: "FR", currency: "EUR" },
  { label: "United Kingdom (GBP £)", language: "EN", country: "GB", currency: "GBP" },
];

export default function CountrySelector({ onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {countries.map(({ country, label }) => (
        <option key={country} value={country}>
          {label}
        </option>
      ))}
    </select>
  );
}
