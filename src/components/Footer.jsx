import React, { Component } from "react";

import Preference from "./Preference";
import SaveButton from "./SaveButton";

class Footer extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="PrefFoot">
          <Preference />
        </div>
        <div className="SaveFoot">
          <SaveButton />
        </div>
      </div>
    );
  }
}

export default Footer;
