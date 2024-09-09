import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewVerse(props) {
  const { verses } = props;
  const { id } = useParams();
  const [verse, setVerse] = useState({});
  let parsedId = Number(id);

  useEffect(() => {
    if (verses.length > 0) {
      let item = verses.filter((item) => item._id === parsedId)[0];
      setVerse(item);
    }
    // eslint-disable-next-line
  }, []);

  console.log(verse);

  return (
    <div>
      <div className="verse-page">
        <div className="viewVerse">
          <h2>{verse.reference}</h2>
          <h4>{verse.hebrewText}</h4>
          <h4>{verse.reading}</h4>
          <h4>
            {verse.englishVersion}: {verse.englishText}
          </h4>
          <h4>Notes: {verse.notes}</h4>
        </div>
        <div className="video">
          {verse.spoken && (
            <video controls>
              <source src={verse.spoken} type="video/mp4" />
              Your browser does not support the audio element.
            </video>
          )}
        </div>
      </div>
      <h3>Vocabulary</h3>
      <div className="vocab">
        {verse.hebrewVocab?.map((word, index) => {
          return (
            <div className="deets" key={index}>
              <p>{word.word}</p>
              <p>{word.reading}</p>
              <p>{word.meaning}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
