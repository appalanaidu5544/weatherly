import { useState } from "react";
import { Search, X } from "lucide-react";

import { searchCities } from "../services/weatherApi";

function SearchBar({ onLocationSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    const city = query.trim();

    if (!city) {
      setResults([]);
      setError("Please enter a city name.");
      return;
    }

    try {
      setSearching(true);
      setError("");
      setResults([]);

      const locations = await searchCities(city);

      if (locations.length === 0) {
        setError(
          `No cities found for "${city}".`
        );
        return;
      }

      setResults(locations);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to search right now. Please try again."
      );
    } finally {
      setSearching(false);
    }
  }

  function handleSelect(location) {
    onLocationSelect(location);

    setQuery(location.name);
    setResults([]);
    setError("");
  }

  function handleClear() {
    setQuery("");
    setResults([]);
    setError("");
  }

  return (
    <div className="search-wrapper">
      <form
        className="search-bar"
        onSubmit={handleSearch}
      >
        <Search size={20} />

        <input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setError("");
          }}
        />

        {query && (
          <button
            type="button"
            className="clear-search"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}

        <button
          type="submit"
          disabled={searching}
        >
          {searching
            ? "Searching..."
            : "Search"}
        </button>
      </form>

      {error && (
        <p className="search-error">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <div className="search-results">
          {results.map((location) => (
            <button
              type="button"
              className="search-result"
              key={location.id}
              onClick={() =>
                handleSelect(location)
              }
            >
              <strong>
                {location.name}
              </strong>

              <span>
                {location.admin1
                  ? `${location.admin1}, `
                  : ""}
                {location.country}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;