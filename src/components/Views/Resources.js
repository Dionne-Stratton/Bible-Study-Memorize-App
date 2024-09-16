import React from "react";
import { hebrewResources, greekResources } from "../../DataSet/resourcesLinks";

const Resources = () => {
  return (
    <div className="alphabeta">
      <h1>Study Resources</h1>
      <div>
        <h2>Hebrew Resources</h2>
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
