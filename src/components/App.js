import React, { Component } from "react";
import "../App.css";
import Header from "./NavBar";
import map from "./Map";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Main from "./Preferences/Main";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/dashboard" component={Main} />
        <Route path="/map" component={map} />
        <div />
      </div>
    </Router>
  );
}

export default App;
