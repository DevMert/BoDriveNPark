import React, { Component } from "react";

import PlanControl from "./PlanControl";
import Stundenplan from "./Stundenplan";

export default class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <PlanControl />
        <Stundenplan />
      </div>
    );
  }
}
