import Apod from "pages/apod";
import Home from "pages/home";
import Rover from "pages/rover";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/apod">
          <Apod />
        </Route>
        <Route exact path="/rover">
          <Rover />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
