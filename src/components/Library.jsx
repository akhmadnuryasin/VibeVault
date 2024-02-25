import React, { useEffect } from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  audioRef,
}) => {
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (e.target.classList.contains("bg-opacity-75")) {
        setLibraryStatus(false);
      }
    };

    if (libraryStatus) {
      document.addEventListener("click", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [libraryStatus, setLibraryStatus]);

  useEffect(() => {
    if (!libraryStatus && isPlaying) {
      audioRef.current.play();
    }
  }, [libraryStatus, isPlaying, audioRef]);

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${
        libraryStatus ? "flex" : "hidden"
      }`}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md w-full max-w-[90%] h-screen overflow-hidden md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Library
        </h2>
        <div className="max-h-full overflow-auto library-songs">
          {songs.map((song) => (
            <LibrarySong
              key={song.id}
              song={song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              id={song.id}
              isPlaying={isPlaying}
              setSongs={setSongs}
              setLibraryStatus={setLibraryStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
