import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CompanyAgreement = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  // Handler for checking/unchecking agreement box
  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAgreed) {
      alert("You must agree to the terms and conditions before submitting.");
    } else {
      // Submit form logic
      console.log("Form submitted with agreement.");
    }
  };

  return (
    <>
    <h5 className="mt-4 mb-5 form-title text-center " style={{fontWeight:500}}>Company Agreement</h5>
   
    <div className="company-agreement-container">
      <Row>
        <Col>
          <p><strong>Carrier Name:</strong> [Your Carrier Name]</p>
          <p><strong>Address:</strong> [Carrier Address]</p>
          <p><strong>City, State & Zip:</strong> [City, State, Zip]</p>
          <p><strong>Contact:</strong> [Contact Info]</p>
        </Col>
        <Col>
          <p><strong>Agreement Date:</strong> 09/11/2024 12:17:24 AM</p>
          <p><strong>US DOT Number:</strong> [Your US DOT Number]</p>
          <p><strong>MC Number:</strong> 3451762</p>
          <p><strong>Phone:</strong> [Carrier Phone]</p>
          <p><strong>Email:</strong> [Carrier Email]</p>
        </Col>
      </Row>

      <h4>Broker - Carrier Agreement</h4>
      <p>
        This Broker-Carrier Agreement ("Agreement") is entered into this 11th day of September, 2024, by and between Allen Lund Company, LLC, a Registered Property Broker under USDOT# 2212129 and MC-163523 ("BROKER"), and [Your Company Name], a Registered Motor Carrier under USDOT# and MC# [Your MC Number], to be referred to collectively as the “Parties”...
      </p>

      {/* Agreement Acknowledgement Section */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="agreementCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions of this agreement and acknowledge that this agreement is legally binding."
            checked={isAgreed}
            onChange={handleAgreementChange}
          />
        </Form.Group>

      
        <div className="text-center form-actions mt-4">
          <button type="submit" className=" button-11" disabled={!isAgreed}>
          Submit Agreement
          </button>
        </div>
      </Form>

      <style jsx>{`
        .company-agreement-container {
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 20px auto;
        }
        p {
          margin-bottom: 10px;
        }
        h3, h4 {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
    </>

  );
};

export default CompanyAgreement;
