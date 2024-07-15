// src/components/AnimeCard.js
import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{anime.title}</h2>
        {/* <p className="mt-2">{anime.synopsis}</p> */}
        <a href={anime.url} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 hover:underline">
          More Info
        </a>
      </div>
    </div>
  );
};

export default AnimeCard;
