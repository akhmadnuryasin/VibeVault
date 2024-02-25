import { v4 as uuidv4 } from "uuid";
import thumbnailImage from "/images/thumbnail.jpg";
import linkinParkAudio from "/music/Linki.mp3";
import goodVibesAudio from "/music/good.mp3";
import hapiAudio from "/music/hapy.mp3";
import nfsAudio from "/music/nfs.mp3";
import venceireAudio from "/music/venceire.mp3";

function chillHop() {
  return [
    {
      name: "Linkin Park",
      cover: thumbnailImage,
      artist: "Aso, Middle School, Aviino",
      audio: linkinParkAudio,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Good Vibes",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: goodVibesAudio,
      color: ["#FF5733", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Happy Song",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: hapiAudio,
      color: ["#45CE30", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Need for Speed",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: nfsAudio,
      color: ["#4D7FFF", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Venceire",
      cover: thumbnailImage,
      artist: "Artist Name",
      audio: venceireAudio,
      color: ["#8E44AD", "#FFD700"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
