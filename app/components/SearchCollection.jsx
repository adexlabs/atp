import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function SearchCollections({ collections }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const foundCollection = collections.find((col) =>
      col.title.toLowerCase().includes(query.toLowerCase())
    );

    if (foundCollection) {
      const index = collections.indexOf(foundCollection);
      navigate(`/${index}-${foundCollection.handle}`);
    } else {
      alert("Collection not found");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search collections..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
