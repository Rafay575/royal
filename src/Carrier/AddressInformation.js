import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddressInformation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="form-title text-center">Address Information</h1>
    <div className="address-form-container">
      <p className="form-description">
        You must complete the fields listed below. If you have any issues, please contact us for assistance.
      </p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Address Information Fields */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                {...register('companyName', { required: true })}
              />
              {errors.companyName && (
                <span className="error-text">Company Name is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>DBA</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter DBA"
                {...register('dba', { required: true })}
              />
              {errors.dba && (
                <span className="error-text">DBA is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                {...register('address', { required: true })}
              />
              {errors.address && (
                <span className="error-text">Address is required</span>
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Suite/Office</Form.Label>
              <Form.Control type="text" placeholder="Enter Suite/Office" {...register('suite')} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                {...register('city', { required: true })}
              />
              {errors.city && <span className="error-text">City is required</span>}
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>State/Province</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter State"
                {...register('state', { required: true })}
              />
              {errors.state && <span className="error-text">State/Province is required</span>}
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Zip Code"
                {...register('zip', { required: true })}
              />
              {errors.zip && <span className="error-text">Zip Code is required</span>}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" {...register('country', { required: true })}>
                <option value="USA">USA</option>
                {/* Add more countries if needed */}
              </Form.Control>
              {errors.country && <span className="error-text">Country is required</span>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Pay To Is Factoring Company</Form.Label>
              <Form.Control as="select" {...register('factoringCompany', { required: true })}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control>
              {errors.factoringCompany && (
                <span className="error-text">This field is required</span>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check if Pay To Address is the same as Main Address"
            {...register('sameAddress')}
          />
        </Form.Group>

        {/* Factoring Company Information */}
        <div className="factoring-section mt-5">
          <h4>Factoring Company Information</h4>
          <p>If you are factoring, fill in Pay To Information.</p>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pay To Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Pay To Company Name"
                  {...register('payToCompanyName', { required: true })}
                />
                {errors.payToCompanyName && <span className="error-text">Company Name is required</span>}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Pay To Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Pay To Address"
                  {...register('payToAddress', { required: true })}
                />
                {errors.payToAddress && <span className="error-text">Address is required</span>}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pay To Address 2</Form.Label>
                <Form.Control type="text" placeholder="Enter Pay To Address 2" {...register('payToAddress2')} />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Pay To City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Pay To City"
                  {...register('payToCity', { required: true })}
                />
                {errors.payToCity && <span className="error-text">City is required</span>}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Pay To State</Form.Label>
                <Form.Control as="select" {...register('payToState', { required: true })}>
                  <option value="">Select</option>
                  {/* Add state options */}
                </Form.Control>
                {errors.payToState && <span className="error-text">State is required</span>}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Pay To Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Zip Code"
                  {...register('payToZip', { required: true })}
                />
                {errors.payToZip && <span className="error-text">Zip Code is required</span>}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Pay To Country</Form.Label>
                <Form.Control as="select" {...register('payToCountry', { required: true })}>
                  <option value="USA">USA</option>
                  {/* Add more countries */}
                </Form.Control>
                {errors.payToCountry && <span className="error-text">Country is required</span>}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pay To Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Pay To Email"
                  {...register('payToEmail')}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>DUNS Number</Form.Label>
                <Form.Control type="text" placeholder="Enter DUNS Number" {...register('dunsNumber')} />
              </Form.Group>
            </Col>
          </Row>
        </div>

        {/* W-9 Identification Number and Certification Section */}
        <div className="w9-section mt-5">
          <h4>W-9 Identification Number and Certification</h4>
          <p>Please fill out the information below, then upload a copy of your W-9.</p>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Name (as shown on Income Tax return)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  {...register('w9Name', { required: true })}
                />
                {errors.w9Name && <span className="error-text">Name is required</span>}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Federal Id Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Federal Id Number"
                  {...register('federalId', { required: true })}
                />
                {errors.federalId && <span className="error-text">Federal Id is required</span>}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload W-9 Document</Form.Label>
            <Form.Control
              type="file"
              {...register('w9File', { required: true })}
            />
            {errors.w9File && <span className="error-text">W-9 File is required</span>}
          </Form.Group>
        </div>

        <div className="form-actions mt-4">
          <button type="submit" className=" button-11">
            Next 
          </button>
        </div>
      </Form>

      <style jsx>{`
        .address-form-container {
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
        .w9-section h4, .factoring-section h4 {
          font-size: 1.25rem;
          margin-bottom: 10px;
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

export default AddressInformation;
