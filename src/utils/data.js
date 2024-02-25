import { v4 as uuidv4 } from "uuid";
import thumbnailImage from "/images/thumbnail.jpg";

import anyoneForYouAudio from "/music/AnyoneForYou.mp3";
import dejaVuAudio from "/music/DejaVu.mp3";
import dontWakeMeUpAudio from "/music/Don'tWakeMeUp.mp3";
import highAudio from "/music/High.mp3";
import iLostMyselfAudio from "/music/ILostMyself.mp3";
import inTheDarkAudio from "/music/InTheDark.mp3";
import invisibleAudio from "/music/Invisible.mp3";
import letSomebodyGoAudio from "/music/LetSomebodyGo.mp3";
import lightSwitchAudio from "/music/LightSwitch.mp3";
import longDrivesAudio from "/music/LongDrives.mp3";
import redruMAudio from "/music/redruM.mp3";
import shesAllWannaBeAudio from "/music/She'sAllWannaBe.mp3";
import theGodsWeCanTouchAudio from "/music/TheGodsWeCanTouch.mp3";

function chillHop() {
  return [
    {
      name: "Anyone For You",
      cover: thumbnailImage,
      artist: "Aso, Middle School, Aviino",
      audio: anyoneForYouAudio,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Deja Vu",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: dejaVuAudio,
      color: ["#FF5733", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Don't Wake Me Up",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: dontWakeMeUpAudio,
      color: ["#45CE30", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "High",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: highAudio,
      color: ["#4D7FFF", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "ILostMyself",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: iLostMyselfAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "InTheDark",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: inTheDarkAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Invisible",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: invisibleAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "LetSomebodyGo",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: letSomebodyGoAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "LightSwitch",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: lightSwitchAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "LongDrives",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: longDrivesAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "redruM",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: redruMAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "She'sAllWannaBe",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: shesAllWannaBeAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "TheGodsWeCanTouch",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: theGodsWeCanTouchAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
