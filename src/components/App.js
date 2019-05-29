import React, { Component } from 'react';
import NavBar from './Navigation/NavBar';
import Main from './Praeferenzen/Main';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
