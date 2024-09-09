import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavbarComponent = ({ toggleSidebar }) => {
  return (
    <Navbar variant="dark" expand="lg" className="mb-0" style={{background:"#fa4318"}}>
      <Container fluid>
        {/* <Button variant="dark" onClick={toggleSidebar} className="me-3">
          ☰
        </Button> */}
        <Navbar.Brand href="#home" style={{fontWeight:"bold"}}>Carrier portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
