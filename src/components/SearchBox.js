// src/components/SearchBox.js
import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const SearchBox = ({ searchTerm, handleSearch }) => {
  return (
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      type="text"
      placeholder="Search for an anime..."
      value={searchTerm}
      onChange={handleSearch}
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};

export default SearchBox;
