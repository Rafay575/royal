import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios  from 'axios';
import { baseUrl } from '../api/url';
const CompanyAgreement = ({ formData1, formData2, incPage }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [time, setTime] = useState(new Date());
  // Handler for checking/unchecking agreement box
  const userId = useSelector((state) => state.user.id); // Get the reg_id (userId)

  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isAgreed) {
      alert("You must agree to the terms and conditions before submitting.");
    } else {
      try {
        const response = await axios.post(`${baseUrl}/api/company-agreement/submit-agreement`, {
          reg_id: userId // Send the reg_id (userId) to the API
        });

        if (response.status === 200) {
          console.log('Agreement submitted successfully');
          incPage(); // Move to the next page
        }
      } catch (error) {
        console.error('Error submitting agreement:', error);
      }
    }
  };
  const formatDateTime = (time) => {
    const optionsDate = {
      timeZone: "America/New_York", // Change this for different timezones
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    const optionsTime = {
      timeZone: "America/New_York", // Ensure the timezone matches the date's
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    const formattedDate = time.toLocaleDateString('en-US', optionsDate);
    const formattedTime = time.toLocaleTimeString('en-US', optionsTime);

    return `${formattedDate} ${formattedTime}`;
  };


  return (
    <>
      <h5 className="mt-4 mb-5 form-title text-center " style={{ fontWeight: 500 }}>Company Agreement</h5>

      <div className="company-agreement-container">
        <Row className='my-4'>
          <Col>
            <p className='text-center'><strong>Agreement Date:</strong> {formatDateTime(time)}</p>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <p><strong>Carrier Name:</strong> {formData1.companyName}</p>
            <p><strong>Address:</strong> {formData1.address}</p>
            <p><strong>City:</strong> {formData1.city}</p>
            <p><strong>State:</strong> {formData1.state}</p>
            <p><strong>Zip:</strong> {formData1.zip}</p>
            <p><strong>Contact No:</strong> {formData2.corporatePhoneNumber}</p>
            <p><strong>US DOT Number:</strong> {formData1.dotnum}</p>
            <p><strong>Email:</strong> {formData2.corporateEmail}</p>
          </Col>
          <Col className='text-left'>
            <p><strong>Broker Name:</strong> Royal Star Logistics </p>
            <p><strong>Address:</strong> 2314 1st PL SW  </p>
            <p><strong>City:</strong> Vero Beach</p>
            <p><strong>State:</strong> Florida</p>
            <p><strong>Zip:</strong> 32962</p>
            <p><strong>Contact No:</strong> (319)419-7999</p>
            <p><strong>US DOT Number:</strong> 3970658</p>
            <p><strong>Email:</strong> contact@royalstarlogistics.us</p>
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
              Next
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
