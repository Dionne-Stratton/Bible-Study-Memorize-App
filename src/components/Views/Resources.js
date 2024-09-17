import React from "react";
import { hebrewResources, greekResources } from "../../DataSet/resourcesLinks";
import { Link } from "react-router-dom";

const clearStyle = {
  textDecoration: "none",
  color: "black",
};

const Resources = () => {
  return (
    <div className="alphabeta">
      <h1>Study Resources</h1>
      <div>
        <h2>Hebrew Resources</h2>
        <Link to="/alefbet" style={clearStyle}>
          <p>Alefbet</p>
        </Link>
        <ul>
          {hebrewResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Greek Resources</h2>
        <ul>
          <Link to="/alphabeta" style={clearStyle}>
            <p>Alphabeta</p>
          </Link>
          {greekResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
