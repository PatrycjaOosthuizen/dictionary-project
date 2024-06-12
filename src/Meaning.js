import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              <strong>Definition:</strong> {definition.definition}
            </div>
            <div className="Example">
              <strong>Example:</strong>
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}