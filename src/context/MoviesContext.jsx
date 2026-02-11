import { createContext, useContext, useEffect, useState } from "react";
import { searchMoviesApi } from "../api/omdb";

const MoviesContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("action");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await searchMoviesApi(query, page, type);

      if (data.Response === "False") {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      } else {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query, page, type]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        query,
        setQuery,
        type,
        setType,
        page,
        setPage,
        totalResults,
        loading,
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
