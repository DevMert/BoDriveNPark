import React, {Component} from 'react'
import styled from 'styled-components'
import reactCSS from 'reactcss'
import Fach from './Fach'


const UnsortedList = styled.ul `
  width: 15%;
  min-height: 150px;
  list-style: none; 
  padding-left: 0;
  border: 2px solid black;
  
`

const ListElement = styled.div `
  
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`


/**
 * Diese Funktion gibt die Componente mit einer Liste aller Fächer aus.
 * Dabei wird über alle Fächer anhand von props.faecher.map itteriert
 * und so jedes Fach, welches sich in dem State "faecher" der Klasse Faecher
 * befindet, in die Liste eingefuegt
 */
function FachListe (props) {
  
  const styles = reactCSS({
    'default': {
      button: {
        width: '100%'
        
      },
    }
  })

  return (
    <div>
      
      <UnsortedList>
        <button 
          style = { styles.button }
          >+</button>
        <li><Fach/></li>
        <li><Fach/></li>
        {/**
          {props.faecher.map((fach) => 
            <li key = {fach.name}>
              <ListElement>
                <span>{fach.name}</span>
              </ListElement>
            </li>        
          )}     
        */}
      </UnsortedList>
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
  updateInput (event) {
    const value = event.target.value

    this.setState(() => {
      return {input: value}
    })
  }

  /**
   * Bei Druck auf den "+-Button" wird diese Funktion ausgelöst
   */
  handleFachHinzufuegen() {
    /**
     * 
     this.setState((currentState) => {
      //Die if-Abfrage prüft ob das Eingabefeld leer ist, 
      //um leere Listeneinträge zu vermeiden 
      
      if(currentState.input !== '') {
        return {
          faecher: currentState.faecher.concat([{
            name: currentState.input,
            
          }]),
          input: ''
        }
      }     
      })
    */
    
  }

  render() {
    return (
      <div>
        
        <input 
          type = 'text'
          placeholder = 'Fach hinzufügen'
          value = {this.state.input}
          onChange={this.updateInput}
        />
        
        <FachListe 
          faecher = {this.state.faecher}              
        />
        
      </div>
    )
  }
}

export default Faecher;