import windSvg from "./icons/wind.svg";
import rainSvg from "./icons/rain.svg";
import nightSvg from "./icons/night.svg";
import clockSvg from "./icons/clock.svg";
import beachSvg from "./icons/beach.svg";
import waveSvg from "./icons/wave.svg";
import streamSvg from "./icons/stream.svg";
import fireSvg from "./icons/fire.svg";
import leavesSvg from "./icons/leaves.svg";
import thunderSvg from "./icons/thunder.svg";
//import coffeeSvg from "./icons/coffee-cup.svg";

import beachAudio from "./sounds/beach.mp3";
import clockAudio from "./sounds/clock.mp3";
//import coffeeAudio from "./sounds/coffeeshop.mp3";
import fireAudio from "./sounds/fire.mp3";
import leavesAudio from "./sounds/leaves.mp3";
import nightAudio from "./sounds/night.mp3";
import rainAudio from "./sounds/rain.mp3";
import streamAudio from "./sounds/stream.mp3";
import thunderAudio from "./sounds/thunderstorm.mp3";
import waveAudio from "./sounds/wave.mp3";
import windAudio from "./sounds/wind.mp3";

const panels = [
  {
    id: 0,
    image: windSvg,
    audio: windAudio,
  },
  {
    id: 1,
    image: rainSvg,
    audio: rainAudio,
  },
  {
    id: 2,
    image: nightSvg,
    audio: nightAudio,
  },
  {
    id: 3,
    image: clockSvg,
    audio: clockAudio,
  },
  {
    id: 4,
    image: beachSvg,
    audio: beachAudio,
  },
  {
    id: 5,
    image: waveSvg,
    audio: waveAudio,
  },
  {
    id: 6,
    image: streamSvg,
    audio: streamAudio,
  },
  {
    id: 7,
    image: fireSvg,
    audio: fireAudio,
  },
  /* {
    id: 8,
    image: coffeeSvg,
    audio: coffeeAudio,
  }, */
  {
    id: 8,
    image: thunderSvg,
    audio: thunderAudio,
  },
  {
    id: 9,
    image: leavesSvg,
    audio: leavesAudio,
  },
];

export default panels;
