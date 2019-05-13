import React, { Component } from "react";

import OldPlans from "./OldPlans";
import "./News.css";

export default class timetable extends Component {
  render() {
    return (
      <div>
        <OldPlans />
        <h2>Timetable</h2>
      </div>
    );
  }
}
