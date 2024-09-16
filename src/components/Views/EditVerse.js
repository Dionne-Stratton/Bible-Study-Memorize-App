import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { testURL, liveURL } from "../../BaseURLs";

export default function EditVerse(props) {
  const { verses, setVerses } = props;
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [form, setForm] = useState({});
  const history = useHistory();
  const testURLwithID = `${testURL}/${id}`;
  let parsedId = Number(id);

  useEffect(() => {
    if (verses.length > 0) {
      let item = verses.filter((item) => item._id === parsedId)[0];
      setItem(item);
      setForm({
        reference: item.reference,
        hebrew: item.hebrew,
        pronunciation: item.pronunciation,
        english: item.english,
        version: item.version,
        notes: item.notes,
      });
    }
    // eslint-disable-next-line
  }, [verses, id]);

  const onchange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
    axios
      .put(testURLwithID, form)
      // have .then setVocab to the new data plus the old and setItem to the new data
      .then((res) => {
        setItem(res.data);
        setVerses([
          res.data,
          ...verses.filter((item) => item._id !== parsedId),
        ]);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (e) => {
    e.preventDefault();
    axios
      .delete(testURLwithID)
      .then((res) => console.log(res))
      .then(() => setVerses(verses.filter((item) => item._id !== parsedId)))
      .catch((err) => console.log(err))
      .finally(() => history.push("/"));
  };

  return (
    <div className="edit-page">
      <div>
        <h2>Editing Verse</h2>
        <div className="viewForm">
          <form onSubmit={onSubmit}>
            <label>Reference: </label>
            <input
              type="text"
              name="reference"
              value={item.reference}
              onChange={onchange}
            />
            <label>Hebrew Text: </label>
            <input
              type="text"
              name="hebrew"
              value={form.hebrew}
              onChange={onchange}
            />
            <label> Reading: </label>
            <input
              type="text"
              name="pronunciation"
              value={form.pronunciation}
              onChange={onchange}
            />
            <label> English Text: </label>
            <input
              type="text"
              name="english"
              value={form.english}
              onChange={onchange}
            />
            <br></br>
            <label>version: </label>
            <input
              type="text"
              name="version"
              value={form.version}
              onChange={onchange}
            />
            <label> Notes: </label>
            <input
              type="text"
              name="notes"
              value={form.notes}
              onChange={onchange}
            />
            <input
              className="submit-button"
              id="submit"
              type="submit"
              value="Submit Changes"
            ></input>
          </form>
        </div>
        <div className="viewEdit">
          <p>{item.reference}</p>
          <p>{item.hebrew}</p>
          <p>{item.pronunciation}</p>
          <p>
            {item.version}: {item.english}
          </p>
          <p>Notes: {item.notes}</p>
          <p>Files, audio or video will go here.</p>
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
