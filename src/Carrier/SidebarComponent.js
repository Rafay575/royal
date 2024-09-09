import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

const SidebarComponent = ({ showSidebar, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="d-none d-lg-block  sidebar" style={{boxShadow:"4px 4px 2px 1px "}}>
        <Nav className="flex-column p-3">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#analytics">Analytics</Nav.Link>
          <Nav.Link href="#users">Users</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </div>

      {/* Sidebar for small screens (Offcanvas) */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#analytics">Analytics</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx>{`
        .sidebar {
          height: 100vh;
          background-color: #f8f9fa;
        }
      `}</style>
    </>
  );
};

export default SidebarComponent;
