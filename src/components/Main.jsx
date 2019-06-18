import React, { Component } from 'react';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Stundenplan from './Praeferenzen/Stundenplan';
import Reservierung from './Reservierung/Reservierung';
import Algorithmus from './experimental/Algorithmus';
import Karte from './Karte/Karte';
import Login from './Login/Login';

function onAuthRequired({ history }) {
  history.push('/login');
}

export default class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Security
            issuer='https://dev-807143.oktapreview.com/oauth2/default'
            client_id='0oald1a5nwPHcFgbs0h7'
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}>
            <SecureRoute path='/praeferenzplanung' component={Stundenplan} />
            <SecureRoute path='/reservierung' component={Reservierung} />
            <SecureRoute path='/map' component={Karte} />
            <SecureRoute path='/experimental' component={Algorithmus} />
            <Route
              path='/login'
              render={() => <Login baseUrl='https://dev-807143.oktapreview.com' />}
            />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </Security>
        </Router>
      </div>
    );
  }
}
