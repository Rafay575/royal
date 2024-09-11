import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ELDLoadTracking = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center form-title">ELD/Load Tracking</h1>
    <div className="eld-load-tracking-container">
      <p className="form-description">Please Answer the Following:</p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Consent Checkbox */}
        <Form.Group controlId="consentCheckbox" className="mb-3">
          <Form.Check
            type="checkbox"
            label="By checking this box, you are consenting to receive communications from the Allen Lund Company, which may include phone calls, text messages and/or emails for the purpose of providing load details or information related only to specific loads assigned to your company. You may revoke this consent at any time by texting 'STOP' to (888) 521-5863."
            {...register('consent', { required: true })}
          />
          {errors.consent && <span className="error-text">Consent is required.</span>}
        </Form.Group>

        {/* ELD Compliance */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Are you ELD Compliant?</Form.Label>
              <Form.Check
                type="radio"
                label="Yes"
                value="Yes"
                {...register('eldCompliant', { required: true })}
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                {...register('eldCompliant')}
              />
              {errors.eldCompliant && <span className="error-text">ELD compliance selection is required.</span>}
            </Form.Group>
          </Col>
        </Row>

        {/* ALC App Usage */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>ALC App (uses GPS/Phone)</Form.Label>
              <Form.Check
                type="radio"
                label="Yes"
                value="Yes"
                {...register('alcApp', { required: true })}
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                {...register('alcApp')}
              />
              {errors.alcApp && <span className="error-text">ALC App usage selection is required.</span>}
            </Form.Group>
          </Col>
        </Row>

        {/* Tracking Methods */}
        <h4>Do you use any of these tracking methods below?</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Check label="FourKites" type="radio" name="trackingMethod" value="FourKites" {...register('trackingMethod')} />
              <Form.Check label="Macropoint" type="radio" name="trackingMethod" value="Macropoint" {...register('trackingMethod')} />
              <Form.Check label="Project 44" type="radio" name="trackingMethod" value="Project 44" {...register('trackingMethod')} />
              <Form.Check label="Trucker Tools" type="radio" name="trackingMethod" value="Trucker Tools" {...register('trackingMethod')} />
              <Form.Group controlId="otherTrackingMethod">
                <Form.Label>Other</Form.Label>
                <Form.Control type="text" placeholder="Specify other tracking method" {...register('otherTrackingMethod')} />
              </Form.Group>
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
        .eld-load-tracking-container {
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
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 20px;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
        }
        .error-text {
          color: red;
          font-size: 0.875rem;
        }
        .form-group {
          margin-bottom: 15px;
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

export default ELDLoadTracking;
