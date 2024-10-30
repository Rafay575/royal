import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMoneyCheckAlt, FaUniversity, FaFileAlt } from 'react-icons/fa';  // Import specific icons from FontAwesome
import './CarrierBenefits.css';  // Custom CSS

const CarrierBenefits = () => {
  return (
    <section className="carrier-benefits-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="carrier-title">Carrier Benefits</h2>
          <p className="carrier-subtitle">
            Royal Star Logistics appreciates working with a wide variety of carriers whether dry vans, reefers, or flatbeds.
          </p>
        </div>
        <Row className="text-center">
          <Col md={4} className="benefit-item">
            <FaMoneyCheckAlt className="benefit-icon" /> {/* Payment Terms Icon */}
            <h4 className="benefit-title">Payment Terms</h4>
            <p className="benefit-description">
              Our payment terms are as follows: <br />
              <strong>Direct to a Carrier</strong> – RSL payment 14 to 21 days after the approval date of paperwork.
        
            </p>
          </Col>
          <Col md={4} className="benefit-item">
            <FaUniversity className="benefit-icon" /> {/* Direct Deposit Icon */}
            <h4 className="benefit-title">Direct Deposit</h4>
            <p className="benefit-description">
              Get paid easier with Royal Star Logistics’s free direct deposit. All RSL contracted carriers are eligible to receive direct deposit.
              
            </p>
          </Col>
          <Col md={4} className="benefit-item">
            <FaFileAlt className="benefit-icon" /> {/* Documentation Icon */}
            <h4 className="benefit-title">Centralized Documentation</h4>
            <p className="benefit-description">
              Our Carrier Resources department manages all incoming documents so that your information is processed efficiently.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarrierBenefits;
