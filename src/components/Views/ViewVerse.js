import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function ViewVerse(props) {
  const { verses } = props;
  const { id } = useParams();
  // const history = useHistory();
  const book = id.split("-")[0];
  const chapter = id.split("-")[1];
  const verseNum = id.split("-")[2];
  let verse = verses[book][chapter][verseNum - 1][verseNum];
  console.log("verse:", verse);
  console.log("id", id);
  console.log(`book: ${book}, chapter: ${chapter}, verse: ${verseNum}`);
  console.log("verses", verses);

  return (
    <div>
      <div className="verse-page">
        <div className="viewVerse">
          <h2>{verse.reference}</h2>
          <h4>{verse.hebrew}</h4>
          <h4>{verse.reading}</h4>
          <h4>
            {verse.version}: {verse.english}
          </h4>
          <h4>Notes: {verse.notes}</h4>
        </div>
        <div className="video">
          {verse.spoken && (
            <video
              controls
              style={{
                width: "100%", // Responsive width
                minWidth: "400px", // Minimum width
                maxWidth: "800px", // Maximum width
                minHeight: "300px", // Minimum height
                maxHeight: "450px", // Maximum height
                objectFit: "contain", // Ensures video fits the area without distortion
              }}
            >
              <source src={verse.spoken} type="video/mp4" />
              Your browser does not support the audio element.
            </video>
          )}
        </div>
      </div>
      <h3>Vocabulary</h3>
      {/* add a button with the text of challenge that links to the challenge page on onClick */}
      {/* <button onClick={() => history.push(`/challenge/${verse._id}`)}>
        Challenge
      </button> */}
      <div className="vocab">
        {verse.hebrewVocab?.map((word, index) => {
          return (
            <div className="deets" key={index}>
              <p>{word.word}</p>
              <p>{word.reading}</p>
              <p>{word.gender}</p>
              <p>{word.meaning}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
