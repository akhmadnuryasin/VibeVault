import React from "react";

const Song = ({ currentSong }) => (
  <div className="flex flex-col items-center justify-center p-6 song-container md:p-12">
    <img
      className="rounded-full w-[250px] aspect-square"
      src={currentSong.cover}
      alt={currentSong.name}
    />
    <h2 className="mt-5 text-xl font-bold text-center md:text-2xl lg:text-3xl">
      {currentSong.name}
    </h2>
    <h3 className="mt-1 text-center">{currentSong.artist}</h3>
  </div>
);

export default Song;
