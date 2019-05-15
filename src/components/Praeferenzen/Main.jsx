import React, { Component } from "react";

import AltePlaene from "./AltePlaene";
import Stundenplan from "./Stundenplan";
import Footer from "./Footer/Footer";

export default class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <AltePlaene />
        <Stundenplan />
        <Footer />
      </div>
    );
  }
}
