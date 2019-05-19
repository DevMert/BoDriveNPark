import React, { Component } from "react";
import PraeferenzZelle from "./PraeferenzZelle";
import { Dropdown } from "react-bootstrap";

function TabellenZeile(props) {
  return (
    <tr>
      <th scope="row">
        {props.stunde}-{props.stunde + 1}
      </th>
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag("mo", props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag("di", props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag("mi", props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag("do", props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag("fr", props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
    </tr>
  );
}

function ParkplatzDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {props.parkPrefs.pref}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onSelect={() =>
            props.handleSelectParkPref(props.parkPrefs.tag, "Eingangsparkplatz")
          }
        >
          Eingangsparkplatz
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() =>
            props.handleSelectParkPref(props.parkPrefs.tag, "RUB-Parkplatz")
          }
        >
          RUB-Parkplatz
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() =>
            props.handleSelectParkPref(props.parkPrefs.tag, "Hauptparkplatz")
          }
        >
          Hauptparkplatz
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={() =>
            props.handleSelectParkPref(props.parkPrefs.tag, "E-Parkplatz")
          }
        >
          E-Parkplatz
        </Dropdown.Item>
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
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={8}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={9}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={10}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={11}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={12}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={13}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={14}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={15}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={16}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={17}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={18}
          flagsAllowed={props.flagsAllowed}
        />
        <TabellenZeile
          handleToggleFlag={props.handleToggleFlag}
          stunde={19}
          flagsAllowed={props.flagsAllowed}
        />

        <tr>
          <th scope="row">Parkplatz</th>
          <td>
            <ParkplatzDropdown
              parkPrefs={props.parkPrefs[0]}
              handleSelectParkPref={props.handleSelectParkPref}
            />
          </td>
          <td>
            <ParkplatzDropdown
              parkPrefs={props.parkPrefs[1]}
              handleSelectParkPref={props.handleSelectParkPref}
            />
          </td>
          <td>
            <ParkplatzDropdown
              parkPrefs={props.parkPrefs[2]}
              handleSelectParkPref={props.handleSelectParkPref}
            />
          </td>
          <td>
            <ParkplatzDropdown
              parkPrefs={props.parkPrefs[3]}
              handleSelectParkPref={props.handleSelectParkPref}
            />
          </td>
          <td>
            <ParkplatzDropdown
              parkPrefs={props.parkPrefs[4]}
              handleSelectParkPref={props.handleSelectParkPref}
            />
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
      ],

      parkPrefs: [
        { tag: "mo", pref: "Parkplatzpräferenz" },
        { tag: "di", pref: "Parkplatzpräferenz" },
        { tag: "mi", pref: "Parkplatzpräferenz" },
        { tag: "do", pref: "Parkplatzpräferenz" },
        { tag: "fr", pref: "Parkplatzpräferenz" }
      ],

      flagsAllowed: 40
    };

    this.handleToggleFlag = this.handleToggleFlag.bind(this);
    this.handleSelectParkPref = this.handleSelectParkPref.bind(this);
  }

  handleToggleFlag(t, s) {
    this.setState(currentState => {
      const modifiedFlag = currentState.flags
        .filter(flag => flag.tag === t && flag.stunde === s)
        .map(flag => {
          flag.isToggled
            ? (currentState.flagsAllowed += 1)
            : (currentState.flagsAllowed -= 1);
          flag.isToggled = !flag.isToggled;
        });

      return {
        modifiedFlag
      };
    });
  }

  handleSelectParkPref(t, p) {
    this.setState(currentState => {
      const modifiedPref = currentState.parkPrefs
        .filter(currPref => currPref.tag === t)
        .map(currPref => (currPref.pref = p));

      return {
        modifiedPref
      };
    });
  }

  render() {
    return (
      <div>
        <Tabelle
          flags={this.state.flags}
          handleToggleFlag={this.handleToggleFlag}
          parkPrefs={this.state.parkPrefs}
          handleSelectParkPref={this.handleSelectParkPref}
          flagsAllowed={this.state.flagsAllowed}
        />
      </div>
    );
  }
}

export default Stundenplan;
