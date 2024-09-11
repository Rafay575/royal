import React from 'react';
import { Navbar, Container, Col, Button } from 'react-bootstrap';

const NavbarComponent = ({ toggleSidebar }) => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="mb-0"
      style={{ background: "#fa4318", position: "fixed", top: 0, width: "100%", zIndex: 1050 }}
    >
      <Container fluid>
        {/* Burger menu to toggle sidebar */}
        <Col className="me-3" onClick={toggleSidebar} style={{ color:"#fff",cursor: "pointer", fontSize: "24px" }}>
     
          ☰
        </Col>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          Carrier Portal
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
