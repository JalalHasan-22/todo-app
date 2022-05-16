import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar
      bg="none"
      variant="dark"
      style={{ backgroundColor: "blue", color: "white" }}
    >
      <Container>
        <Navbar.Brand href="#home">ToDO App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
