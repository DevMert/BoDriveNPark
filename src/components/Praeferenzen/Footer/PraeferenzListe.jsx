import React, { Component } from "react";

import { DropdownButton, Dropdown } from "react-bootstrap";

class PraeferenzListe extends Component {
  render() {
    return (
      <div>
        <DropdownButton
          drop="right"
          variant="secondary"
          title={` Präferenz auswählen `}
          id={`dropdown-button-drop-right`}
          key="right"
        >
          <Dropdown.Item eventKey="1">Reihe 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Reihe 2</Dropdown.Item>
          <Dropdown.Item eventKey="3">Reihe 3</Dropdown.Item>
          <Dropdown.Item eventKey="4">Reihe 4</Dropdown.Item>
          <Dropdown.Item eventKey="5">Reihe 5</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default PraeferenzListe;