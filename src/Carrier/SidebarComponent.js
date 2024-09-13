import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

const SidebarComponent = ({ showSidebar, toggleSidebar, handlePageChange }) => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="bg-dark d-block  sidebar" style={{boxShadow:"4px 4px 2px 1px "}}>
        <Nav className="flex-column p-3">
          <Nav.Link onClick={() => handlePageChange(1)}>Address Information</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(2)}>Contact Information</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(3)}>Carrier Policy</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(4)}>Company Agreement</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(5)}>Carrier Insurance</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(6)}>Carrier Equipment</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(7)}>ELD/Load Tracking</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(8)}>Operating Areas</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(9)}>Supplier Diversity Info</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(10)}>CARB Truck and Bus</Nav.Link>
          <Nav.Link onClick={() => handlePageChange(11)}>Submit Application </Nav.Link>
        </Nav>
      </div>

      {/* Sidebar for small screens (Offcanvas) */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handlePageChange(1)}>Address Information</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(2)}>Contact Information</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(3)}>Carrier Policy</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(4)}>Company Agreement</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(5)}>Carrier Insurance</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(6)}>Carrier Equipment</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(7)}>ELD/Load Tracking</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(8)}>Operating Areas</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(9)}>Supplier Diversity Info</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(10)}>CARB Truck and Bus</Nav.Link>
            <Nav.Link onClick={() => handlePageChange(11)}>Submit Application to ALC</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx>{`
        .sidebar {
          height: 100vh;
          background-color: #212529;
          color: white;
          position:fixed;
        }
        .sidebar .nav-link {
          color: white;
        }
        .sidebar .nav-link.active {
          background-color: #6c757d;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default SidebarComponent;
