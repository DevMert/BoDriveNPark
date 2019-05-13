import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>;

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to BoDrive'n'Park</h2>
          <Link to="/timetable">
            <Button bsStyle="primary">Erstelle jetzt deinen Park Plan</Button>
          </Link>
        </Jumbotron>
      </Grid>
    );
  }
}
