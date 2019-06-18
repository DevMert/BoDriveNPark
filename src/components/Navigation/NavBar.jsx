import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Icon</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/praeferenzplanung">Präferenz</Nav.Link>
          <Nav.Link href="/reservierung">Reservierung</Nav.Link>
          <Nav.Link href="/map">Map</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
