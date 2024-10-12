import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Col xs={12} sm={12} lg={2} className="mb-4 card mx-2 py-2" style={{border:'6px solid #244855',background:'#244855',color:'rgb(36, 72, 85,0.5)'}}>
      <div className="text-center ">
        <img src={icon} alt={title} className="mb-3" style={{ width: '50px', height: '50px' }} />
        <h5 className="mb-2" style={{color:'#ffffff'}}>{title}</h5>
        <p className="" style={{color:'#fff '}}>{description}</p>
      </div>
    </Col>
  );
};

const Services = ({ services }) => {
  return (
    <section className="py-4 py-lg-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} xl={7} className="text-center">
            <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>What Sets Us Apart</h2>
            <p className="text-secondary mb-4">
              We are dedicated to delivering exceptional services that drive success and transform your business. With a commitment to excellence, we take pride in offering a comprehensive range of services.
            </p>
            <hr className="w-50 mx-auto mb-4 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container className="overflow-hidden">
        <Row className="gy-4 gx-2 gx-md-3 gx-xl-4 justify-content-center">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
