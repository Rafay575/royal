import React, { useState } from 'react';
import NavbarComponent from './NavbarComponent';
import SidebarComponent from './SidebarComponent';
import ContentComponent from './ContentComponent';
import { Row, Col } from 'react-bootstrap';
import CarrierPrequalification from './CarrierPrequalification';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Navbar */}
      <NavbarComponent toggleSidebar={toggleSidebar} />

      <div className="d-flex">
        {/* Sidebar and Content */}
        <Row className="flex-fill">
          <Col lg={2} className="d-none d-lg-block">
            <SidebarComponent showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          </Col>
          <Col lg={10}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
