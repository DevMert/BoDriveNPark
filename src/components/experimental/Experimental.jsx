//Designed by Daniel Tura

import React, { Component } from "react";
import data from "./samples/users";

class Parkstunde {
  constructor(stunde, isTog) {
    this.stunde = stunde;
    this.isTog = isTog;
  }

  getIsTog() {
    return this.isTog;
  }

  setIsTog(isTog) {
    this.isTog = isTog;
  }
}

class Parkflaeche {
  constructor() {
    this.stunden = [
      new Parkstunde(8, false),
      new Parkstunde(9, false),
      new Parkstunde(10, false),
      new Parkstunde(11, false),
      new Parkstunde(12, false),
      new Parkstunde(13, false),
      new Parkstunde(14, false),
      new Parkstunde(15, false),
      new Parkstunde(16, false),
      new Parkstunde(17, false),
      new Parkstunde(18, false),
      new Parkstunde(19, false)
    ];

    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getParkstunden() {
    return this.stunden;
  }

  getParkstundenAsArray() {
    var paa = [];

    this.stunden.map(stunde => {
      paa.push(stunde.getIsTog());
    });

    return paa;
  }

  getParkstunde(stunde) {
    const parkstunde = this.stunden.filter(ps => ps.getStunde() === stunde);
    return parkstunde;
  }

  isEmpty() {
    this.stunden.forEach(stunde => {
      if (stunde.getIsTog() === true) return false;
    });
    return true;
  }
}

class Parkplatz {
  constructor(anzahl_flaechen) {
    this.parkflaechen = [];
    for (var i = 0; i < anzahl_flaechen; i++) {
      this.parkflaechen.push(new Parkflaeche());
    }

    this.belegteFlaechen = [];
  }

  length() {
    return this.parkflaechen.length;
  }

  getParkflaechen() {
    return this.parkflaechen;
  }

  getParkflaeche(flaechen_nummer) {
    return this.parkflaechen[flaechen_nummer];
  }

  anzBelFl() {
    return this.belegteFlaechen.length;
  }

  sucheLuecke() {}

  isEmpty() {
    if (this.parkflaechen.length === 0) return true;

    return false;
  }
}

class Experimental extends Component {
  /**
   * Der Algorithmus weißt Parkplätzen User für einen
   * ausgewählten Tag zu.
   * @param tag
   * tag ist vom Typ String und kann folgende Werte annehmen:
   * "mo", "di", "mi", "do", "fr"
   */
  algo2 = tag => {
    //Tag als Index initialisieren
    var tag_Index;
    switch (tag) {
      case "mo":
        tag_Index = 0;
        break;
      case "di":
        tag_Index = 1;
        break;
      case "mi":
        tag_Index = 2;
        break;
      case "do":
        tag_Index = 3;
        break;
      case "fr":
        tag_Index = 4;
        break;
      default:
        break;
    }
    //Parkplätze inistialisieren
    var HP = new Parkplatz(3);
    var NP = new Parkplatz(1);
    var HP_Index = 0;
    var NP_Index = 0;

    //User initialisieren/fetchen
    var users = data.users;

    //Userpräferenzen ausfuellen
    //Hier werden die Lücken in den Flags geschlossen

    users.map(user => {
      this.gapFiller(user, tag);
    });

    //User werden nach Parkwert sortiert
    users.sort(function(a, b) {
      return a.parkwert - b.parkwert;
    });

    //Parkplätze belegen

    var buddies = this.getParkBuddies(users, tag);
    console.log(buddies);
  };
  //------------------------------------------------------------------------

  getParkBuddies(users, tag) {
    var emptyPF = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ];
    var buddies = [];
    var uArr = [];
    users.map(user => {
      uArr = this.getUserFlagArray(user, tag);
      if (this.checkAvail(emptyPF, uArr)) {
        buddies.push(user);
        for (var i = 0; i < emptyPF.length; i++) {
          emptyPF[i] = uArr[i];
        }
      }
    });

    return buddies;
  }

  /**
   * Lösche den user mit der gegebenen matnr aus users
   */
  deleteUser(users, matnr) {
    return users.filter(user => !(user.matnr === matnr));
  }

  checkAvail(pArr, uArr) {
    for (var i = 0; i < pArr.length; i++) {
      if (pArr[i] === true && uArr[i] === true) return false;
    }
    return true;
  }

  getUserFlagArray(user, tag) {
    var flagArr = [];
    user.flags
      .filter(flag => flag.tag === tag)
      .map(flag => {
        flagArr.push(flag.isToggled);
      });

    return flagArr;
  }

  gapFiller(user, tag) {
    //Kopiere die flags des Users
    var flagArr = this.getUserFlagArray(user, tag);

    for (var i = 0; i < flagArr.length; i++) {
      //Itteriere so lange, bis das jetzige Element true
      //und das nächste false ist
      if (flagArr[i] === true && flagArr[i + 1] === false) {
        //Prüfe ab diesem Moment jedes weitere Element...
        for (var j = i; j < flagArr.length; j++) {
          //...bis ein Element true zurück gibt
          if (flagArr[j] === true) {
            //Itteriere über alle Elemente zwischen
            //i und j die false sind und setze diese auf true
            for (var k = i; k <= j; k++) {
              flagArr[k] = true;
            }
          }
        }
      }
    }

    //Anpassung der flags des Users
    var c = 0;
    user.flags
      .filter(flag => flag.tag === tag)
      .map(flag => (flag.isToggled = flagArr[c++]));
  }

  componentDidMount() {
    this.algo2("mo");
  }

  render() {
    return <div />;
  }
}

export default Experimental;
