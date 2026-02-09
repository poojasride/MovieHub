import React from "react";
import { useState } from "react";
import SearchModel from "../components/SearchModel";
import HeroSection from "../components/Hero";

function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-6 mb-6">
        Search for Movies
      </h1>

      {/* Search bar */}
      <div className="max-w-3xl mx-auto flex items-center border border-gray-700 rounded px-6 py-4 shadow-2xl">
        <svg
          className="w-6 h-6 text-gray-400 mr-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies, TV shows..."
          className="w-full bg-transparent text-white text-lg outline-none placeholder-gray-400"
        />

        <button
          onClick={() => {
            // Only open the search model if there's a query
            if (query.trim()) {
              setOpen(true);
            }
          }}
          className="text-white rounded bg-red-600 px-4 py-2 ml-4 hover:bg-red-700 transition duration-300"
        >
          Search
        </button>
      </div>

      <SearchModel isOpen={open} onClose={() => setOpen(false)} query={query} />

      <HeroSection />
    </div>
  );
}

export default Search;
