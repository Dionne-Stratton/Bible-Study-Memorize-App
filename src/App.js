import "./App.css";
import { Switch, Route } from "react-router-dom";
// import AddVerse from "./components/Views/AddVerse";
// import EditVerse from "./components/Views/EditVerse";
import ViewVerse from "./components/Views/ViewVerse";
import HeaderNav from "./components/HeaderNav";
import Alefbet from "./components/Views/Alefbet";
import AlphaBeta from "./components/Views/AlphaBeta";
// import StudyVerses from "./components/Views/StudyVerses";
import Challenge from "./components/Views/Challenge";
import Resources from "./components/Views/Resources";
import MemoryGrid from "./components/Views/MemoryGrid";
import Memorize from "./components/Views/Memorize";
import Study from "./components/Views/Study";
import { useState } from "react";
import { bibleData } from "./DataSet/OldTestamentStudy";
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
  const [memoryVerse, setMemoryVerse] = useState({});

  return (
    <div className="App">
      <HeaderNav />
      <Switch>
        <Route path="/alefbet">
          <Alefbet />
        </Route>
        <Route path="/alphabeta">
          <AlphaBeta />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/memorize">
          <Memorize setMemoryVerse={setMemoryVerse} />
        </Route>
        <Route path="/memory-grid">
          <MemoryGrid memoryVerse={memoryVerse} />
        </Route>
        <Route path="/challenge/:id">
          <Challenge verses={bibleData} />
        </Route>
        <Route path="/add">{/* <AddVerse setVerses={setVerses} /> */}</Route>
        <Route path="/:id">
          {/* <EditVerse verses={verses} setVerses={setVerses} /> */}
          <ViewVerse verses={bibleData} />
        </Route>
        {/* <Route path="/">
          <StudyVerses verses={verses} />
        </Route> */}
        <Route path="/">
          <Study verses={bibleData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
