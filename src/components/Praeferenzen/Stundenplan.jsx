import React, { Component } from "react";
import reactCSS from "reactcss";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

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
    const { stunde, user, counter } = this.props;

    const setCellState = (user, counter) => {
      const list = user.map((item, j) => {});
    };

    return (
      <tr>
        <td>
          {stunde}-{stunde + 1}
        </td>
        <td onClick={() => setCellState(user.montag, counter)}>
          <div>
            {user.montag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td>
          <div>
            {user.dienstag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td>
          <div>
            {user.mittwoch[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td>
          <div>
            {user.donnerstag[counter].selected ? (
              <div style={styles.container}>
                <p style={styles.text}>Präferenz</p>
              </div>
            ) : null}
          </div>
        </td>
        <td>
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
class Tabelle extends Component {
  render() {
    const { user } = this.props;
    const tableRow = [];

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

    const tbody = <tbody>{tableRow}</tbody>;

    //Generiert für jeden tag die Zellen
    for (let i = 8; i <= 17; i++) {
      tableRow.push(
        <TableRow key={i} stunde={i} user={user} counter={i - 8} />
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

        parkPrefs: [
          { pref: 0 },
          { pref: 1 },
          { pref: 2 },
          { pref: 3 },
          { pref: 4 }
        ],

        flagsAllowed: 40,
        matnr: "",
        parkwert: ""
      },
      isLoading: false
    };
  }

  //Nachdem Komponente geladen ist, hol daten aus der DB
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + QUERY)
      .then(res => res.json())
      .then(data => this.setState({ user: data, isLoading: false }))
      .catch(e => console.log(e));
  }

  render() {
    //Scope User von this.state raus
    let { user } = this.state;

    //CSS für Stundenplan Komponente
    const styles = reactCSS({
      default: {
        stundenplan: {
          width: "100vw" //breite des Stundenplans - 1vw = 1% Viewport width
        },
        schrift: {}
      }
    });

    return (
      <div>
        <h4>
          {user.name} {user.nachname} Parkwert: {user.parkwert}
        </h4>
        {this.state.isLoading ? (
          <Spinner animation="border" variant="dark" />
        ) : (
          <div style={styles.stundenplan}>
            {" "}
            <Tabelle user={user} />
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
