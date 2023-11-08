import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <Synonyms synonyms={props.meaning.synonyms} />
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong> {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}{" "}
    </div>
  );
}
