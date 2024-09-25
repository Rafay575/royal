import React, { useState, useEffect } from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const NavbarComponent = ({ toggleSidebar }) => {
  const [user, setUser] = useState(null);  // State to store user info
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state || {};  // Extract `id` from state

  // Fetch user data from API
  useEffect(() => {
    if (id) {  // Ensure that `id` is available before making the request
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/auth/carrier-user/${id}`);  // Replace with your actual API endpoint
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [id]);  // Dependency array includes `id` to re-fetch data if `id` changes

  // Helper to get the first letter of the user's email
  const getUserInitial = () => {
    return user ? user.email.charAt(0).toUpperCase() + user.email.charAt(1).toUpperCase() : '';
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="mb-0"
      style={{ background: "#fa4318", position: "fixed", top: 0, width: "100%", zIndex: 1050 }}
    >
      <Container fluid>
        {/* Carrier Portal Brand */}
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#fff" }}>
          Carrier Portal
        </Navbar.Brand>

        {/* Spacer to push the avatar to the right */}
        <div className="ms-auto">
          <Col className="me-3 d-md-none" onClick={toggleSidebar} style={{ color: "#fff", cursor: "pointer", fontSize: "24px" }}>
            ☰
          </Col>
          {/* User avatar with Bootstrap dropdown */}
          {user && (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle p-0"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
                  cursor: "pointer",
                  border: "none"
                }}
              >
                {getUserInitial()}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
