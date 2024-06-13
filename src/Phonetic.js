import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="phonetic-text">{props.phonetic.text}</div>
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
        />
      </div>
    );
  } else {
    return null;
  }
}
//React Audio Player instakation document: https://www.npmjs.com/package/react-audio-player
