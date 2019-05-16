import React, { Component } from "react";
import Fach from "./Fach";

class Fachzelle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
      position: {
        tag:'',
        zeit:'',
      }
    };
  }

  handleToggleFach = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };


  handleSetPosition = (props) => {
    this.setState(() => {

    })
  }

  render() {
    return (
      <td onClick={this.handleToggleFach} style={{ margin: "0", padding: "0" }}>
        {this.state.isToggled ? <Fach/> : null}
      </td>
    );
  }
}

export default Fachzelle;
