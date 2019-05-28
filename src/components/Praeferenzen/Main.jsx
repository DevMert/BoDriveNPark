import React, { Component } from 'react';

import KWSwitch from './KWSwitch';
import Stundenplan from './Stundenplan';

export default class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Stundenplan />
      </div>
    );
  }
}
