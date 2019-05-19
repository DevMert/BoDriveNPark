import React, { Component } from "react";
import SpeicherButton from "./SpeicherButton";

class Footer extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="SaveFoot">
          <SpeicherButton />
        </div>
      </div>
    );
  }
}

export default Footer;
