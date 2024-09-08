import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import audioFile from "../../DataSet/Files/Genesis1_1.mp4";

const ViewVerses = (props) => {
  const { verses } = props;

  const clearStyle = {
    textDecoration: "none",
    color: "black",
  };

  console.log(verses);
  return (
    <div>
      <h2>Verses</h2>
      {verses.length === 0 && <p>Loading...</p>}
      <h3>Total Verses: {verses.length}</h3>
      {verses?.map((verse) => {
        return (
          <div className="aboutbox" key={verse._id}>
            <div className="textbox">
              <Link to={`/${verse._id}`} style={clearStyle}>
                <p>{verse.reference}</p>
                <h4>{verse.hebrewText}</h4>
                <h4>{verse.reading}</h4>
                <h4>
                  {verse.englishVersion}: {verse.englishText}
                </h4>
                <h4>{verse.notes}</h4>
                <video controls>
                  <source src={verse.spoken} type="video/mp4" />
                  Your browser does not support the audio element.
                </video>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewVerses;
