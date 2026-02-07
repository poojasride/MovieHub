import React from "react";
import { Link } from "react-router-dom";

function ListMovies({ movies }) {
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
            className="w-full  h-[260px] object-fill mb-4 rounded"
          />
          <h3 className="text-lg font-bold line-clamp-1">{movie.Title}</h3>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 inline-block gap-2">
              {movie.Year}
            </p>

            <button className="text-red-500 hover:text-red-600 transition mx-2 focus:outline-none focus:ring-2 focus:ring-red-500 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
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
        </div>
      ))}
    </div>
  );
}

export default ListMovies;
