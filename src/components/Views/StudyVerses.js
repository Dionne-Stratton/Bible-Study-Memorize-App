import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudyVerses = (props) => {
  const { verses } = props;

  const clearStyle = {
    textDecoration: "none",
    color: "black",
  };

  //impliment search bar for filtering verses by reference
  const [search, setSearch] = useState("");
  const [filteredVerses, setFilteredVerses] = useState([]);

  useEffect(() => {
    setFilteredVerses(
      verses.filter((verse) =>
        verse.reference.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, verses]);

  console.log("search term", search);
  console.log("filtered verses", filteredVerses);
  console.log(verses);

  return (
    <div>
      {verses.length === 0 && <p>Loading...</p>}
      <h3>Total Verses: {verses.length}</h3>
      <input
        className="search"
        type="text"
        placeholder="Search by reference"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="references">
        {filteredVerses?.map((verse) => {
          return (
            <div className="aboutbox" key={verse._id}>
              <Link to={`/${verse._id}`} style={clearStyle}>
                <p>{verse.reference}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyVerses;
