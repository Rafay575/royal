import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RegistrationCriteria.css';  // Custom CSS for styling
import NavbarOne from './NavbarOne';
import { useNavigate } from 'react-router-dom';

const RegistrationCriteria = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarOne />
      <section>

      {/* Banner Section */}
      <div className="banner-section  pd-top-120 pb-5 "  style={{ backgroundImage: 'url("assets/img/banner/bg.png")' }}>
        <Container>
          <h1 className="banner-title">Registration Criteria</h1>
        </Container>
      </div>

      {/* Content Section */}
      <section className="criteria-section py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <p className="lead" style={{fontSize:'14px'}}>
                Thank you for your interest in becoming an approved carrier for Royal Star Logistics.
                Below are some of our key requirements in order for your company to qualify as an
                approved carrier. All elements identified as 'required' must be finalized in order
                for the qualification process to be completed. If your company is not compliant with one or
                several of the qualification criteria, you may return at another time to register once
                the non-compliant items are corrected.
              </p>

              <h4 className="mt-4 mb-4">To become an approved carrier, you must meet the following criteria:</h4>

              <ul className="list-criteria" >
                <li style={{fontSize:'12px'}}>Provide your DOT# to begin registration. You must have at least six (6) months of active Carrier authority.</li>
                <li style={{fontSize:'12px'}}>Carrier Contact must be authorized to enter into and bind your company to the Transportation Services Contract.</li>
                <li style={{fontSize:'12px'}}>Validate or provide the carrier contact information.</li>
                <li style={{fontSize:'12px'}}>Submit an electronic W9 form.</li>
                <li style={{fontSize:'12px'}}>Read and adhere to Carrier Policies.</li>
                <li style={{fontSize:'12px'}}>Read and ACCEPT the "Motor Carrier Agreement".</li>
                <li style={{fontSize:'12px'}}>
                  Provide a Certificate of Insurance that meets the minimum requirements:
                  <ul className="list-insurance">
                    <li style={{fontSize:'12px'}}>$100,000 Cargo Coverage</li>
                    <li style={{fontSize:'12px'}}>$1,000,000 Auto Coverage</li>
                  </ul>
                </li>
                <li style={{fontSize:'12px'}}>Safety Rating must be Satisfactory or None.</li>
                <li style={{fontSize:'12px'}}>Companies must have active Common, Contract, or Intrastate Authority.</li>
              </ul>

              <div className="text-center mt-5">
                <button className="button-11 btn-lg px-5" onClick={() => navigate('/login')}>
                  Go to Next Step
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </section>

    </>
  );
};

export default RegistrationCriteria;
