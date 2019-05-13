import React, { Component } from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";

export default class oldPlans extends Component {
  render() {
    return (
      <div>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={
            <Popover id="popover-basic" title="Deine alten Pläne">
              <Button className="btn-info">KW 14 2019</Button>
              <Button variant="info">KW 15 2019</Button>
              <Button variant="info">KW 16 2019</Button>
            </Popover>
          }
        >
          <Button variant="success">Alte Pläne aufrufen</Button>
        </OverlayTrigger>
      </div>
    );
  }
}
