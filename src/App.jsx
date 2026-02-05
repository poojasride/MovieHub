import Header from './pages/Header.jsx'
import Search from './pages/Search.jsx'
import Movies from './pages/Movies.jsx'
import { MovieProvider } from './context/MoviesContext.jsx'
function App() {


  return (
   <MovieProvider>
    <div className="max-w-7xl mx-auto text-white">
      <Header />
      <Search />
      <Movies />
    </div>
    </MovieProvider>
  )
}

export default App
