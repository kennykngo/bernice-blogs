import React from "react";

import Navigation from "./components/Navigation";

import "./assets/scss/base.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PageRenderer from "./page-renderer";

function App() {
  // references Navigation.js Avatar > span
  const user = {
    firstName: "Bernice",
    lastName: "Lam",
  };

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          {/* Be able to render any dynamic page, without having to maintain nav Link components */}
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
