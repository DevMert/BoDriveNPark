import React from "react";
import reactCSS from "reactcss";
import { GithubPicker } from "react-color";

class PraeferenzContainer extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "70",
      g: "70",
      b: "70",
      a: "1"
    },
    text: "Präferenz"
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.rgb });
  };

  handleChangeText = () => {};

  render() {
    const styles = reactCSS({
      default: {
        color: {
          //width: '20%',
          height: "50px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${
            this.state.color.b
          }, ${this.state.color.a})`
        },
        swatch: {
          //padding: '5px',
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          //display: 'inline-block',
          cursor: "pointer"
        },
        content: {
          textAlign: "center",
          margin: "0",
          color: "white",
          paddingTop: "10px"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color}>
            <p style={styles.content} onClick={this.handleChangeText}>
              {this.state.text}
            </p>
          </div>
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <GithubPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default PraeferenzContainer;
