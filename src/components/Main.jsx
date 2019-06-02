import React, { Component } from "react";

import Stundenplan from "./Praeferenzen/Stundenplan";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservierung from "./Reservierung/Reservierung";
import Experimental from "./experimental/Experimental";
import Karte from "./Karte/Karte";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/praeferenzplanung" component={Stundenplan} />
          <Route path="/reservierung" component={Reservierung} />
          <Route path="/map" component={Karte} />
          <Route path="/experimental" component={Experimental} />
        </Router>
      </div>
    );
  }
}
