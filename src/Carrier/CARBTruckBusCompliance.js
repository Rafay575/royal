import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CARBTruckBusCompliance = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center form-title">CARB Truck and Bus Compliance</h1>
    <div className="carb-compliance-form-container">

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Compliance Question */}
        <div className="compliance-question">
          <p><strong>Truck and Bus Regulation</strong></p>
          <p>Are you California Air Resources Board (CARB) Truck and Bus Regulation compliant?</p>
          <p>To declare that you are Truck and Bus compliant, you must have a Certificate of Reported Compliance (see example image) which you will be asked to upload here. CARB Truck and Bus is NOT the same as CARB TRU (Transport Refrigeration Unit) and Drayage regulations.</p>
          
          <Row className="mb-3">
            <Col md={6}>
              <Form.Check
                type="radio"
                label="Yes"
                value="Yes"
                {...register('carbCompliant', { required: true })}
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                {...register('carbCompliant')}
              />
              {errors.carbCompliant && <span className="error-text">Compliance selection is required</span>}
            </Col>
            <Col md={6} className="example-certificate">
              <img src="./assets/img/about/CARB Sample.jpg" alt="Example Certificate" style={{ maxWidth: '200px' }} />
            </Col>
          </Row>
        </div>

        {/* Information Links */}
        <div className="compliance-links mb-4">
          <p><strong>Learn more link:</strong></p>
          <ul>
            <li><a href="https://www.arb.ca.gov/msprog/onrdiesel/ordiese.htm" target="_blank" rel="noopener noreferrer">https://www.arb.ca.gov/msprog/onrdiesel/ordiese.htm</a></li>
            <li><a href="https://ww3.arb.ca.gov/msprog/onrdiesel/documents/printcert.pdf" target="_blank" rel="noopener noreferrer">https://ww3.arb.ca.gov/msprog/onrdiesel/documents/printcert.pdf</a></li>
            <li><a href="https://ssl.arb.ca.gov/trucrs_reporting/login.php" target="_blank" rel="noopener noreferrer">https://ssl.arb.ca.gov/trucrs_reporting/login.php</a></li>
          </ul>
        </div>

        {/* Form Actions */}
        <div className="form-actions mt-4">
          <button type="submit" className=" button-11">
            Next 
          </button>
        </div>
      </Form>

      <style jsx>{`
        .carb-compliance-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 0 auto;
        }
        .form-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .compliance-question {
          font-size: 1rem;
          margin-bottom: 20px;
        }
        .example-certificate {
          text-align: center;
        }
        .compliance-links ul {
          list-style-type: none;
          padding-left: 0;
        }
        .compliance-links ul li {
          margin-bottom: 10px;
        }
        .compliance-links a {
          color: #007bff;
          text-decoration: none;
        }
        .error-text {
          color: red;
          font-size: 0.875rem;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .form-actions {
            justify-content: center;
          }
        }
      `}</style>
    </div>
    </>

  );
};

export default CARBTruckBusCompliance;
