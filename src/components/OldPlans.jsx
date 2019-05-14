import React, { Component } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

export default class OldPlans extends Component {
  render() {
    return (
      <div style={{ align: "center", float: "left" }}>
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={
            <Popover id="popover-basic" title="Deine alten Pläne">
              <Button variant="info">01.03-11.03 </Button>
              <Button variant="info">10.03-22.03 </Button>
              <Button variant="info">15.03-22.03 </Button>
              <Button variant="info">21.03-25.03 </Button>
            </Popover>
          }
        >
          <Button variant="secondary">Ältere Pläne</Button>
        </OverlayTrigger>
      </div>
    );
  }
}
