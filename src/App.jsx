import Header from "./pages/Header.jsx";
import Search from "./pages/Search.jsx";
import Movies from "./pages/Movies.jsx";
import { MovieProvider } from "./context/MoviesContext.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <MovieProvider>
      <div className="max-w-7xl mx-auto text-white">
        <Header />
       
        
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;
