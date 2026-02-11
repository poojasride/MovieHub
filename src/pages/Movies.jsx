import React from "react";
import { useMovies } from "../context/MoviesContext";
import ListMovies from "../components/ListMovies";

function Movies() {
  const { movies, loading, error, page, setPage, totalResults, type, setType } =
    useMovies();

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="mt-8 px-6">
      {/* 🔽 FILTER SECTION */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-white">Browse Movies</h2>
          <p className="text-sm text-gray-400 font-medium font-serif">
            Filter movies by category
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative w-full sm:w-64">
          <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wide">
            Filter by Type
          </label>

          <select
            value={type}
            onChange={(e) => {
              setPage(1);
              setType(e.target.value);
            }}
            className="
        w-full
        appearance-none
        bg-gray-900/80
        backdrop-blur-md
        border border-white/10
        text-white
        px-4 py-2.5
        pr-10
        rounded-lg
        shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-green-500
        focus:border-green-500
        transition
      "
          >
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>

          {/* Custom Arrow */}
          <div className="pointer-events-none absolute right-3 top-[38px] text-gray-400">
            ▼
          </div>
        </div>
      </div>

      {/*  LOADING */}
      {loading && (
        <p className="text-center text-gray-400">Loading movies...</p>
      )}

      {/*  ERROR */}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {/* MOVIES */}
      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-gray-400 text-lg">No movies found.</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <ListMovies movies={movies} />
      )}

      {/* 🔢 PAGINATION */}
      {!error && totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:bg-gray-600 transition"
          >
            Prev
          </button>

          <span className="text-white">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:bg-gray-600 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;
