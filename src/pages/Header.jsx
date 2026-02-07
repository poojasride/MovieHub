import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" text-white p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-10">
        <h1 className="text-2xl font-bold">
          Movie<span className="text-red-600">Hub</span>
        </h1>
        <div className="font-bold text-xl"> 
          <NavLink to="/" className="text-white hover:text-red-500 transition">
            Home
          </NavLink>
          <NavLink to="/movies" className="text-white  hover:text-red-500 transition mx-2">
            Movies
          </NavLink>
          <NavLink to="/favorites" className="text-white hover:text-red-500 transition mx-2">
            Favorites
          </NavLink>
        </div>
      </div>
      {/*  bellows a horizontal line */} <hr className="border-gray-700 mb-4" />
    </>
  );
}

export default Header;
