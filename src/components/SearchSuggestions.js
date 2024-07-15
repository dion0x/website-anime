// src/components/SearchSuggestions.js
import React from 'react';

const SearchSuggestions = ({ suggestions }) => {
  return (
    <div className="mt-2">
      {suggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded shadow-lg">
          {suggestions.map(anime => (
            <li key={anime.mal_id} className="p-2 hover:bg-gray-200">
              <a href={anime.url} target="_blank" rel="noopener noreferrer" className="block">
                {anime.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSuggestions;
