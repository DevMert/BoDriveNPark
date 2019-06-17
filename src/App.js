import React, { Component } from "react";
import NavBar from "./components/Navigation/NavBar";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
