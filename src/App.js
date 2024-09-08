import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddVerse from "./components/Vocabulary/AddVerse";
import EditVerse from "./components/Vocabulary/EditVerse";
import HeaderNav from "./components/HeaderNav";
import ViewVerse from "./components/Vocabulary/ViewVerses";
import { useState, useEffect } from "react";
import axios from "axios";
import { testURL, liveURL } from "./BaseURLs";

function App() {
  const [verses, setVerses] = useState([]);

  const getVerses = () => {
    // axios
    //   .get(testURL)
    //   .then((res) => setVerses(res.data.reverse()))
    //   .catch((err) => console.log(err, "it has an error"));
    // sample data
    setVerses([
      {
        _id: 1,
        reference: "Genesis 1:1",
        hebrewText: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
        pronunciation: "B'reishit bara Elohim et hashamayim v'et ha'aretz",
        englishText: "In the beginning God created the heavens and the earth",
        englishVersion: "NIV",
        notes: "This is the first verse of the Bible",
      },
      {
        _id: 2,
        reference: "Genesis 1:2",
        hebrewText:
          "וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם",
        pronunciation:
          "V'ha'aretz hayetah tohu vavohu v'choshech al-p'nei tehom v'ruach Elohim m'rachefet al-p'nei hamayim",
        englishText:
          "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters",
        englishVersion: "NIV",
        notes: "This is the second verse of the Bible",
      },
    ]);
  };

  useEffect(() => {
    getVerses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <HeaderNav />
      <Switch>
        <Route path="/add">
          <AddVerse setVerses={setVerses} />
        </Route>
        <Route path="/:id">
          <EditVerse verses={verses} setVerses={setVerses} />
        </Route>
        <Route path="/">
          <ViewVerse verses={verses} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
