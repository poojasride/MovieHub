import React, { createContext, useContext, useEffect, useState } from "react";

// create context
const FavoritesContext = createContext();

// provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // load favorites from localStorage on first render
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // save favorites whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // add or remove favorite
  const toggleFavorite = (movie) => {
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // check movie is favorite or not
  const isFavorite = (id) => {
    return favorites.some((fav) => fav.imdbID === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// custom hook
export const useFavorites = () => useContext(FavoritesContext);
