import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-md-6">
          <audio controls src={props.phonetic.audio}>
            <a href={props.phonetic.audio}>Listen</a>
          </audio>
        </div>
        <div className="text col-md-6 ">{props.phonetic.text}</div>
      </div>
    </div>
  );
}
