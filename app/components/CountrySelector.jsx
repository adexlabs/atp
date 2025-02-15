import { useEffect, useState, useRef } from 'react';
import { useFetcher } from '@remix-run/react';

export function CountrySelector() {
  const fetcher = useFetcher();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Loading...');
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!fetcher.data) {
      fetcher.load('/api/countries');
    }
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.data) {
      setCountries(fetcher.data);
      setSelectedCountry(fetcher.data[0]?.label || 'Select Country');
    }
  }, [fetcher.data]);

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
  };

  const selectCountry = (country) => {
    setSelectedCountry(country.label);
    dropdownRef.current?.classList.add('hidden');
  };

  return (
    <div className="relative w-64">
      <button onClick={toggleDropdown} className="w-full p-2 border rounded">
        {selectedCountry}
      </button>
      <ul ref={dropdownRef} className="absolute left-0 w-full bg-white border rounded hidden max-h-40 overflow-y-auto">
        {countries.length > 0 ? (
          countries.map((country) => (
            <li
              key={country.country}
              onClick={() => selectCountry(country)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {country.label}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">Loading...</li>
        )}
      </ul>
    </div>
  );
}
