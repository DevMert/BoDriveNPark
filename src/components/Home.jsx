import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

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
    )
  }
}
