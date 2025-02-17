// app/loaders/countryLoader.js

import { fetchSync } from "@shopify/hydrogen";
import { COUNTRIES_QUERY } from "../graphql/CountryQueries";

export async function loader() {
  const data = await fetchSync(COUNTRIES_QUERY);
  return data;
}
