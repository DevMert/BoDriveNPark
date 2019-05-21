import React, { Component } from 'react';
import PraeferenzZelle from './PraeferenzZelle';
import { Dropdown } from 'react-bootstrap';

function TabellenZeile(props) {
  return (
    <tr>
      <th scope='row'>
        {props.stunde}-{props.stunde + 1}
      </th>
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag('mo', props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag('di', props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag('mi', props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag('do', props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
      <PraeferenzZelle
        onClick={() => props.handleToggleFlag('fr', props.stunde)}
        flagsAllowed={props.flagsAllowed}
      />
    </tr>
  );
}

class ParkplatzDropdown extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          {this.props.parkPrefs.pref}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onSelect={() =>
              this.props.handleSelectParkPref(this.props.parkPrefs.tag, 'Eingangsparkplatz')
            }>
            Eingangsparkplatz
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() =>
              this.props.handleSelectParkPref(this.props.parkPrefs.tag, 'RUB-Parkplatz')
            }>
            RUB-Parkplatz
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() =>
              this.props.handleSelectParkPref(this.props.parkPrefs.tag, 'Hauptparkplatz')
            }>
            Hauptparkplatz
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() =>
              this.props.handleSelectParkPref(this.props.parkPrefs.tag, 'E-Parkplatz')
            }>
            E-Parkplatz
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

class Tabelle extends Component {
  render() {
    const tabellenzeilen = [];
    const dropdowns = [];
    for (var i = 8; i <= 19; i++) {
      tabellenzeilen.push(
        <TabellenZeile
          key={i}
          handleToggleFlag={this.props.handleToggleFlag}
          stunde={i}
          flagsAllowed={this.props.flagsAllowed}
        />,
      );
    }
    for (var i = 0; i <= 4; i++) {
      dropdowns.push(
        <td key={i}>
          <ParkplatzDropdown
            parkPrefs={this.props.parkPrefs[i]}
            handleSelectParkPref={this.props.handleSelectParkPref}
          />
        </td>,
      );
    }
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Zeit</th>
            <th scope='col'>Montag</th>
            <th scope='col'>Dienstag</th>
            <th scope='col'>Mittwoch</th>
            <th scope='col'>Donnerstag</th>
            <th scope='col'>Freitag</th>
          </tr>
        </thead>
        <tbody>
          {tabellenzeilen}
          <tr>
            <th scope='row'>Parkplatz</th>
            {dropdowns}
          </tr>
        </tbody>
      </table>
    );
  }
}

class Stundenplan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flags: [
        { tag: 'mo', stunde: 8, isToggled: false },
        { tag: 'mo', stunde: 9, isToggled: false },
        { tag: 'mo', stunde: 10, isToggled: false },
        { tag: 'mo', stunde: 11, isToggled: false },
        { tag: 'mo', stunde: 12, isToggled: false },
        { tag: 'mo', stunde: 13, isToggled: false },
        { tag: 'mo', stunde: 14, isToggled: false },
        { tag: 'mo', stunde: 15, isToggled: false },
        { tag: 'mo', stunde: 16, isToggled: false },
        { tag: 'mo', stunde: 17, isToggled: false },
        { tag: 'mo', stunde: 18, isToggled: false },
        { tag: 'mo', stunde: 19, isToggled: false },

        { tag: 'di', stunde: 8, isToggled: false },
        { tag: 'di', stunde: 9, isToggled: false },
        { tag: 'di', stunde: 10, isToggled: false },
        { tag: 'di', stunde: 11, isToggled: false },
        { tag: 'di', stunde: 12, isToggled: false },
        { tag: 'di', stunde: 13, isToggled: false },
        { tag: 'di', stunde: 14, isToggled: false },
        { tag: 'di', stunde: 15, isToggled: false },
        { tag: 'di', stunde: 16, isToggled: false },
        { tag: 'di', stunde: 17, isToggled: false },
        { tag: 'di', stunde: 18, isToggled: false },
        { tag: 'di', stunde: 19, isToggled: false },

        { tag: 'mi', stunde: 8, isToggled: false },
        { tag: 'mi', stunde: 9, isToggled: false },
        { tag: 'mi', stunde: 10, isToggled: false },
        { tag: 'mi', stunde: 11, isToggled: false },
        { tag: 'mi', stunde: 12, isToggled: false },
        { tag: 'mi', stunde: 13, isToggled: false },
        { tag: 'mi', stunde: 14, isToggled: false },
        { tag: 'mi', stunde: 15, isToggled: false },
        { tag: 'mi', stunde: 16, isToggled: false },
        { tag: 'mi', stunde: 17, isToggled: false },
        { tag: 'mi', stunde: 18, isToggled: false },
        { tag: 'mi', stunde: 19, isToggled: false },

        { tag: 'do', stunde: 8, isToggled: false },
        { tag: 'do', stunde: 9, isToggled: false },
        { tag: 'do', stunde: 10, isToggled: false },
        { tag: 'do', stunde: 11, isToggled: false },
        { tag: 'do', stunde: 12, isToggled: false },
        { tag: 'do', stunde: 13, isToggled: false },
        { tag: 'do', stunde: 14, isToggled: false },
        { tag: 'do', stunde: 15, isToggled: false },
        { tag: 'do', stunde: 16, isToggled: false },
        { tag: 'do', stunde: 17, isToggled: false },
        { tag: 'do', stunde: 18, isToggled: false },
        { tag: 'do', stunde: 19, isToggled: false },

        { tag: 'fr', stunde: 8, isToggled: false },
        { tag: 'fr', stunde: 9, isToggled: false },
        { tag: 'fr', stunde: 10, isToggled: false },
        { tag: 'fr', stunde: 11, isToggled: false },
        { tag: 'fr', stunde: 12, isToggled: false },
        { tag: 'fr', stunde: 13, isToggled: false },
        { tag: 'fr', stunde: 14, isToggled: false },
        { tag: 'fr', stunde: 15, isToggled: false },
        { tag: 'fr', stunde: 16, isToggled: false },
        { tag: 'fr', stunde: 17, isToggled: false },
        { tag: 'fr', stunde: 18, isToggled: false },
        { tag: 'fr', stunde: 19, isToggled: false },
      ],

      parkPrefs: [
        { tag: 'mo', pref: 'Parkplatzpräferenz' },
        { tag: 'di', pref: 'Parkplatzpräferenz' },
        { tag: 'mi', pref: 'Parkplatzpräferenz' },
        { tag: 'do', pref: 'Parkplatzpräferenz' },
        { tag: 'fr', pref: 'Parkplatzpräferenz' },
      ],

      flagsAllowed: 40,
    };

    this.handleToggleFlag = this.handleToggleFlag.bind(this);
    this.handleSelectParkPref = this.handleSelectParkPref.bind(this);
  }
  /**
   * Diese Funktion dient zum an und austoggeln der
   * Flags im state dieser Klasse
   *
   * @param {string} t
   * Der Tag in dem Die Flag getoggled werden soll
   * @param {integer} s
   * Die Stunde in der die Flag getoggled werden soll
   * @public
   */
  handleToggleFlag(t, s) {
    this.setState(currentState => {
      const modifiedFlag = currentState.flags
        .filter(flag => flag.tag === t && flag.stunde === s)
        .map(flag => {
          flag.isToggled ? (currentState.flagsAllowed += 1) : (currentState.flagsAllowed -= 1);
          flag.isToggled = !flag.isToggled;
        });

      return {
        modifiedFlag,
      };
    });
  }

  /**
   * Diese Funktion dient zum Wählen der Parkplatzpräferenz,
   * welche im state dieser Klasse gespeichert wird
   * @param {string} t
   * Der Tag für den die Präferenz gewählt werden soll.
   * @param {string} p
   *
   */
  handleSelectParkPref(t, p) {
    this.setState(currentState => {
      const modifiedPref = currentState.parkPrefs
        .filter(currPref => currPref.tag === t)
        .map(currPref => (currPref.pref = p));

      return {
        modifiedPref,
      };
    });
  }

  render() {
    return (
      <div>
        <div align='center'>
          <p>Erlaubte Reservierungen: {this.state.flagsAllowed}</p>
        </div>
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
