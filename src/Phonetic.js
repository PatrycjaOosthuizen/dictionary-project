import React, { useState } from "react";
import { FaVolumeUp, FaRegPlayCircle } from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic(props) {
  const [vomumeIcon, setVolumeIcon] = useState(<FaVolumeUp />);
  function handleClick() {
    let audio = new Audio(props.phonetic.audio);
    if (audio.paused) {
      audio.play();
      setVolumeIcon(<FaRegPlayCircle />);
      audio.onended = function () {
        setVolumeIcon(<FaVolumeUp />);
      };
    } else {
      audio.pause();
      audio.currentTime = 0;
      setVolumeIcon(<FaVolumeUp />);
    }
  }
  if (props.phonetic.audio) {
    return (
      <span className="Phonetic">
        <button className="volume-button" onClick={handleClick}>
          {vomumeIcon}
        </button>
        <span className="phonetic-text">{props.phonetic.text}</span>
      </span>
    );
  } else {
    return null;
  }
}
//React Icons : https://react-icons.github.io/react-icons/
