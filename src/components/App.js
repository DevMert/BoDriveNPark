import React, { Component } from "react";
import "../App.css";
import Header from "./Navigation/NavBar";
import Karte from "./Karte/Karte";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Praeferenzen/Main";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/praeferenzplanung" component={Main} />
        <Route path="/map" component={Karte} />
        <div />
      </div>
    </Router>
  );
}

export default App;
