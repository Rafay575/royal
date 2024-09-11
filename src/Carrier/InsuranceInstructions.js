import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const InsuranceInstructions = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center form-title">Carrier Registration - Insurance Instructions</h1>
    <div className="insurance-instructions-container">
      <p className="form-description">
        Please review the Insurance Requirements Below
      </p>
      <p className="form-details">
        Please note a carrier will not be certified until a valid certificate is received. The insurance requirements are shown below. Certificates must be sent directly from the carrier's insurance agent.
      </p>

      <div className="insurance-requirements">
        <p><strong>The Certificate MUST show the following</strong></p>
        <p><strong>Certificate Holder</strong> must be shown as:</p>
        <p>
          Allen Lund Company LLC<br />
          PO BOX 1369<br />
          La Canada, CA 91012
        </p>

        <p><strong>Coverages:</strong> Certificate must include</p>
        <ul>
          <li><strong>Cargo</strong><br />Minimum Cargo Limit: $100,000</li>
          <li><strong>Commercial Automobile Liability</strong><br />Minimum combined Single Limit: $1,000,000</li>
          <li><strong>General Liability</strong><br />Minimum Each Occurrence: $1,000,000<br />Minimum General Aggregate: $2,000,000</li>
        </ul>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Please Upload a current copy of valid Insurance</Form.Label>
              <Form.Control
                type="file"
                {...register('insuranceFile', { required: true })}
              />
              {errors.insuranceFile && (
                <span className="error-text">Insurance file is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        {/* Form Actions */}
        <div className="form-actions mt-4">
          <button type="submit" className=" button-11">
            Next 
          </button>
        </div>
      </Form>

      <style jsx>{`
        .insurance-instructions-container {
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
        .form-description {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 20px;
        }
        .form-details {
          font-size: 1rem;
          color: #333;
          margin-bottom: 20px;
        }
        .insurance-requirements {
          font-size: 1rem;
          margin-bottom: 20px;
        }
        .insurance-requirements ul {
          list-style-type: none;
          padding-left: 0;
        }
        .insurance-requirements ul li {
          margin-bottom: 10px;
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

export default InsuranceInstructions;
