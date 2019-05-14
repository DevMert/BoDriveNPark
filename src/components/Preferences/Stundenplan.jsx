import React, { Component } from "react";
import Fach from "./Fach";
import DataCell from "./DataCell";

function Tabelle() {
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
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">9-10</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">10-11</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>

        <tr>
          <th scope="row">11-12</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">12-13</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">13-14</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">14-15</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">15-16</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">16-17</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">17-18</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">18-19</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
        <tr>
          <th scope="row">19-20</th>
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
          <DataCell />
        </tr>
      </tbody>
    </table>
  );
}

class Stundenplan extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabelle />
      </div>
    );
  }
}

export default Stundenplan;
