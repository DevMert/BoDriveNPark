import React, { Component } from "react";
import Preference from "./Preference";
import SaveButton from "./SaveButton";

class Footer extends Component {
  render() {
    return (
      <div>
        <Preference />
        <SaveButton />
      </div>
    );
  }
}

export default Footer;
