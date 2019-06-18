import React, { Component } from "react";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "./Reservierung.css";

const API = "http://localhost:8080/";
const QUERY = "parkplatz/71237112";

export default class Reservierung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        matrNr: 1,
        parkplatz: "",
        montag: {
          Von: 0,
          Bis: 0
        },
        dienstag: {
          Von: 0,
          Bis: 0
        },
        mittwoch: {
          Von: 0,
          Bis: 0
        },
        donnerstag: {
          Von: 0,
          Bis: 0
        },
        freitag: {
          Von: 0,
          Bis: 0
        }
      }
    };
  }
  componentWillUnmount() {}
  componentDidMount() {
    fetch(API + QUERY)
      .then(res => res.json())
      .then(data => this.setState({ user: data }))
      .catch(e => console.log(e));
  }

  render() {
    let { user } = this.state;

    return (
      <div>
        <CardDeck className="cDeck1">
          <Card>
            <Card.Header as="h5">Montag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref">
                  <b>Präferenz</b>: {user.montag.von} bis {user.montag.bis} Uhr
                </div>
                <div className="Parkplatz">
                  <b> Parkplatz</b>: {user.montag.parkplatz}
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div />
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header as="h5">Dienstag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref">
                  {" "}
                  <b>Präferenz:</b> {user.dienstag.von} bis {user.dienstag.bis}{" "}
                  Uhr
                </div>

                <div className="Parkplatz">
                  <b> Parkplatz</b>: {user.dienstag.parkplatz}
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" />
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header as="h5">Mittwoch</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref">
                  <b>Präferenz</b>: {user.mittwoch.von} bis {user.mittwoch.bis}{" "}
                  Uhr
                </div>

                <div className="Parkplatz">
                  <b> Parkplatz</b>: {user.mittwoch.parkplatz}
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" />
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck className="cDeck2">
          <Card>
            <Card.Header as="h5">Donnerstag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref">
                  <b>Präferenz</b>: {user.donnerstag.von} bis{" "}
                  {user.donnerstag.bis} Uhr
                </div>
                <div />
                <div className="Parkplatz">
                  <b> Parkplatz</b>: {user.donnerstag.parkplatz}
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" />
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header as="h5">Freitag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref">
                  <b>Präferenz</b>: {user.freitag.von} bis {user.freitag.bis}{" "}
                  Uhr
                </div>

                <div className="Parkplatz">
                  <b> Parkplatz</b>: {user.freitag.parkplatz}
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" />
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
