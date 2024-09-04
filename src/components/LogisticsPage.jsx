import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const LogisticsPage = () => {
  return (
    <Container className="p-4">
      <Row className="mb-4">
        <Col md={6}>
          <h2 style={{color:"#fa4318"}}>Online Load Tracking</h2>
          <p>
            Upon activation of your profile with Allen Lund Company, you will
            gain access to your shipments, with multiple options to track
            activity...
          </p>
          <blockquote className="blockquote">
            <span>
              Track your shipments in real-time from pick-up to delivery.
            </span>
          </blockquote>
          <blockquote className="blockquote">
            <span>
              Fully customizable system that fits your transportation needs
            </span>
          </blockquote>
          <blockquote className="blockquote">
            <span>
            System integrates with ERP / Order Entry Systems
            </span>
          </blockquote>
          <blockquote className="blockquote">
            <span>
            Supported by 24×7 direct point of contact
            </span>
          </blockquote>
        </Col>
        <Col md={6}>
          <img
            src="./assets/img/banner/a1.jpg"
            alt="Tracking"
            className="img-fluid"
          />
        </Col>
      </Row>

     
    </Container>
  );
};

export default LogisticsPage;
