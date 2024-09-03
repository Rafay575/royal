import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CarrierResourcesSection = () => {
  return (
    <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 style={{  fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
              Carrier Resources
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              The Allen Lund Company recognizes that your freight is your business. Our Carrier Resources department is dedicated to ensuring that all ALC carriers comply with our high standards so that your freight is protected from the time of loading to delivery.
            </p>
            <hr />
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              All authorized Allen Lund Company carriers are pre-screened and monitored by our Carrier Resources department. New carriers are reviewed via Internet Truckstop, Carrier 411, and TIA websites.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              In addition, the Allen Lund Company will conduct monthly investigations within the FMCSA to confirm carrier/driver ratings and take necessary steps to remove carriers not rated at a level in keeping with ALC standards.
            </p>
            <hr />
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              If you would like to contact our Carrier Resources Department with any further questions you may call this number: <strong>800.811.0083</strong> or you may email <a href="mailto:carrierresources@allenlund.com">carrierresources@allenlund.com</a>.
            </p>
            <div style={{ textAlign: 'center' }}>
              <Button variant="primary" className='' href="mailto:carrierresources@allenlund.com">Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarrierResourcesSection;
