import { createContext, useContext, useEffect, useState } from "react";
import omdbApi from "../api/omdb";

const MoviesContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const selectedCategory = { title: "Action Movies", keyword: "action", key: 1, type: "movie" };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await omdbApi.get("", {
           params: {
          s: selectedCategory.keyword,
          type: selectedCategory.type,
          page: 1,
        },
          
        });

        console.log(`Fetched movies 1:`, response.data.Search);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
