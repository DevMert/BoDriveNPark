import React, { Component } from "react";
import PraeferenzContainer from "./PraeferenzContainer";

class ReservierungsZelle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false
    };
  }

  render() {
    return (
      <td>
        <div>Reserviert</div>
      </td>
    );
  }
}

export default ReservierungsZelle;
