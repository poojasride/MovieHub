import { useEffect, useState } from "react";
import omdb from "../api/omdb";
import { Link } from "react-router-dom";

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  // ESC close
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  // SEARCH WITH DEBOUNCE
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await omdb.get("", {
          params: {
            s: query,
            type: "movie",
            page: 1,
          },
        });

        setResults(res.data.Search || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500); // for  delay

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
        <div className="flex items-center bg-[#2f343a] rounded-xl px-6 py-4 shadow-2xl">
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies..."
            className="w-full bg-transparent text-white text-lg outline-none"
          />

          <button
            onClick={() => setQuery(searchTerm.trim())}
            className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium"
          >
            Search
          </button>

          <button
            onClick={() => {
              onClose();
              setSearchTerm("");
              setQuery("");
              setResults([]);
            }}
            className="ml-4 text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* RESULTS */}
        {query && (
          <div className="mt-4 bg-[#141414] rounded-xl max-h-[420px] overflow-y-auto">
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
};

export default SearchModal;
