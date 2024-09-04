import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptop, FaTruckMoving, FaUserEdit, FaFileUpload } from 'react-icons/fa';
import './Tools.css';  // Custom CSS

const Tools = () => {
  return (
    <section className="tools-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="tools-title">Tools to help you succeed</h2>
        </div>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card className="tool-card">
              <div className="icon-container">
                <FaLaptop className="tool-icon" />
              </div>
              <Card.Body>
                <Card.Title className="tool-title">Royal Load Board</Card.Title>
                <Card.Text>
                  As an Royal carrier, you will have access to view our posted loads with the potential of covering them via the website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <Card className="tool-card">
              <div className="icon-container">
                <FaTruckMoving className="tool-icon" />
              </div>
              <Card.Body>
                <Card.Title className="tool-title">Track Active Loads</Card.Title>
                <Card.Text>
                  Our website allows carriers to manage and track their ALC loads from the time they are tendered to the time of delivery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <Card className="tool-card">
              <div className="icon-container">
                <FaUserEdit className="tool-icon" />
              </div>
              <Card.Body>
                <Card.Title className="tool-title">Update Profile</Card.Title>
                <Card.Text>
                  Carriers can view their contact information, posted equipment, preferred lanes, and track and update loads via the ALC platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <Card className="tool-card">
              <div className="icon-container">
                <FaFileUpload className="tool-icon" />
              </div>
              <Card.Body>
                <Card.Title className="tool-title">Upload Documents</Card.Title>
                <Card.Text>
                  Use the ALC Carrier Mobile App to upload PDFs of load documents, speeding up the payment process.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tools;
