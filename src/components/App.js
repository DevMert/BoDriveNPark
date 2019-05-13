import React, { Component } from "react";
import "../App.css";
import Header from "./NavBar";
import Dashboard from "./Dashboard";
import map from "./Map";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/map" component={map} />
      </div>
    </Router>
  );
}

export default App;
