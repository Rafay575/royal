import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServiceCard = ({ title, description }) => {
  return (
    <Col xs={11} sm={6} lg={3} className="mb-5">
      <h4 className="mb-3">{title}</h4>
      <p className="mb-3 text-secondary">{description}</p>
    </Col>
  );
};

const Services = ({ services }) => {
  return (
    <section className="py-5 py-xl-8">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={8} xl={7} xxl={6} className="text-center">
          <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>What Sets Us Apart</h2>
            <p className="text-secondary mb-5">
              We are dedicated to delivering exceptional services that drive success and transform your business. With a commitment to excellence, we take pride in offering a comprehensive range of services.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container className="overflow-hidden">
        <Row className="gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-left">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </Row>
      </Container>
    </section>
  );
};


export default Services;
