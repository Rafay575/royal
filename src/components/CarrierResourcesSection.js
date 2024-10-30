import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CarrierResourcesSection = () => {
  const navigate = useNavigate()
  return (
    <section style={{ padding: '40px 0', }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 style={{
              fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color:
                "#fa4318"
            }}>
              Shipper Resources
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              At Royal Star Logistics, we understand that your freight is crucial to your business, and we are dedicated to providing top-tier service for all your shipping needs. Our Shipper Solutions team is committed to working closely with you to ensure seamless and efficient transportation of your goods from pick-up to delivery.



            </p>
            <hr />
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              We partner with a trusted network of pre-screened carriers who meet our stringent requirements for safety and reliability. All of our carriers are thoroughly vetted and regularly monitored through platforms like Internet Truckstop, Carrier 411, and the FMCSA to ensure compliance with industry standards.


            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              By choosing Royal Star Logistics, you gain access to a team that will prioritize your freight, providing personalized service and real-time updates. We are ready to help streamline your shipping process, reduce costs, and ensure on-time delivery, every time.



            </p>
            <hr />
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              To learn more about how we can assist with your shipping needs, contact our Shipper Solutions team at 772 501 2777 or email us at contact@royalstarlogistics.us.
            </p>
            <div style={{ textAlign: 'center' }}>
              <Button className='btn btn-base' onClick={() => navigate("/shipperform")} >Get A Rate Quote</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarrierResourcesSection;
