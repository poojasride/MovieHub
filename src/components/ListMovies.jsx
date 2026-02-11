import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function ListMovies({ movies }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:transition-transform transform hover:scale-105"
        >
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x400"
            }
            alt={movie.Title}
            className="w-full h-[260px] object-cover mb-4 rounded"
          />

          <h3 className="text-lg font-bold line-clamp-1">{movie.Title}</h3>

          <div className="flex justify-between items-center mt-2">
            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(movie)}
              className={`text-4xl ${
                isFavorite(movie.imdbID) ? "text-red-500" : "text-gray-400"
              }`}
            >
              ♥
            </button>

            <Link
              to={`/movie-details/${movie.imdbID}`}
              className="text-center border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded transition  bg-green-500 hover:bg-green-600 hover:text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListMovies;
