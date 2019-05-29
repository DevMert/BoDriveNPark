import React, { Component } from 'react';
import nutzer from '../../samples/users';

class Reservierung extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getUsers = () => {
    let user = nutzer.users.filter(u => u.matnr === 6);
    user = user[0];
    console.log(user.flags);
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Load</button>
      </div>
    );
  }
}

export default Reservierung;
