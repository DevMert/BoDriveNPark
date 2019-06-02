import React, { Component } from "react";
import data from "./samples/users";

//HP: 5P
//NP: 3P

class Experimental extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  algo = () => {
    //User fetchen
    var benutzer = eval(data);
    var users = benutzer.users;

    //Parkplätze initialisieren
    var HP = new Array();
    var HP_MAX = 5;
    var HPIndex = 0;
    var NP = new Array();
    var NPIndex = 0;
    var NP_MAX = 3;
    var NPIndex = 0;
    var remainders = new Array();

    //User werden nach Parkwert sortiert
    users.sort(function(a, b) {
      return a.parkwert - b.parkwert;
    });

    users.map(u => {
      console.log(
        "User: " + u.matnr + " Parkwert: " + u.parkwert + " Pref: " + u.parkPrefs[0].pref
      );
    });
    //Usern Parkplätze vergeben
    users.forEach(u => {
      switch (u.parkPrefs[0].pref) {
        case "Hauptparkplatz":
          if (HP_MAX > HPIndex) {
            console.log("User " + u.matnr + "bekommt HP");
            HP.push(u);
            HPIndex++;
          } else remainders.push(u);
          break;

        case "Nebenparkplatz":
          if (NP_MAX > NPIndex) {
            console.log("User " + u.matnr + "bekommt NP");
            NP.push(u);
            NPIndex++;
          } else remainders.push(u);
          break;

        case "Egal":
          var HP_Diff = HP_MAX - HPIndex;
          var NP_Diff = NP_MAX - NPIndex;
          if (HP_Diff >= NP_Diff && HP_MAX > HPIndex) {
            console.log("User " + u.matnr + "bekommt HP");
            HP.push(u);
            HPIndex++;
          } else if (NP_Diff >= HP_Diff && NP_MAX > NPIndex) {
            console.log("User " + u.matnr + "bekommt NP");
            NP.push(u);
            NPIndex++;
          } else remainders.push(u);
          break;

        default:
          console.error("Fehler beim switchen...");
      }
    });
    console.log("Hauptparkplatz", HP);
    console.log("Nebenparkplatz", NP);
    console.log("Remainders", remainders);
  };

  componentDidMount() {
    this.algo();
  }

  render() {
    return <div />;
  }
}

export default Experimental;
