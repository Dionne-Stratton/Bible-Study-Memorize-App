import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddVerse from "./components/Vocabulary/AddVerse";
import EditVerse from "./components/Vocabulary/EditVerse";
import HeaderNav from "./components/HeaderNav";
import ViewVerse from "./components/Vocabulary/ViewVerses";
// import { useState, useEffect } from "react";
import { verses } from "./DataSet/verses";
// import axios from "axios";
// import { testURL, liveURL } from "./BaseURLs";

function App() {
  // const [verses, setVerses] = useState([]);

  // const getVerses = () => {
  //   // axios
  //   //   .get(testURL)
  //   //   .then((res) => setVerses(res.data.reverse()))
  //   //   .catch((err) => console.log(err, "it has an error"));
  //   // sample data
  //   setVerses();
  // };

  // useEffect(() => {
  //   getVerses();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="App">
      <HeaderNav />
      <Switch>
        <Route path="/add">{/* <AddVerse setVerses={setVerses} /> */}</Route>
        <Route path="/:id">
          {/* <EditVerse verses={verses} setVerses={setVerses} /> */}
        </Route>
        <Route path="/">
          <ViewVerse verses={verses} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
