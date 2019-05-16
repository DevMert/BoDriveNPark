import React, { Component } from "react";
import Fachzelle from './Fachzelle'


function Tabelle(props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Zeit</th>
          <th scope="col">
            Montag<button style={{ float: "right" }}>-</button>
          </th>
          <th scope="col">
            Dienstag<button style={{ float: "right" }}>-</button>
          </th>
          <th scope="col">
            Mittwoch<button style={{ float: "right" }}>-</button>
          </th>
          <th scope="col">
            Donnerstag<button style={{ float: "right" }}>-</button>
          </th>
          <th scope="col">
            Freitag<button style={{ float: "right" }}>-</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">8-9</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">9-10</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">10-11</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>

        <tr>
          <th scope="row">11-12</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">12-13</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">13-14</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">14-15</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">15-16</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">16-17</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">17-18</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">18-19</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
        <tr>
          <th scope="row">19-20</th>
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
          <Fachzelle />
        </tr>
      </tbody>
    </table>
  );
} 

class Stundenplan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false
    };
  }

  handleToggleFach = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    return (
      <div>
        <Tabelle />
      </div>
    );
  }
}

export default Stundenplan;
