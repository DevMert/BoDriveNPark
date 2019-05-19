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
    if (
      this.props.flagsAllowed > 0 ||
      (this.props.flagsAllowed == 0 && this.state.isToggled == true)
    ) {
      this.setState({ isToggled: !this.state.isToggled });
      this.props.onClick();
    } else if (this.props.flagsAllowed == 0 && this.state.isToggled == false)
      return;
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
