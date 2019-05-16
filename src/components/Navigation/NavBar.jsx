import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Icon</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/praeferenzplanung">Präferenz</Nav.Link>
        <Nav.Link href="/reservierung">Reservierung</Nav.Link>
        <Nav.Link href="/map">Map</Nav.Link>
      </Nav>
    </Navbar>
  );
}
