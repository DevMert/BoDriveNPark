import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/map">Map</Nav.Link>
      </Nav>
    </Navbar>
  );
}
