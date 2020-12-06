import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route
          path="/person/:my_unique_identifier"
          children={<Person />}
        ></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
