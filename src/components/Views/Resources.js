import React from "react";
import { Link } from "react-router-dom";

// const clearStyle = {
//   textDecoration: "none",
//   color: "black",
// };

const Resources = () => {
  return (
    <div className="alphabeta">
      <div>
        <h2>Hebrew Resources</h2>

        <ul>
          <li>
            <Link to="/alefbet">Hebrew Alefbet Info</Link>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@TheBibleInHebrew"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Bible in Hebrew Youtube Channel
            </a>
          </li>
          <li>
            <a
              href="https://doitinhebrew.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Do It In Hebrew
            </a>
          </li>
          <li>
            <a
              href="https://biblehub.com/interlinear/genesis/1.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interlinear Bible - Hebrew
            </a>
          </li>
          <li>
            <a
              href="https://www.hebrewpod101.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HebrewPod101
            </a>
          </li>
          <li>
            <a
              href="https://www.ancient-hebrew.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ancient Hebrew
            </a>
          </li>
          <li>
            <a
              href="https://www.hebrew4christians.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hebrew for Christians
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Greek Resources</h2>
        <ul>
          <li>
            <Link to="/alphabeta">Greek Alphabet Info</Link>
          </li>
          <li>
            <a
              href="https://biblehub.com/interlinear/matthew/1.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interlinear Bible - Greek
            </a>
          </li>
        </ul>
      </div>
      <h2>Memorization Resources</h2>
      <ul>
        <li>
          <a
            href="https://www.memverse.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Memverse
          </a>
        </li>
        <li>
          <a
            href="https://www.biblememory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bible Memory
          </a>
        </li>
        <li>
          <a
            href="https://www.biblegateway.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bible Gateway
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
