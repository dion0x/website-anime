// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">AnimeGalaxy</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/recommendations" className="text-white">Recommendations</Link>
          <div 
            className="relative inline-block text-left" 
           onClick={() => setDropdownOpen(!dropdownOpen)} >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white"
            >
              Watch
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg">
                <div className="py-1">
                  <a href="https://www.hianime.to" className="block px-4 py-2 text-sm text-gray-700" target="_blank" rel="noopener noreferrer">HiAnime</a>
                  <a href="https://animesuge.to/" className="block px-4 py-2 text-sm text-gray-700" target="_blank" rel="noopener noreferrer">AnimeSuge</a>
                  <a href="https://www.crunchyroll.com/" className="block px-4 py-2 text-sm text-gray-700" target="_blank" rel="noopener noreferrer">Crunchyroll</a>
                  <a href="https://aniwatchtv.to/" className="block px-4 py-2 text-sm text-gray-700" target="_blank" rel="noopener noreferrer">AniWatch</a>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="text-white">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
