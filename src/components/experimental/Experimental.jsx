//Designed by Daniel Tura

import React, { Component } from "react";
import data from "./samples/users";

class Parkplatz {
  constructor(MAX_Slots) {
    this.users = [];
    this.MAX_Slots = MAX_Slots;
  }

  getMax() {
    return this.MAX_Slots;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    let uArr = [];
    this.users.forEach(userArr => {
      Array.isArray(userArr)
        ? userArr.forEach(user => uArr.push(user))
        : uArr.push(userArr);
    });

    return uArr;
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
    //User initialisieren/fetchen
    var users = data.users;

    //Userpräferenzen ausfuellen
    //Hier werden die Lücken in den Flags geschlossen
    users.map(user => {
      this.gapFiller(user, tag);
    });

    //User bekommen für Testzwecke zufällige Parkwerte
    // users.map(u => {
    //   u.parkwert = Math.floor(Math.random() * 200) + 20;
    //   console.log(
    //     "User nr. " + u.matnr + " hat folgenden Parkwert: " + u.parkwert
    //   );
    // });

    /*User werden nach Parkwert sortiert*/
    users.sort(function(a, b) {
      return a.parkwert - b.parkwert;
    });

    //Parkplätze inistialisieren
    var HP = new Parkplatz(10);
    var NP = new Parkplatz(1);

    /*Parkplätze belegen*/
    /**
     * Jeder Parkplatz wird belegt. Anschließend werden nach jeder
     * Belegung die User mit Parkfläche global aus dem Array gelöscht
     */
    this.fillParkplatz(users, HP, tag, "Hauptparkplatz");
    HP.getUsers().forEach(user => {
      users = this.deleteUser(users, user.matnr);
    });

    this.fillParkplatz(users, NP, tag, "Nebenparkplatz");
    NP.getUsers().forEach(user => {
      users = this.deleteUser(users, user.matnr);
    });

    console.log(HP);
    console.log(NP);
    console.log(users);
  };
  //------------------------------------------------------------------------

  fillParkplatz(users, PP, tag, pref) {
    //In diesem Array werden die Zuweisungen an die
    //Parkflächen gespeichert
    var parkBuddiesArr = [];
    //Array zum Zwischenspeichern
    var temp = [];
    //Anzahl an Suchvorgängen
    var loops = users.length;

    for (var i = 0; i < loops; i++) {
      temp = this.getFilledSlots(users, tag, pref);
      if (temp !== undefined) {
        parkBuddiesArr.push(temp);
        //Lösche User lokal aus Array, damit diese nicht nochmal vergeben werden
        temp.forEach(user => (users = this.deleteUser(users, user.matnr)));
      }
    }
    //console.log(users);
    //Maximale Parkflächen auf Parkplatz definieren
    var P_Index = 0;

    //Alle BuddieArrays auf den Parkplatz pushen, bis alle Plätze
    //voll sind oder keine buddies mehr im Array
    for (var j = 0; j < parkBuddiesArr.length; j++) {
      if (P_Index >= PP.getMax()) break;
      else {
        PP.addUser(parkBuddiesArr[j]);
        P_Index++;
      }
    }

    return PP;
  }

  getFilledSlots(users, tag, pref) {
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
    var filteredUsers = this.getFilteredUsers(users, tag, pref);

    var buddies = [];
    var uArr = [];
    filteredUsers.map(user => {
      uArr = this.getUserFlagArray(user, tag);
      if (this.checkAvail(emptyPF, uArr)) {
        buddies.push(user);
        for (var i = 0; i < emptyPF.length; i++) {
          emptyPF[i] = uArr[i];
        }
      }
    });

    if (buddies.length !== 0) {
      return buddies;
    }
  }

  getFilteredUsers(users, tag, pref) {
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

    var filteredUsers = [];

    users.forEach(user => {
      if (
        user.parkPrefs[tag_Index].pref === pref ||
        user.parkPrefs[tag_Index].pref === "Egal"
      ) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

  /**
   * Lösche den user mit der gegebenen matnr aus users
   */
  deleteUser(users, matnr) {
    return users.filter(user => !(user.matnr === matnr));
  }

  /**
   * Prüft, ob Zeiten des Users zu den freien Zeit
   * auf der Parkfläche passen
   * @param {*} pArr
   * Array der Parkfläche
   * @param {*} uArr
   * Array des Users
   */
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
            //i und j und setze diese auf true
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
