import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { memoryVerses } from "../../DataSet/MemoryVerses";

const Memorize = (props) => {
  const history = useHistory();
  const { setMemoryVerse } = props;
  const handleVerseClick = (memoryVerse) => {
    setMemoryVerse(memoryVerse);
    history.push({
      pathname: "/memory-grid",
    });
  };

  const clearStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="main-page">
      <h1>Memorize</h1>
      <div>
        <ul>
          {memoryVerses.map(
            (verse) => (
              //console log verse to see what is being passed
              console.log(verse),
              (
                <Link
                  key={verse.reference}
                  to={`/memory-grid`}
                  onClick={() => handleVerseClick(verse)}
                  style={clearStyle}
                >
                  <li>{verse.reference}</li>
                </Link>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Memorize;
