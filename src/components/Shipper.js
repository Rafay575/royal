import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ShipperPage.css';

const Shipper = () => {
  return (
    <Container className="truckload-section py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="section-title text-center text-uppercase">Truckload Services</h2>
        </Col>
      </Row>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card className="service-card h-100">
            <Card.Body>
              <Card.Title className="service-title">Dry Van</Card.Title>
              <Card.Text>
                With the best software tracking in the industry, we handle full truckload van freight from any part of the U.S. and can provide 48′ and 53′ trailers to satisfy the needs of our shippers. Every office in our network has a van division that can tailor a program to handle the needs of any customer at any time of day.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="service-card h-100">
            <Card.Body>
              <Card.Title className="service-title">Flatbed</Card.Title>
              <Card.Text>
                Whether you need standard flatbed trailers or specialized equipment to handle over-dimensional/over-weight loads, the Allen Lund Company flatbed division, located in Atlanta, GA, can handle the job at any time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card className="service-card h-100">
            <Card.Body>
              <Card.Title className="service-title">Refrigerated Transportation</Card.Title>
              <Card.Text>
                We are experts at understanding time, temperature, and equipment when moving produce throughout the U.S. and have an extensive carrier base to service your needs from loading to delivery. Our Four-X rating in the Blue Book is a testament to our commitment and integrity in this market, as well as our inclusion in the Platinum Performance Program established by TIA.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="service-card h-100">
            <Card.Body>
              <Card.Title className="service-title">LTL Freight</Card.Title>
              <Card.Text>
                Our LTL freight management software gives you greater control over your less-than-truckload freight spend. You manage your preferred LTL carriers while taking advantage of our aggregate, negotiated contract pricing...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='text-center'>
              <Button variant="primary" className="custom-button">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Shipper;
