import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='Navi'>
      <Navbar >
        <Navbar.Brand className='brand' href="#home">Icon</Navbar.Brand>
        <Nav className="mr-auto">
          <div className='links'>
            <div  className='pref'>
              <Nav.Link href="/praeferenzplanung">Präferenz</Nav.Link>
            </div>
            <div  className='reserv'>
              <Nav.Link href="/reservierung">Reservierung</Nav.Link>
            </div>
            <div  className='map'>
              <Nav.Link href="/map">Map</Nav.Link>
            </div>
            <div  className='exp'>
              <Nav.Link href="/experimental">Experimental</Nav.Link>
            </div>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}
