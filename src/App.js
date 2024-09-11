import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddVerse from "./components/Views/AddVerse";
import EditVerse from "./components/Views/EditVerse";
import ViewVerse from "./components/Views/ViewVerse";
import HeaderNav from "./components/HeaderNav";
import Alefbet from "./components/Views/Alefbet";
import ViewVerses from "./components/Views/ViewVerses";
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
        <Route path="/alefbet">
          <Alefbet />
        </Route>
        <Route path="/add">{/* <AddVerse setVerses={setVerses} /> */}</Route>
        <Route path="/:id">
          {/* <EditVerse verses={verses} setVerses={setVerses} /> */}
          <ViewVerse verses={verses} />
        </Route>
        <Route path="/">
          <ViewVerses verses={verses} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
