import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContentComponent = () => {
  return (
    <Container fluid className="content">
      <h1>Welcome to the Dashboard</h1>
      <p>This is some dummy content for the dashboard. You can add widgets, graphs, or tables here.</p>

      <Row>
        <Col md={4} className="mb-3">
          <div className="p-3 bg-primary text-white text-center rounded">Widget 1</div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="p-3 bg-success text-white text-center rounded">Widget 2</div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="p-3 bg-warning text-white text-center rounded">Widget 3</div>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-3">
          <div className="p-3 bg-danger text-white text-center rounded">Large Widget</div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="p-3 bg-info text-white text-center rounded">Large Widget</div>
        </Col>
      </Row>

      <style jsx>{`
        .content {
          padding: 2rem;
        }
      `}</style>
    </Container>
  );
};

export default ContentComponent;
