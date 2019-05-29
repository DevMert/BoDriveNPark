import React, { Component } from 'react';

import Stundenplan from './Stundenplan';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reservierung from '../Reservierung/Reservierung';
import Karte from '../Karte/Karte';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/praeferenzplanung' component={Stundenplan} />
          <Route path='/reservierung' component={Reservierung} />
          <Route path='/map' component={Karte} />
        </Router>
      </div>
    );
  }
}
