import React, { use } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import omdbApi from "../api/omdb";

function SearchModel({ isOpen, onClose, query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  useEffect(() => {
    // The empty query we don't want to search, just clear results
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await omdbApi.get("", {
          params: { s: query, type: "movie", page: 1 },
        });

        setResults(response.data.Search || []);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* CONTENT */}
      <div className="relative mt-24 mx-auto w-[90%] max-w-3xl">
        {/* SEARCH BAR */}

        {/* RESULTS */}
        {query && (
          <div className="mt-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl max-h-[420px] overflow-y-auto">
            {loading && (
              <p className="text-gray-400 text-center py-6">Searching...</p>
            )}

            {!loading && results.length === 0 && (
              <p className="text-gray-400 text-center py-6">No results found</p>
            )}

            {console.log(results)}

            <h1 className="text-center text-white py-4 text-lg font-medium">
              Showing results for{" "}
              <span className="text-red-500 font-semibold">"{query}"</span>
              <span className="text-gray-300">
                {" "}
                — click a movie to view details
              </span>
            </h1>

            {results.map((movie) => (
              <Link
                key={movie.imdbID}
                to={`/movie-details/${movie.imdbID}`}
                onClick={onClose}
                className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/60x90"
                  }
                  className="w-12 h-16 object-cover rounded-md"
                  alt={movie.Title}
                />

                <div>
                  <h3 className="text-white font-medium line-clamp-1">
                    {movie.Title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {movie.Year} • {movie.Type}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModel;
