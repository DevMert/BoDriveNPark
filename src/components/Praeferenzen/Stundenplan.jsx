import React, { Component } from "react";
import reactCSS from "reactcss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//React Bootstrap
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

//DB API
const API = "http://localhost:8080/";
const QUERY = "users/71237112"; //noch statisch - muss man mit einer Session bearbeiten

//muss ausgebaut werden -> Verändere den State, bei click auf Speichern -> Schreibe in die DB

class TableRow extends Component {
  render() {
    const styles = reactCSS({
      default: {
        container: {
          height: "auto",
          background: `green`
        },
        text: {
          textAlign: "center",
          margin: "0",
          color: "white",
          paddingTop: "10px",
          cursor: "default"
        },
        false: {
          backgroundColor: "gray",
          height: "50px"
        }
      }
    });
    const { stunde, user, counter, handleClick } = this.props;

    return (
      <tr>
        <td>
          {stunde}-{stunde + 1}
        </td>
        <td onClick={() => handleClick("montag", counter)}>
          <div>
            {user.montag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td onClick={() => handleClick("dienstag", counter)}>
          <div>
            {user.dienstag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td onClick={() => handleClick("mittwoch", counter)}>
          <div>
            {user.mittwoch[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td onClick={() => handleClick("donnerstag", counter)}>
          <div>
            {user.donnerstag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td onClick={() => handleClick("freitag", counter)}>
          <div>
            {user.freitag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
      </tr>
    );
  }
}
class ParkplatzDropdown extends Component {
  render() {
    const {
      handleParkPref,
      parkPrefs: { tag, pref }
    } = this.props;

    return (
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {pref}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onSelect={() => handleParkPref(tag, "Eingangsparkplatz")}
          >
            Eingangsparkplatz
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => handleParkPref(tag, "RUB-Parkplatz")}>
            RUB-Parkplatz
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => handleParkPref(tag, "Hauptparkplatz")}>
            Hauptparkplatz
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => handleParkPref(tag, "E-Parkplatz")}>
            E-Parkplatz
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => handleParkPref(tag, "Alle HS-parkplätze")}
          >
            <b>Alle HS-parkplätze</b>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

class Tabelle extends Component {
  render() {
    const { user, handleClick, handleParkPref } = this.props;
    const tableRow = [];
    const parkplatzDropdowns = [];

    // Stundenplan header bereich
    const thead = (
      <thead>
        <tr>
          <th scope="col">Zeit</th>
          <th scope="col">
            <div align="center">Montag</div>
          </th>
          <th scope="col">
            <div align="center">Dienstag</div>
          </th>
          <th scope="col">
            <div align="center">Mittwoch</div>
          </th>
          <th scope="col">
            <div align="center">Donnerstag</div>
          </th>
          <th scope="col">
            <div align="center">Freitag</div>
          </th>
        </tr>
      </thead>
    );

    const tbody = (
      <tbody>
        {tableRow}
        <tr>
          <th scope="row">Parkplatz</th>
          {parkplatzDropdowns}
        </tr>
      </tbody>
    );

    for (var j = 0; j <= 4; j++) {
      parkplatzDropdowns.push(
        <td key={j}>
          <ParkplatzDropdown
            parkPrefs={user.parkPrefs[j]}
            handleParkPref={this.props.handleParkPref}
          />
        </td>
      );
    }

    //Generiert für jeden tag die Zellen
    for (let i = 8; i <= 17; i++) {
      tableRow.push(
        <TableRow
          key={i}
          stunde={i}
          user={user}
          counter={i - 8}
          handleClick={handleClick}
        />
      );
      // key: jede zelle muss ein unique key haben
      // stunde: links im Plan die Stunden anzeigen
      // user: schicke daten vom Server zu -> fetch data
      // counter: um zu prüfen ob in stunde {counter} etwas ausgewählt wurde
    }

    return (
      <div>
        <Table striped bordered hover>
          {thead}
          {tbody}
        </Table>
      </div>
    );
  }
}

class Stundenplan extends Component {
  constructor(props) {
    super(props);

    //this.state aufgebaut wie in der DB
    this.state = {
      user: {
        montag: [
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false }
        ],
        dienstag: [
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false }
        ],
        mittwoch: [
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false }
        ],
        donnerstag: [
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false }
        ],
        freitag: [
          { std: 0, selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false }
        ],

        parkPrefs: [
          { tag: "mo", pref: "" },
          { tag: "di", pref: "" },
          { tag: "mi", pref: "" },
          { tag: "do", pref: "" },
          { tag: "fr", pref: "" }
        ],

        limit: 40,
        matNr: 0,
        parkwert: 0
      },
      isLoading: false
    };
  }

  //Nachdem Komponente geladen ist, hol daten aus der DB
  componentWillUnmount() {}

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + QUERY)
      .then(res => res.json())
      .then(data => this.setState({ user: data, isLoading: false }))
      .catch(e => console.log(e));
  }

  // handleToggleFlag(t, s) {
  //   this.setState(currentState => {
  //     const modifiedFlag = currentState.flags
  //       .filter(flag => flag.tag === t && flag.stunde === s)
  //       .map(flag => (flag.isToggled = !flag.isToggled));

  //     return {
  //       modifiedFlag
  //     };
  //   });
  // }
  handleParkPref = (tag, platz) => {
    console.log("Hello WOrld");
    console.log(tag, platz);
    // this.setState(currentState => {
    //   const modifiedPref = currentState.parkPrefs
    //     .filter(currPref => currPref.tag === t)
    //     .map(currPref => (currPref.pref = p));

    //   return {
    //     modifiedPref
    //   };
    // });
  };

  handleClick = (tag, std) => {
    let reverse;
    switch (tag) {
      case "montag":
        let mo = this.state.user.montag; // Tag aus this.state
        reverse = !this.state.user.montag[std].selected; //True/false wechseln
        mo[std].selected = reverse; //Wechsel den status der Zelle

        this.setState({ montag: mo });
        break;
      case "dienstag":
        let di = this.state.user.dienstag;
        reverse = !this.state.user.dienstag[std].selected;

        di[std].selected = reverse;
        this.setState({ dienstag: di });
        break;
      case "mittwoch":
        let mi = this.state.user.mittwoch;
        reverse = !this.state.user.mittwoch[std].selected;

        mi[std].selected = reverse;
        this.setState({ mittwoch: mi });
        break;
      case "donnerstag":
        let donn = this.state.user.donnerstag;
        reverse = !this.state.user.donnerstag[std].selected;

        donn[std].selected = reverse;
        this.setState({ donnerstag: donn });
        break;
      case "freitag":
        let fr = this.state.user.freitag;
        reverse = !this.state.user.freitag[std].selected;

        fr[std].selected = reverse;
        this.setState({ freitag: fr });
        break;
    }
  };

  writeToDB = () => {
    let user = this.state.user;
    console.log(user);

    fetch(API + QUERY, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", JSON.stringify(response)));

    //Toast Notification
    toast(
      this.state.user.name +
        " " +
        this.state.user.nachname +
        " erfolgreich geupdatet!"
    );
  };

  render() {
    //Scope User von this.state raus
    let { user } = this.state;
    let container;
    //CSS für Stundenplan Komponente
    const styles = reactCSS({
      default: {
        stundenplan: {
          width: "100vw" //breite des Stundenplans - 1vw = 1% Viewport width
        },
        schrift: {},
        spinner: {
          position: "fixed" /* or absolute */,
          top: "50%",
          left: "50%"
        }
      }
    });
    console.log(this.state);
    return (
      <div>
        {this.state.isLoading ? (
          <div style={styles.spinner}>
            {" "}
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <div style={styles.stundenplan}>
            <h4>
              {user.name} {user.nachname} Parkwert: {user.parkwert}
            </h4>{" "}
            <Tabelle
              user={this.state.user}
              handleClick={this.handleClick}
              handleParkPref={this.handleParkPref}
            />
            <div className="SaveFoot">
              <Button variant="success" onClick={() => this.writeToDB()}>
                Speichern
              </Button>
              <Button variant="primary">Start Algo</Button>
            </div>
            <div>
              <ToastContainer />
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

export default Stundenplan;

// const USER_DATA = {              // könnten daten aus einer JSON sein oder DB sein
//   name: 'Timur Aktas',
//   img: 'bild.img',
//   username: 'timuruserName'
// }

// function Badge(){
//   return(
//       <div>
//       <img src={props.user.img} />                    // user.foo weil unten user=USER_DATA gesetzt wird
//       <h1> Name: {props.user.name}</h1>
//       <h3> username: {props.user.username} </h3>
//       </div>
//   )
// }

// reactDOM.render(
//   <Badge user={USER_DATA} />      //funktion aufrufen mit daten
//   document.getElementById('app')
// )
