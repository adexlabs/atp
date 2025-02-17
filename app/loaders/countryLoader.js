// app/loaders/countryLoader.js

import { fetchSync } from "@shopify/hydrogen";
import { COUNTRIES_QUERY } from "../graphql/country-queries/CountryQuery";

// Loader function to fetch country data
export async function loader() {
  const data = await fetchSync(COUNTRIES_QUERY);
  return data;
}
