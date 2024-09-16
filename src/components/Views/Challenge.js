import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { alefBetKeys } from "../../DataSet/AlefbetKeys";

const Challenge = (props) => {
  const { verses } = props;
  const { id } = useParams();
  const [verse, setVerse] = useState({});
  let parsedId = Number(id);

  const initialUserInput = {
    hebrew: "",
    reading: "",
    english: "",
  };

  useEffect(() => {
    if (verses.length > 0) {
      let item = verses.filter((item) => item._id === parsedId)[0];
      setVerse(item);
    }
    // eslint-disable-next-line
  }, []);

  const [userInput, setUserInput] = useState(initialUserInput);
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState("");
  //   const [hebrewInput, setHebrewInput] = useState("");

  const handleInputChange = (e) => {
    //set user input to the value of the input field along with the name of the input field
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  //   const handleHebrewInput = (e) => {
  //     setHebrewInput(e.target.value);
  //   };

  //   const onHebrewLetterClick = (e) => {
  //     const letter = e.target.innerText;
  //     let newInput;
  //     if (letter === "space") {
  //       newInput = hebrewInput + " ";
  //     } else if (letter === "delete") {
  //       newInput = hebrewInput.slice(0, -1);
  //     } else {
  //       newInput = hebrewInput + letter;
  //     }
  //     setHebrewInput(newInput);
  //   };

  const clear = () => {
    setUserInput(initialUserInput);
    setMessage("");
    setIsCorrect(false);
    setQuestion("");
  };

  const checkAnswer = (key) => {
    console.log("uerInput:", userInput);
    setQuestion(key);
    const answer = userInput[key].toLowerCase();
    const correctAnswer = verse[key].toLowerCase();
    const correctAnswerMessage = verse[key];
    setIsCorrect(answer === correctAnswer);
    setMessage(`The answer is: ${correctAnswerMessage}`);
  };

  return (
    <div className="viewVerse">
      <h3>Challenge: {verse.reference}</h3>
      <h4>{verse.hebrew}</h4>
      {/* map over the this array [Hebrew, Reading, English] and create the folloing
      elements for each item: a label using the item as the text a text input
      field with the name attribute set to the item a value attribute that gets
      the value from the userInput state a p tag that displays the correct
      answer for that item and whether the user's input is correct or not a
      button that when clicked will run the checkAnswer function */}
      <div>
        <div>
          <label>English: </label>
          <textarea
            name="english"
            value={userInput.english}
            onChange={handleInputChange}
          />
          {question === "english" && (
            <p>
              {isCorrect ? "👍Correct!" : "👎Incorrect."} {message}
            </p>
          )}
          <button onClick={() => checkAnswer("english")}>Check Answer</button>
          <button onClick={() => setMessage("")}>Clear All</button>
        </div>
        <div>
          <label>Reading: </label>
          <textarea
            name="reading"
            value={userInput.reading}
            onChange={handleInputChange}
          />
          {question === "reading" && (
            <p>
              {isCorrect ? "👍Correct!" : "👎Incorrect."} {message}
            </p>
          )}
          <button onClick={() => checkAnswer("reading")}>Check Answer</button>
          <button onClick={() => clear()}>Clear All</button>
        </div>
      </div>
      {/* <div className="hebrew-letters">
        <label>Hebrew Letters Input</label>
        <textarea value={hebrewInput} onChange={handleHebrewInput} />
        {alefBetKeys.map((letter) => {
          return (
            <p key={letter} onClick={onHebrewLetterClick}>
              {letter}
            </p>
          );
        })}
      </div> */}
    </div>
  );
};

export default Challenge;
