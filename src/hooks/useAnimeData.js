// src/hooks/useAnimeData.js
import { useState, useEffect } from 'react';

const useAnimeData = (searchTerm) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const endpoint = searchTerm
          ? `https://api.jikan.moe/v4/anime?q=${searchTerm}`
          : 'https://api.jikan.moe/v4/top/anime';
        const response = await fetch(endpoint);
        const data = await response.json();
        if (data.data) {
          setAnimes(shuffleArray(data.data));
        }
      } catch (error) {
        console.error('Error fetching the animes:', error);
      }
    };

    fetchAnimes();
  }, [searchTerm]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return animes;
};

export default useAnimeData;
