import React, { Component } from "react";

import OldPlans from "./OldPlans";
import CurrentWeek from "./CurrentWeek";

export default class PlanControl extends Component {
  render() {
    return (
      <div>
        <OldPlans />
        <CurrentWeek />
      </div>
    );
  }
}
