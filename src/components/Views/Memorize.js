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
      <div
        style={{
          border: "2px solid black",
          background: "lightgrey",
          width: "300px",
          height: "110px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            float: "left",
            width: "90px",
          }}
        >
          <a href="https://biblememory.com/Group/View/5c66e2a3dc/">
            <img
              src="https://biblememory.com/media/0e150e2b-b882-4e7b-92b4-dbd549e2152d/90/100/media.jpg"
              alt=""
            />
          </a>
        </div>
        <div
          style={{
            float: "left",
            width: "200px",
            height: "90px",
            padding: "3px 5px 5px 5px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
            top: "0px",
            left: "0px",
          }}
        >
          Get Immersed
          <br />
          <div>
            <a href="https://biblememory.com/Group/View/5c66e2a3dc/">Join Us</a>
            <div
              style={{
                position: "absolute",
                bottom: "5px",
                left: "5px",
                paddingBottom: "5px",
                // color: "#CCCCCC",
              }}
            >
              biblememory.com
            </div>
          </div>
        </div>
        <div style={{ clear: "left" }}></div>
      </div>

      <div>
        <ul>
          {memoryVerses.map((verse) => (
            <Link
              key={verse.reference}
              to={`/memory-grid`}
              onClick={() => handleVerseClick(verse)}
              style={clearStyle}
            >
              <li>{verse.reference}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Memorize;
