import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SkillExchangeNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="w-100 fixed-top shadow">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold">SkillExchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <Form className="d-flex flex-grow-1 mx-3">
              <FormControl type="search" placeholder="Search" className="me-2 w-100" />
              <Button variant="outline-primary">Search</Button>
            </Form>

            <Nav>
              <Nav.Link as={Link} to="/schedule">📅 Schedule</Nav.Link>
              <Nav.Link as={Link} to="/messages">💬 Messages</Nav.Link>
              <Nav.Link as={Link} to="/login">🔐 Login/Register</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SkillExchangeNavbar;
