import React, { Component } from "react";
import "../App.css";
import Header from "./NavBar";
import map from "./Map";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Main from "./Preferences/Main";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Route exact path="/" component="" />
        <Route path="/dashboard" component="" />
        <Route path="/map" component={map} />
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
