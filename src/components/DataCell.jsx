import React, { Component } from "react";
import Fach from "./Fach";
class DataCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSet: false
    };
  }

  handleAddFach = () => {
    this.setState({ isSet: !this.state.isSet });
  };

  render() {
    return (
      <td onClick={this.handleAddFach}>{this.state.isSet ? <Fach /> : null}</td>
    );
  }
}

export default DataCell;
