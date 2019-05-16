import React, { Component } from "react";

import KWSwitch from "./KWSwitch";
import Stundenplan from "./Stundenplan";
import Footer from "./Footer/Footer";

export default class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <KWSwitch />
        <Stundenplan />
        <Footer />
      </div>
    );
  }
}
