import React from "react";

function Header() {
  return (
    <>
      <div className=" text-white p-4 flex justify-between items-center sticky top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-10">
        <h1 className="text-2xl font-bold">Movie<span className="text-red-800">Hub</span></h1>
        <h1 className="text-2xl font-bold">Favorites</h1>
      </div>
    
  {/*  bellows a horizontal line */}    <hr className="border-gray-700 mb-4" />  
    </> )
}

export default Header;
