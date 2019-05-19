import React, { Component } from 'react';
import Stundenplan from './Stundenplan'

function TabellenZeile(props) {
    return (
      <tr>
        <th scope="row">
          {props.stunde}-{props.stunde + 1}
        </th>
      </tr>
    )
}

function Tabelle(props) {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Zeit</th>
            <th scope="col">Montag</th>
            <th scope="col">Dienstag</th>
            <th scope="col">Mittwoch</th>
            <th scope="col">Donnerstag</th>
            <th scope="col">Freitag</th>
          </tr>
        </thead>
        <tbody>
            <TabellenZeile stunde={8}/>
            <TabellenZeile stunde={9}/>
            <TabellenZeile stunde={10}/>
            <TabellenZeile stunde={11}/>
            <TabellenZeile stunde={12}/>
            <TabellenZeile stunde={13}/>
            <TabellenZeile stunde={14}/>
            <TabellenZeile stunde={15}/>
            <TabellenZeile stunde={16}/>
            <TabellenZeile stunde={17}/>
            <TabellenZeile stunde={18}/>
            <TabellenZeile stunde={19}/>
        </tbody>
        <tr><td>sdfsdfs</td><td>sdsgsgsg</td></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
    </table>
  );
}

export default class Reservierung extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          flags: [
            { tag: "mo", stunde: 8, isToggled: false },
            { tag: "mo", stunde: 9, isToggled: false },
            { tag: "mo", stunde: 10, isToggled: false },
            { tag: "mo", stunde: 11, isToggled: false },
            { tag: "mo", stunde: 12, isToggled: false },
            { tag: "mo", stunde: 13, isToggled: false },
            { tag: "mo", stunde: 14, isToggled: false },
            { tag: "mo", stunde: 15, isToggled: false },
            { tag: "mo", stunde: 16, isToggled: false },
            { tag: "mo", stunde: 17, isToggled: false },
            { tag: "mo", stunde: 18, isToggled: false },
            { tag: "mo", stunde: 19, isToggled: false },
    
            { tag: "di", stunde: 8, isToggled: false },
            { tag: "di", stunde: 9, isToggled: false },
            { tag: "di", stunde: 10, isToggled: false },
            { tag: "di", stunde: 11, isToggled: false },
            { tag: "di", stunde: 12, isToggled: false },
            { tag: "di", stunde: 13, isToggled: false },
            { tag: "di", stunde: 14, isToggled: false },
            { tag: "di", stunde: 15, isToggled: false },
            { tag: "di", stunde: 16, isToggled: false },
            { tag: "di", stunde: 17, isToggled: false },
            { tag: "di", stunde: 18, isToggled: false },
            { tag: "di", stunde: 19, isToggled: false },
    
            { tag: "mi", stunde: 8, isToggled: false },
            { tag: "mi", stunde: 9, isToggled: false },
            { tag: "mi", stunde: 10, isToggled: false },
            { tag: "mi", stunde: 11, isToggled: false },
            { tag: "mi", stunde: 12, isToggled: false },
            { tag: "mi", stunde: 13, isToggled: false },
            { tag: "mi", stunde: 14, isToggled: false },
            { tag: "mi", stunde: 15, isToggled: false },
            { tag: "mi", stunde: 16, isToggled: false },
            { tag: "mi", stunde: 17, isToggled: false },
            { tag: "mi", stunde: 18, isToggled: false },
            { tag: "mi", stunde: 19, isToggled: false },
    
            { tag: "do", stunde: 8, isToggled: false },
            { tag: "do", stunde: 9, isToggled: false },
            { tag: "do", stunde: 10, isToggled: false },
            { tag: "do", stunde: 11, isToggled: false },
            { tag: "do", stunde: 12, isToggled: false },
            { tag: "do", stunde: 13, isToggled: false },
            { tag: "do", stunde: 14, isToggled: false },
            { tag: "do", stunde: 15, isToggled: false },
            { tag: "do", stunde: 16, isToggled: false },
            { tag: "do", stunde: 17, isToggled: false },
            { tag: "do", stunde: 18, isToggled: false },
            { tag: "do", stunde: 19, isToggled: false },
    
            { tag: "fr", stunde: 8, isToggled: false },
            { tag: "fr", stunde: 9, isToggled: false },
            { tag: "fr", stunde: 10, isToggled: false },
            { tag: "fr", stunde: 11, isToggled: false },
            { tag: "fr", stunde: 12, isToggled: false },
            { tag: "fr", stunde: 13, isToggled: false },
            { tag: "fr", stunde: 14, isToggled: false },
            { tag: "fr", stunde: 15, isToggled: false },
            { tag: "fr", stunde: 16, isToggled: false },
            { tag: "fr", stunde: 17, isToggled: false },
            { tag: "fr", stunde: 18, isToggled: false },
            { tag: "fr", stunde: 19, isToggled: false }
          ],
    
        };
      }

    render(){
        return(
            <Tabelle flags={this.state.flags}/>
        )
    }
}