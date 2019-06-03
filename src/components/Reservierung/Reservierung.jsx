import React, { Component } from "react";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "./Reservierung.css";

export default class Reservierung extends Component {
  state = {};
  render() {
    return (
      <div>
        <CardDeck className="cDeck1">
          <Card>
            <Card.Header as="h5">Montag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref"> Präferenz:</div>
                <div className="Parkplatz">Parkplatz:</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div className="Rueckmeldung">Rückmeldung:</div>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header as="h5">Dienstag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref"> Präferenz:</div>
                <div className="Parkplatz">Parkplatz:</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div className="Rueckmeldung">Rückmeldung:</div>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header as="h5">Mittwoch</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref"> Präferenz:</div>
                <div className="Parkplatz">Parkplatz:</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div className="Rueckmeldung">Rückmeldung:</div>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck className="cDeck2">
          <Card>
            <Card.Header as="h5">Donnerstag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref"> Präferenz:</div>
                <div className="Parkplatz">Parkplatz:</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div className="Rueckmeldung">Rückmeldung:</div>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header as="h5">Freitag</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="Pref"> Präferenz:</div>
                <div className="Parkplatz">Parkplatz:</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div className="Rueckmeldung">Rückmeldung:</div>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
