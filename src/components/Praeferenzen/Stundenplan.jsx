import React, { Component } from "react";
import PraeferenzContainer from "./PraeferenzZelle";
import { Dropdown } from "react-bootstrap";

function TabellenZeile(props) {
  return (
    <tr>
      <th scope="row">
        {props.stunde}-{props.stunde + 1}
      </th>
      <PraeferenzContainer
        onClick={() => props.handleToggleFlag("mo", props.stunde)}
      />
      <PraeferenzContainer
        onClick={() => props.handleToggleFlag("di", props.stunde)}
      />
      <PraeferenzContainer
        onClick={() => props.handleToggleFlag("mi", props.stunde)}
      />
      <PraeferenzContainer
        onClick={() => props.handleToggleFlag("do", props.stunde)}
      />
      <PraeferenzContainer
        onClick={() => props.handleToggleFlag("fr", props.stunde)}
      />
    </tr>
  );
}

function ParkplatzDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Parkplatzpräferenz
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Eingangsparkplätze</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Reihe 1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Reihe 2</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Reihe 3</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Reihe 4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Reihe 5</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Reihe 6</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Reihe 7</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Reihe 8</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function Tabelle(props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Zeit</th>
          <th scope="col">Montag</th>
          <th scope="col">Dienstag</th>
          <th scope="col">Mittwoch</th>
          <th scope="col">Donnerstag</th>
          <th scope="col">Freitag</th>
        </tr>
      </thead>
      <tbody>
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={8} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={9} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={10} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={11} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={12} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={13} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={14} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={15} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={16} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={17} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={18} />
        <TabellenZeile handleToggleFlag={props.handleToggleFlag} stunde={19} />

        <tr>
          <th scope="row">Parkplatz</th>
          <td>
            <ParkplatzDropdown />
          </td>
          <td>
            <ParkplatzDropdown />
          </td>
          <td>
            <ParkplatzDropdown />
          </td>
          <td>
            <ParkplatzDropdown />
          </td>
          <td>
            <ParkplatzDropdown />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

class Stundenplan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flags: [
        { tag: "mo", stunde: 8, isToggled: false },
        { tag: "mo", stunde: 9, isToggled: false },
        { tag: "mo", stunde: 10, isToggled: false },
        { tag: "mo", stunde: 11, isToggled: false },
        { tag: "mo", stunde: 12, isToggled: false },
        { tag: "mo", stunde: 13, isToggled: false },
        { tag: "mo", stunde: 14, isToggled: false },
        { tag: "mo", stunde: 15, isToggled: false },
        { tag: "mo", stunde: 16, isToggled: false },
        { tag: "mo", stunde: 17, isToggled: false },
        { tag: "mo", stunde: 18, isToggled: false },
        { tag: "mo", stunde: 19, isToggled: false },

        { tag: "di", stunde: 8, isToggled: false },
        { tag: "di", stunde: 9, isToggled: false },
        { tag: "di", stunde: 10, isToggled: false },
        { tag: "di", stunde: 11, isToggled: false },
        { tag: "di", stunde: 12, isToggled: false },
        { tag: "di", stunde: 13, isToggled: false },
        { tag: "di", stunde: 14, isToggled: false },
        { tag: "di", stunde: 15, isToggled: false },
        { tag: "di", stunde: 16, isToggled: false },
        { tag: "di", stunde: 17, isToggled: false },
        { tag: "di", stunde: 18, isToggled: false },
        { tag: "di", stunde: 19, isToggled: false },

        { tag: "mi", stunde: 8, isToggled: false },
        { tag: "mi", stunde: 9, isToggled: false },
        { tag: "mi", stunde: 10, isToggled: false },
        { tag: "mi", stunde: 11, isToggled: false },
        { tag: "mi", stunde: 12, isToggled: false },
        { tag: "mi", stunde: 13, isToggled: false },
        { tag: "mi", stunde: 14, isToggled: false },
        { tag: "mi", stunde: 15, isToggled: false },
        { tag: "mi", stunde: 16, isToggled: false },
        { tag: "mi", stunde: 17, isToggled: false },
        { tag: "mi", stunde: 18, isToggled: false },
        { tag: "mi", stunde: 19, isToggled: false },

        { tag: "do", stunde: 8, isToggled: false },
        { tag: "do", stunde: 9, isToggled: false },
        { tag: "do", stunde: 10, isToggled: false },
        { tag: "do", stunde: 11, isToggled: false },
        { tag: "do", stunde: 12, isToggled: false },
        { tag: "do", stunde: 13, isToggled: false },
        { tag: "do", stunde: 14, isToggled: false },
        { tag: "do", stunde: 15, isToggled: false },
        { tag: "do", stunde: 16, isToggled: false },
        { tag: "do", stunde: 17, isToggled: false },
        { tag: "do", stunde: 18, isToggled: false },
        { tag: "do", stunde: 19, isToggled: false },

        { tag: "fr", stunde: 8, isToggled: false },
        { tag: "fr", stunde: 9, isToggled: false },
        { tag: "fr", stunde: 10, isToggled: false },
        { tag: "fr", stunde: 11, isToggled: false },
        { tag: "fr", stunde: 12, isToggled: false },
        { tag: "fr", stunde: 13, isToggled: false },
        { tag: "fr", stunde: 14, isToggled: false },
        { tag: "fr", stunde: 15, isToggled: false },
        { tag: "fr", stunde: 16, isToggled: false },
        { tag: "fr", stunde: 17, isToggled: false },
        { tag: "fr", stunde: 18, isToggled: false },
        { tag: "fr", stunde: 19, isToggled: false }
      ]
    };

    this.handleToggleFlag = this.handleToggleFlag.bind(this);
  }

  handleToggleFlag(t, s) {
    this.setState(currentState => {
      const modifiedFlag = currentState.flags
        .filter(flag => flag.tag === t && flag.stunde === s)
        .map(flag => (flag.isToggled = !flag.isToggled));

      return {
        modifiedFlag
      };
    });
  }

  render() {
    return (
      <div>
        <Tabelle
          flags={this.state.flags}
          handleToggleFlag={this.handleToggleFlag}
        />
      </div>
    );
  }
}

export default Stundenplan;
