import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition font-medium
     ${
       isActive
         ? "text-red-500"
         : "text-gray-300 hover:text-white"
     }`;

  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          Movie<span className="text-red-600">Hub</span>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-2 text-base">
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
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />
    </header>
  );
}

export default Header;
