import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ShipperPage.css';
import { Link } from 'react-router-dom';

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
              Our dry van service ensures safe, reliable transportation for non-perishable goods across the U.S. Our vast network of carriers guarantees flexible capacity and timely deliveries, making us a trusted choice for all general freight needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="service-card h-100">
            <Card.Body>
              <Card.Title className="service-title">Flatbed</Card.Title>
              <Card.Text>
              We specialize in flatbed transportation for oversized and heavy freight. Our experienced team handles everything from specialized loading to regulatory compliance, ensuring safe and efficient transport of construction materials, machinery, and more.
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
              Our refrigerated transportation solutions maintain strict temperature control for perishable and sensitive goods. With our high-quality reefers, we ensure freshness from origin to destination, perfect for food, pharmaceuticals, and other temperature-sensitive shipments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card className="service-card h-100">
            <Card.Body>
              <Card.Title className="service-title">LTL Freight</Card.Title>
              <Card.Text>
              Our Less-than-Truckload (LTL) service offers cost-effective shipping for smaller loads. With optimized routes and flexible scheduling, we cater to businesses of all sizes, delivering efficiency and savings without sacrificing reliability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
      <Row className='text-center'>
        <Link to='/shipperform'>
        <button className='button-11'>
          Get a rate Quote
        </button>
        </Link>
      </Row>
    </Container>
  );
};

export default Shipper;
