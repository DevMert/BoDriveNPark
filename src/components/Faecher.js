import React, {Component} from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Test = styled.button `
  color: red;
`
/**
 * Diese Funktion gibt die Componente mit einer Liste aller Fächern aus.
 * Dabei wird über alle Fächer anhand von props.faecher.map itteriert
 * und so jedes Fach, welches sich in dem State "faecher" der Klasse Faecher
 * befindet, in die Liste eingefuegt
 */
function FachListe (props) {
  return (
    <div>
      <ul>
      {props.faecher.map((fach) => 
        <li key = {fach}>
          <div className="Fachcontainer">
            <span>{fach}</span>
          </div>
        </li>        
      )}
      </ul>
    </div>
  )
}

class Faecher extends Component {
  constructor(props) {
    super(props); //Das muss hier IMMER als erstes im Konstruktor stehen

    this.state = {
      faecher: [],
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
        <p>Faecher wird gerendert</p>
        <input 
          type = 'text'
          placeholder = 'Fach hinzufügen'
          value = {this.state.input}
          onChange={this.updateInput}
        />
        <Test onClick={this.handleFachHinzufuegen}> + </Test>
        <FachListe 
          faecher = {this.state.faecher}

          
        />
      </div>
    )
  }
}

export default Faecher;