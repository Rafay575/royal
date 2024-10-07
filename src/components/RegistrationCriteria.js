import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './RegistrationCriteria.css';  // Custom CSS for styling
import NavbarOne from './NavbarOne';
import { useNavigate } from 'react-router-dom';

const RegistrationCriteria = () => {
  const navigate = useNavigate()
  return (<>
        <NavbarOne />
    <section>
      {/* Banner Section */}
      <div className="banner-section  pd-top-120 pb-5 "  style={{ backgroundImage: 'url("assets/img/banner/bg.png")' }}>
        <Container>
          <h1 className="banner-title">Registration Criteria</h1>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="criteria-section">
        <Row>
          <Col>
            <p>
              Thank you for your interest in becoming an approved carrier for Royal Star Logistics.
              Below are some of our key requirements in order for your company to qualify as an
              approved carrier. All elements identified as 'required' must be finalized in order
              for the qualification process to be completed. If your company is not compliant to one or
              several of the qualification criteria, you may return at another time to register once
              the non-compliant items are corrected.
            </p>
            <h4>To become an approved carrier, you must provide and meet the following criteria:</h4>
            <ul>
              <li>Provide your DOT# to begin registration. You must have at least six (6) months or more active Carrier authority.</li>
              <li>Carrier Contact must be authorized to enter into and bind your company to the Transportation Services Contract.</li>
              <li>Validate or provide the carrier contact information.</li>
              <li>Submit an electronic W9.</li>
              <li>Read and adhere to Carrier Policies.</li>
              <li>Read and ACCEPT the "Motor Carrier Agreement".</li>
              <li>
                Provide a Certificate of Insurance that meets the insurance minimum requirements below.
                Certificates must be submitted from your insurance producer (agent):
                <ul>
                  <li>$100,000 Cargo Coverage</li>
                  <li>$1,000,000 Auto Coverage</li>
                </ul>
              </li>
              <li>Safety Rating must be Satisfactory or None.</li>
              <li>Companies must have active Common, Contract or Intrastate Authority.</li>
            </ul>
            <Button variant="primary" className="mt-4 btn btn-base " onClick={()=>navigate('/login')} >Go to Next Step</Button>
          </Col>
        </Row>
      </Container>
    </section>
  </>
  );
};

export default RegistrationCriteria;
