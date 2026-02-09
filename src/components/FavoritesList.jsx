import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function FavoritesList() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <section className="relative mt-8 max-w-7xl mx-auto px-4 pb-64">
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-semibold text-white tracking-tight hover:text-red-500 transition">
          Your Favorites
        </h1>
        <p className="mt-2 text-xl text-gray-400">
          Movies you’ve saved to watch later. Your personal watchlist, all in
          one place.
        </p>
      </header>

      {favorites.length > 0 ? (
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-lg overflow-hidden">
          {/* Sub Header */}
          <div className="px-6 py-4 border-b border-white/10">
            <p className="text-sm text-gray-300">
              Showing{" "}
              <span className="text-red-500 font-semibold">
                {favorites.length}
              </span>{" "}
              favorite movies
            </p>
          </div>

          {/* List */}
          <div className="max-h-screen overflow-y-auto divide-y divide-white/10">
            {favorites.map((movie) => (
              <div
                key={movie.imdbID}
                className="group flex items-center justify-between gap-5 px-6 py-4 hover:bg-white/10 transition"
              >
                {/* Left */}
                <Link
                  to={`/movie-details/${movie.imdbID}`}
                  className="flex items-center gap-5 min-w-0"
                >
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/60x90"
                    }
                    alt={movie.Title}
                    className="w-12 h-16 rounded-md object-cover shadow-sm flex-shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="text-white font-medium truncate group-hover:text-red-400 transition">
                      {movie.Title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {movie.Year} • {movie.Type}
                    </p>
                  </div>
                </Link>

                <div className="flex items-center gap-3">
                  {/* Right */}
                  <Link
                    to={`/movie-details/${movie.imdbID}`}
                    className="border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded transition hover:bg-red-500 hover:text-white"
                  >
                    View Details
                  </Link>
                  {/* Remove from Favorites */}
                  <button
                    onClick={() => toggleFavorite(movie)}
                    isFavorite={isFavorite(movie.imdbID)}
                    className="border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded transition hover:bg-red-500 hover:text-white"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-28 rounded-2xl border border-dashed border-white/10 bg-white/5">
          <p className="text-lg font-medium text-white">No favorites yet</p>
          <p className="mt-2 text-sm text-gray-400 max-w-sm text-center">
            Start exploring movies and add them to your favorites.
          </p>
        </div>
      )}
    </section>
  );
}

export default FavoritesList;