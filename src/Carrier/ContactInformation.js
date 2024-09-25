import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactInformation = ({currentPage,  incPage}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    incPage()
  };

  return (
    <>
      <h1 className="form-title text-center">Contact Information</h1>
    <div className="contact-form-container">
      <p className="form-description">
        Please provide the contact details for different departments.
      </p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Corporate Contact Section */}
        <h4>Corporate Contact</h4>
        <p>This person has legal authority to accept the terms of the Carrier Agreement.</p>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First & Last Name"
                {...register('corporateFullName', { required: true })}
              />
              {errors.corporateFullName && (
                <span className="error-text">Full Name is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
             
              <Form.Control
                type="text"
                placeholder="Enter title"
                {...register('corporateTitle', { required: true })}
              />
            
              {errors.corporateTitle && (
                <span className="error-text">Title is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                {...register('corporatePhoneNumber', { required: true })}
              />
              {errors.corporatePhoneNumber && (
                <span className="error-text">Phone Number is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Extension</Form.Label>
              <Form.Control type="text" placeholder="Ext" {...register('corporatePhoneExt')} />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register('corporateEmail', { required: true })}
              />
              {errors.corporateEmail && (
                <span className="error-text">Email is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control type="text" placeholder="Cell Phone" {...register('corporateCellPhone')} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Fax</Form.Label>
              <Form.Control type="text" placeholder="Fax" {...register('corporateFax')} />
            </Form.Group>
          </Col>
        </Row>

        {/* Accounting Section */}
        <h4>Accounting</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First & Last Name"
                {...register('accountingFullName')}
              />
              {errors.accountingFullName && (
                <span className="error-text">Full Name is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                {...register('accountingTitle')}
              />
              {errors.accountingTitle && (
                <span className="error-text">Title is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                {...register('accountingPhoneNumber')}
              />
              {errors.accountingPhoneNumber && (
                <span className="error-text">Phone Number is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Extension</Form.Label>
              <Form.Control type="text" placeholder="Ext" {...register('accountingPhoneExt')} />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register('accountingEmail')}
              />
              {errors.accountingEmail && (
                <span className="error-text">Email is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control type="text" placeholder="Cell Phone" {...register('accountingCellPhone')} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Fax</Form.Label>
              <Form.Control type="text" placeholder="Fax" {...register('accountingFax')} />
            </Form.Group>
          </Col>
        </Row>

        {/* Dispatch Section */}
        <h4>Dispatch</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First & Last Name"
                {...register('dispatchFullName')}
              />
              {errors.dispatchFullName && (
                <span className="error-text">Full Name is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                {...register('dispatchTitle')}
              />
              {errors.dispatchTitle && (
                <span className="error-text">Title is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                {...register('dispatchPhoneNumber')}
              />
              {errors.dispatchPhoneNumber && (
                <span className="error-text">Phone Number is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Extension</Form.Label>
              <Form.Control type="text" placeholder="Ext" {...register('dispatchPhoneExt')} />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register('dispatchEmail')}
              />
              {errors.dispatchEmail && (
                <span className="error-text">Email is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control type="text" placeholder="Cell Phone" {...register('dispatchCellPhone')} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Fax</Form.Label>
              <Form.Control type="text" placeholder="Fax" {...register('dispatchFax')} />
            </Form.Group>
          </Col>
        </Row>

        <div className="form-actions mt-4">
          <button type="submit" className=" button-11">
            Next 
          </button>
        </div>
      </Form>

      <style jsx>{`
        .contact-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 1100px;
          margin: 0 auto;
        }
           .form-control{
            font-size:12px !important
          }
             .error-text{
            font-size:12px !important
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

export default ContactInformation;
