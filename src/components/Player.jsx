import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => ({
      ...song,
      active: song.id === nextPrev.id,
    }));
    setSongs(newSongs);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const getTime = (time) => {
    return `${Math.floor(time / 60)}:${("0" + Math.floor(time % 60)).slice(
      -2
    )}`;
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;

    if (direction === "skip-forward") {
      await setCurrentSong(songs[nextIndex]);
      activeLibraryHandler(songs[nextIndex]);
    }
    if (direction === "skip-back") {
      await setCurrentSong(songs[prevIndex]);
      activeLibraryHandler(songs[prevIndex]);
    }

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="z-10 flex flex-col items-center justify-center p-4 space-y-4">
      <div className="flex items-center">
        <p className="text-white">{getTime(songInfo.currentTime)}</p>
        <div className="relative w-64 h-4 mx-4">
          <input
            type="range"
            aria-label="Playing music range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            className="absolute w-full h-full bg-gray-300 rounded-md appearance-none"
          />
          <div
            style={trackAnim}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-transparent to-currentSong.color[1] animate-track"
          ></div>
        </div>
        <p className="text-white">
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          className="text-white cursor-pointer"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="text-white cursor-pointer"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          className="text-white cursor-pointer"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
