import React, { Component } from "react";

import { OverlayTrigger, Button, Popover } from "react-bootstrap";

import "./News.css";

export default class timetable extends Component {
  render() {
    const popover = (
      <Popover id="popover-basic" title="Deine alten Pläne">
        <Button className="btn-info">KW 14 2019</Button>
        <Button variant="info">KW 15 2019</Button>
        <Button variant="info">KW 16 2019</Button>
      </Popover>
    );

    return (
      <div class="main">
        <h2>Timetable</h2>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Alte Pläne aufrufen</Button>
        </OverlayTrigger>
      </div>
    );
  }
}
