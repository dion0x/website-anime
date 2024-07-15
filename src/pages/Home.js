// src/pages/Home.js
import React, { useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import SearchBox from '../components/SearchBox';
import useAnimeData from '../hooks/useAnimeData';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const animes = useAnimeData(searchTerm);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBox searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {animes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;
