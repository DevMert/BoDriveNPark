import React, { Component } from "react";

import PraeferenzListe from "./PraeferenzListe";
import SpeicherButton from "./SpeicherButton";

class Footer extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="PrefFoot">
          <PraeferenzListe />
        </div>
        <div className="SaveFoot">
          <SpeicherButton />
        </div>
      </div>
    );
  }
}

export default Footer;
