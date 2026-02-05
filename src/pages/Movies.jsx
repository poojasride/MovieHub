import React from "react";
import { useMovies } from "../context/MoviesContext";
import ListMovies from "../components/ListMovies";

function Movies() {
  const { movies } = useMovies();

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="mt-8">
        <ListMovies movies={movies}></ListMovies>
     
    </div>
  );
}

export default Movies;
