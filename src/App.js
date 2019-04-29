import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTag from './components/InputTag';
import Modal from './components/Modal/Modal';

import withBorder from './components/HOC/withBorder';


class App extends Component {

  static init() {

    App.box = document.getElementsByClassName('box')[0]

    App.box.addEventListener("dragstart", App.dragstart)
    App.box.addEventListener("dragend", App.dragend)

    const containers = document.getElementsByClassName('holder')

    for(const container of containers) {
      container.addEventListener("dragover", App.dragover)
      container.addEventListener("dragenter", App.dragenter)
      container.addEventListener("dragleave", App.dragleave)
      container.addEventListener("drop", App.drop)
    }
  }

  static dragstart() {
    this.className += " held"
  
    setTimeout(()=>this.className="invisible", 0)
  }

  static dragend() {
    this.className = "box"
  }

  static dragover(e) {
    e.preventDefault()
  }

  static dragenter(e) {
    e.preventDefault()
    this.className += " hovered"
  }

  static dragleave() {
    this.className = "holder"
  }

  static drop() {
    this.className = "holder"
    this.append(App.box)
  }




  state = {
    show: false,
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  render() {
    let WithBorderInput = withBorder (InputTag);

    return (
      <div className="App">
        {/* <WithBorderInput placeholder="press enter/space to + tag" /> */}

        <input type="button"
          onClick={this.showModal}
          value="Show Modal" />

        <Modal onClose={this.showModal} show={this.state.show}>
              This message is from Modal!
        </Modal>

        
      </div>
    );
  }
}
document.addEventListener("DOMContentLoaded", App.init)

export default App;
