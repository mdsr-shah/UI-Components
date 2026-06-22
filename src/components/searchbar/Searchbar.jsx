import { useState } from "react";

import "./SearchBar.css";

function SearchBar({
  placeholder = "Search...",
  onSearch,
}) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button
        onClick={handleSearch}
      >
        🔍
      </button>

    </div>
  );
}

export default SearchBar;