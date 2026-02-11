import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchModel from "../components/SearchModel";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

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

        {/* Search Button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open search"
          className="group flex items-center gap-2 px-4 py-2 rounded-lg 
             bg-white/5 hover:bg-white/10 
             border border-transparent hover:border-red-500/40
             transition-all duration-300"
        >
          <svg
            className="w-5 h-5 text-gray-300 group-hover:text-red-500 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
            Search
          </span>
        </button>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-white">
          Movie<span className="text-red-600">Hub</span>
        </h1>

        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open search"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg 
             bg-white/5 hover:bg-white/10 
             border border-transparent hover:border-red-500/40
             transition-all duration-300"
          >
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-red-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

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
      <SearchModel isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Header;
