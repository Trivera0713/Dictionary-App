import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <audio controls src={props.phonetic.audio}>
        <a href={props.phonetic.audio}>Listen</a>{" "}
      </audio>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
