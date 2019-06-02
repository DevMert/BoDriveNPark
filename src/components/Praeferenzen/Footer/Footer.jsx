import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Footer extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="SaveFoot">
          <Button variant="success">Speichern</Button>
        </div>
      </div>
    );
  }
}

export default Footer;
