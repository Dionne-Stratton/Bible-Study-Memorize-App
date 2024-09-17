import React, { useState } from "react";
import { Link } from "react-router-dom";

const clearStyle = {
  textDecoration: "none",
  color: "black",
};

const Study = (props) => {
  const { verses } = props;
  console.log("verses", verses);
  const [expandedBook, setExpandedBook] = useState(null);
  const [expandedChapter, setExpandedChapter] = useState(null);

  const toggleBook = (book) => {
    setExpandedBook(expandedBook === book ? null : book);
    setExpandedChapter(null); // Close any open chapters when switching books
  };

  const toggleChapter = (chapter) => {
    setExpandedChapter(expandedChapter === chapter ? null : chapter);
  };

  return (
    <div className="alphabeta">
      <h1>Choose a Book</h1>
      {Object.keys(verses).map((book) => (
        <div key={book}>
          <h2 onClick={() => toggleBook(book)} style={{ cursor: "pointer" }}>
            {book}
          </h2>
          {expandedBook === book &&
            Object.keys(verses[book]).map((chapter) => (
              <div key={chapter} style={{ marginLeft: "20px" }}>
                <h3
                  onClick={() => toggleChapter(chapter)}
                  style={{ cursor: "pointer" }}
                >
                  Chapter {chapter}
                </h3>
                {expandedChapter === chapter &&
                  verses[book][chapter].map((verse) =>
                    Object.keys(verse).map((verseNumber) => (
                      <Link
                        to={`/${book}-${chapter}-${verseNumber}`}
                        style={clearStyle}
                      >
                        <p>Verse {verseNumber}</p>
                      </Link>
                    ))
                  )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Study;
