import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function ListMovies({ movies }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <h1 className="col-span-full text-2xl font-bold text-center">
        Exclusive Movies
      </h1>

      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-[260px] object-fill mb-4 rounded"
          />

          <h3 className="text-lg font-bold line-clamp-1">{movie.Title}</h3>

          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-400">{movie.Year}</p>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(movie)}
              className={`text-4xl ${
                isFavorite(movie.imdbID)
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
            >
              ♥
            </button>
          </div>

          <Link
            to={`/movie-details/${movie.imdbID}`}
            className="inline-flex items-center gap-2 mt-3
                       text-xs bg-white text-black
                       px-3 py-1.5 rounded
                       hover:bg-gray-200 transition"
          >
            ▶ View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListMovies;
