import Header from "./pages/Header.jsx";
import Search from "./pages/Search.jsx";
import Movies from "./pages/Movies.jsx";
import { MovieProvider } from "./context/MoviesContext.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import FavoritesList from "./components/FavoritesList.jsx";

function App() {
  return (
    <MovieProvider>
      <FavoritesProvider>
        <div className="max-w-7xl mx-auto text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie-details/:id" element={<MovieDetail />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </MovieProvider>
  );
}

export default App;
