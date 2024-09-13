import React, { useState, useEffect } from 'react';
import { Navbar, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const NavbarComponent = ({ toggleSidebar }) => {
  const [user, setUser] = useState(null);  // State to store user info

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user');  // Replace with your actual API endpoint
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Helper to get the first letter of the user's name
  const getUserInitial = () => {
    return user ? user.name.charAt(0).toUpperCase() + user.name.charAt(1).toUpperCase() : '';
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="mb-0"
      style={{ background: "#fa4318", position: "fixed", top: 0, width: "100%", zIndex: 1050 }}
    >
      <Container fluid>
        {/* Burger menu to toggle sidebar */}
        
        {/* Carrier Portal Brand */}
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#fff" }}>
          Carrier Portal
        </Navbar.Brand>

        {/* Spacer to push the avatar to the right */}
        <div className="ms-auto">
        <Col className="me-3 d-md-none" onClick={toggleSidebar} style={{ color: "#fff", cursor: "pointer", fontSize: "24px" }}>
          ☰
        </Col>
          {/* User avatar with the first letter of user's name */}
          {user && (
            <div
              style={{
                backgroundColor: "#fff",
                color: "#fa4318",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              {getUserInitial()}
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
