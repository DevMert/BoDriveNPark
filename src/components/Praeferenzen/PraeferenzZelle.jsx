import React, { Component } from "react";
import PraeferenzContainer from "./PraeferenzContainer";

class PraeferenzZelle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false
    };
  }

  handleToggleContainer = () => {
    this.setState({ isToggled: !this.state.isToggled });
    this.props.onClick();
  };

  render() {
    return (
      <td
        onClick={this.handleToggleContainer}
        style={{ margin: "0", padding: "0" }}
      >
        <div>{this.state.isToggled ? <PraeferenzContainer /> : null}</div>
      </td>
    );
  }
}

export default PraeferenzZelle;
