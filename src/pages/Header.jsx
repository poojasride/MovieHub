import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { setQuery, setPage } = useMovies();
  const [searchTerm, setSearchTerm] = useState("");

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition font-medium hover:bg-gray-700 $
     ${isActive ? "text-red-500" : "text-gray-300 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Desktop Header */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          Movie<span className="text-red-600">Hub</span>
        </h1>
        {/* Navigation */}
        <nav className="flex items-center space-x-4 text-xl">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass}>
            Favorites
          </NavLink>
        </nav>
        {/* 🔍 SEARCH INPUT */}
        <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchTerm.trim()) {
                setPage(1);
                setQuery(searchTerm.trim());
                navigate("/movies");
                setSearchTerm("");
              }
            }}
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
          />

          <button
            onClick={() => {
              if (searchTerm.trim()) {
                setPage(1);
                setQuery(searchTerm.trim());
                navigate("/movies");
                setSearchTerm("");
              }
            }}
            className="ml-2 text-red-500 hover:text-red-400"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-white">
          Movie<span className="text-red-600">Hub</span>
        </h1>

        <div className="flex items-center gap-4">
          {/* 🔍 SEARCH INPUT */}
          <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchTerm.trim()) {
                  setPage(1);
                  setQuery(searchTerm.trim());
                  navigate("/movies");
                  setSearchTerm("");
                }
              }}
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
            />

            <button
              onClick={() => {
                if (searchTerm.trim()) {
                  setPage(1);
                  setQuery(searchTerm.trim());
                  navigate("/movies");
                  setSearchTerm("");
                }
              }}
              className="ml-2 text-red-500 hover:text-red-400"
            >
              🔍
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-700 px-6 py-4 space-y-2 bg-gray-900 ">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Movies
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Favorites
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
