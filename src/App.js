import React, { useState } from "react";
import Home from './Components/Pages/Home/Home';
import Lessons from "./Components/Pages/Lessons/Lessons";
import Subjects from "./Components/Pages/Subjects/Subjects";
import Terms from "./Components/Pages/Terms/Terms";
import Topics from "./Components/Pages/Topics/Topics";
// import sendAsync from './renderer';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import './App.css';
import db from "./db.json"
import { dd } from "./dd";

function App() {
  const [texts] = useState(["JSS1", "JSS2", "JSS3", "SSS12", "SSS2", "SSS34"])
  const [terms] = useState(["First Term", "Second Term"])
  const [filtered, setFiltered] = useState(db);
  // const [classes] = useState(db);
  // console.log(classes);
  // console.log(filtered); 
 
  function searchGrade(text) {
    // let trimText = toLowerCase(text);
    // console.log(trimText);
    let filteredText = db.filter((item) => {
      return item.classid.indexOf(text) > -1;
    })
    setFiltered(filteredText);
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home db={filtered} texts={texts} searchGrade={searchGrade} />
            </Route>
            <Route path="/lessons">
              <Lessons dd={dd} db={db} texts={texts}/>
            </Route>
            <Route path="/subjects">
              <Subjects  db={db} />
            </Route>
            <Route path="/terms">
              <Terms terms={terms} />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
