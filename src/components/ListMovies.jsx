import React from 'react'

function ListMovies({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <h1 className="col-span-full text-2xl font-bold text-center">Exclusive Movies</h1>
      {movies.map((movie) => (
        <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-fill mb-4 rounded" />  
          <h3 className="text-lg font-bold">{movie.Title}</h3>
          <p className="text-sm text-gray-400">{movie.Year}</p>
        </div>
      ))}
    </div>
  )
}

export default ListMovies