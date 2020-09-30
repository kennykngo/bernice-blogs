import React from "react";

import Navigation from "./components/Navigation";

import "./assets/scss/base.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
