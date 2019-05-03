import React, {Component} from 'react'
import styled from 'styled-components'
import { GithubPicker } from 'react-color';


const UnsortedList = styled.ul `
  width: 20%;
  min-height: 150px;
  list-style: none; 
  padding-left: 0;
  border: 5px solid black;
  
`


/**
 * Diese Funktion gibt die Componente mit einer Liste aller Fächer aus.
 * Dabei wird über alle Fächer anhand von props.faecher.map itteriert
 * und so jedes Fach, welches sich in dem State "faecher" der Klasse Faecher
 * befindet, in die Liste eingefuegt
 */
function FachListe (props) {
  
  return (
    <div>
      <UnsortedList>
        {props.faecher.map((fach) => 
          <li key = {fach}>
            <div>
              <span>{fach}</span>
            </div>
          </li>        
        )}
      </UnsortedList>
    </div>
  )
}

class Faecher extends Component {
  constructor(props) {
    super(props); //Das muss hier IMMER als erstes im Konstruktor stehen

    this.state = {
      faecher: [],
      farbe: '',
      input: '',
    }

    this.updateInput = this.updateInput.bind(this)
    this.handleFachHinzufuegen = this.handleFachHinzufuegen.bind(this)
  }

  /**
   * Diese Funktion reagiert auf den Tastendruck der Tastatur, wenn man sich
   * im Textfeld für das hinzufügen der Fächer befindet. Ohne die würde das 
   * Textfeld leer bleiben bei Tastendruck.
   */
  updateInput (e) {
    const value = e.target.value

    this.setState(() => {
      return {input: value}
    })
  }

  /**
   * Bei Druck auf den "+-Button" wird diese Funktion ausgelöst
   */
  handleFachHinzufuegen() {
    this.setState((currentState) => {
      /*Die if-Abfrage prüft ob das Eingabefeld leer ist, 
      um leere Listeneinträge zu vermeiden */
      if(currentState.input !== '') {
        return {
          faecher: currentState.faecher.concat(currentState.input),
          input: ''
        }
      }     
    })
  }

  

  render() {
    return (
      <div>
        {/*Componente zum auswählen der Farbe fürs Fach */}
        <GithubPicker 
          width = {100}
        />
        <input 
          type = 'text'
          placeholder = 'Fach hinzufügen'
          value = {this.state.input}
          onChange={this.updateInput}
        />
        <button onClick={this.handleFachHinzufuegen}> + </button>
        <FachListe 
          faecher = {this.state.faecher}        
        />
      </div>
    )
  }
}

export default Faecher;