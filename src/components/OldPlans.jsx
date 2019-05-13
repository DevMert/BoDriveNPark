import React, { Component } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

export default class oldPlans extends Component {
  render() {
    return (
      <div style={{ marginLeft: "550px", marginRight: "550px" }}>
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={
            <Popover id="popover-basic" title="Deine alten Pläne">
              <Button variant="info">01.03-11.03 </Button>
              <Button variant="info">10.03-22.03 </Button>
              <Button variant="info">15.03-22.03 </Button>
              <Button variant="info">21.03-25.03 </Button>
              <Button variant="info">26.03-31.03 </Button>
              <Button variant="info">02.04-07.04 </Button>
            </Popover>
          }
        >
          <Button variant="secondary"> Ältere Pläne</Button>
        </OverlayTrigger>
        <span className="sm-2"> 13.05 - 17.05 </span>
      </div>
    );
  }
}
