//Designed by Daniel Tura

import React, { Component } from 'react';
import data from './samples/users';

class Parkplatz {
  constructor(MAX_Slots) {
    this.users = [];
    this.MAX_Slots = MAX_Slots;
  }

  addUser(user) {
    this.users.push(user);
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

    /*User werden nach Parkwert sortiert*/
    users.sort(function(a, b) {
      return a.parkwert - b.parkwert;
    });

    /*Parkplätze belegen*/

    //In diesem Array werden die Zuweisungen an die
    //Parkplätze gespeichert
    var parkBuddiesHP = [];
    //Array zum Zwischenspeichern
    var temp = [];
    //Anzahl an Suchvorgängen
    var loops = users.length;

    for (var i = 0; i < loops; i++) {
      temp = this.fillSlots(users, tag, 'Hauptparkplatz');
      if (temp !== undefined) {
        parkBuddiesHP.push(temp);
        temp.forEach(user => (users = this.deleteUser(users, user.matnr)));
      }
    }

    console.log(parkBuddiesHP);
  };
  //------------------------------------------------------------------------

  fillSlots(users, tag, pref) {
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
      false,
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
      case 'mo':
        tag_Index = 0;
        break;
      case 'di':
        tag_Index = 1;
        break;
      case 'mi':
        tag_Index = 2;
        break;
      case 'do':
        tag_Index = 3;
        break;
      case 'fr':
        tag_Index = 4;
        break;
      default:
        break;
    }

    var filteredUsers = [];

    users.forEach(user => {
      if (user.parkPrefs[tag_Index].pref === pref || user.parkPrefs[tag_Index].pref === 'Egal') {
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
    user.flags.filter(flag => flag.tag === tag).map(flag => (flag.isToggled = flagArr[c++]));
  }

  componentDidMount() {
    this.algo2('mo');
  }

  render() {
    return <div />;
  }
}

export default Experimental;
