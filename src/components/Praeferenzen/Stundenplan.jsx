import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class PraeferenzZelle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };
  }

  handleToggleContainer = () => {
    if (
      this.props.flagsAllowed > 0 ||
      (this.props.flagsAllowed === 0 && this.state.isToggled === true)
    ) {
      this.setState({ isToggled: !this.state.isToggled });
      this.props.onClick();
    } else if (this.props.flagsAllowed === 0 && this.state.isToggled === false) return;
  };

  render() {
    const styles = reactCSS({
      default: {
        noFlags: {
          marginTop: '8px',
          color: `rgba(70,70,70,0.3)`,
        },
        container: {
          height: '48px',
          borderRadius: '2px',
          background: `rgba(70,70,70,1)`,
        },
        text: {
          textAlign: 'center',
          margin: '0',
          color: 'white',
          paddingTop: '10px',
          cursor: 'default',
        },
      },
    });

    if (this.props.flagsAllowed === 40) {
      return (
        <td onClick={this.handleToggleContainer} style={{ margin: '0', padding: '0' }}>
          <div align='center'>
            <p style={styles.noFlags}>Hier klicken</p>
          </div>
        </td>
      );
    }

    return (
      <td onClick={this.handleToggleContainer} style={{ margin: '0', padding: '0' }}>
        <div>
          {this.state.isToggled ? (
            <div style={styles.container}>
              <p style={styles.text}>Präferenz</p>
            </div>
          ) : null}
        </div>
      </td>
    );
  }
}

class TabellenZeile extends Component {
  render() {
    return (
      <tr>
        <th scope='row'>
          {this.props.stunde}-{this.props.stunde + 1}
        </th>
        <PraeferenzZelle
          onClick={() => this.props.handleToggleFlag('mo', this.props.stunde)}
          flagsAllowed={this.props.flagsAllowed}
        />
        <PraeferenzZelle
          onClick={() => this.props.handleToggleFlag('di', this.props.stunde)}
          flagsAllowed={this.props.flagsAllowed}
        />
        <PraeferenzZelle
          onClick={() => this.props.handleToggleFlag('mi', this.props.stunde)}
          flagsAllowed={this.props.flagsAllowed}
        />
        <PraeferenzZelle
          onClick={() => this.props.handleToggleFlag('do', this.props.stunde)}
          flagsAllowed={this.props.flagsAllowed}
        />
        <PraeferenzZelle
          onClick={() => this.props.handleToggleFlag('fr', this.props.stunde)}
          flagsAllowed={this.props.flagsAllowed}
        />
      </tr>
    );
  }
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
    const stundenZeilen = [];
    const parkplatzDropdowns = [];
    const thead = (
      <thead>
        <tr>
          <th scope='col'>Zeit</th>
          <th scope='col'>
            <div align='center'>Montag</div>
          </th>
          <th scope='col'>
            <div align='center'>Dienstag</div>
          </th>
          <th scope='col'>
            <div align='center'>Mittwoch</div>
          </th>
          <th scope='col'>
            <div align='center'>Donnerstag</div>
          </th>
          <th scope='col'>
            <div align='center'>Freitag</div>
          </th>
        </tr>
      </thead>
    );

    const tbody = (
      <tbody>
        {stundenZeilen}
        <tr>
          <th scope='row'>Parkplatz</th>
          {parkplatzDropdowns}
        </tr>
      </tbody>
    );

    for (var i = 8; i <= 19; i++) {
      stundenZeilen.push(
        <TabellenZeile
          key={i}
          handleToggleFlag={this.props.handleToggleFlag}
          stunde={i}
          flagsAllowed={this.props.flagsAllowed}
        />,
      );
    }

    for (var j = 0; j <= 4; j++) {
      parkplatzDropdowns.push(
        <td key={j}>
          <ParkplatzDropdown
            parkPrefs={this.props.parkPrefs[j]}
            handleSelectParkPref={this.props.handleSelectParkPref}
          />
        </td>,
      );
    }

    return (
      <table className='table table-bordered'>
        {thead}
        {tbody}
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
      currentYear: '',
      currentWeek: '',
      matnr: '',
      parkwert: '',
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
          flag.isToggled ? currentState.flagsAllowed++ : currentState.flagsAllowed--;
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

  /**
   * Hilfsfunktion um für die States die aktuelle Woche
   * und das aktuelle Jahr zu bekommen
   */
  getWeekAndYear(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [weekNo, d.getUTCFullYear()];
  }

  componentDidMount() {
    const weekAndYear = this.getWeekAndYear(new Date());

    this.setState({
      currentWeek: weekAndYear[0],
      currentYear: weekAndYear[1],
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

        <div className='SaveFoot'>
          <Button variant='success'>Speichern</Button>
        </div>
      </div>
    );
  }
}

export default Stundenplan;
