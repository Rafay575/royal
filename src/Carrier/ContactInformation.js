import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux'; 
import { baseUrl } from '../api/url';

const ContactInformation = ({ incPage,formData, setFormData,toggleMainLoading }) => {
  const userId = useSelector((state) => state.user.id);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
      if (!formData.corporateFullName) newErrors.corporateFullName = 'Full Name is required';
      if (!formData.corporateTitle) newErrors.corporateTitle = 'Title is required';
      if (!formData.corporatePhoneNumber) newErrors.corporatePhoneNumber = 'Phone Number is required';
      if (!formData.corporateEmail) newErrors.corporateEmail = 'Email is required';

    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const formDataWithRegId = {
          ...formData,
          reg_id: userId, // Add reg_id here
        };
        const response = await axios.post(`${baseUrl}/api/contact-carrier/submit`, formDataWithRegId);
        console.log('Form data submitted successfully:', response.data);
       

        incPage();
      } catch (error) {
       
        console.error('Error submitting form data:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <h5 className="mt-5 text-center">Contact Information</h5>
      <div className="p-5">
        <Form onSubmit={handleSubmit} >
          {/* Corporate Contact Section */}
          <h6 className='mb-3'>Corporate Contact</h6>
          <p className='form-title'>This person has legal authority to accept the terms of the Carrier Agreement.</p>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First & Last Name"
                  name="corporateFullName"
                  value={formData.corporateFullName}
                  onChange={handleChange}
                />
                {errors.corporateFullName && (
                  <span className="error-text">Full Name is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="corporateTitle"
                  value={formData.corporateTitle}
                  onChange={handleChange}
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
                <Form.Label className='form-title' >Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="corporatePhoneNumber"
                  value={formData.corporatePhoneNumber}
                  onChange={handleChange}
                />
                {errors.corporatePhoneNumber && (
                  <span className="error-text">Phone Number is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className='form-title' >Extension</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ext"
                  name="corporatePhoneExt"
                  value={formData.corporatePhoneExt}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className='form-title' >Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="corporateEmail"
                  value={formData.corporateEmail}
                  onChange={handleChange}
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
                <Form.Label className='form-title' >Cell Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cell Phone"
                  name="corporateCellPhone"
                  value={formData.corporateCellPhone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Fax</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fax"
                  name="corporateFax"
                  value={formData.corporateFax}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Accounting Section */}
          <h6 className='mb-3 mt-5'>Accounting</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First & Last Name"
                  name="accountingFullName"
                  value={formData.accountingFullName}
                  onChange={handleChange}
                />
                {errors.accountingFullName && (
                  <span className="error-text">Full Name is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="accountingTitle"
                  value={formData.accountingTitle}
                  onChange={handleChange}
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
                <Form.Label className='form-title' >Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="accountingPhoneNumber"
                  value={formData.accountingPhoneNumber}
                  onChange={handleChange}
                />
                {errors.accountingPhoneNumber && (
                  <span className="error-text">Phone Number is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className='form-title' >Extension</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ext"
                  name="accountingPhoneExt"
                  value={formData.accountingPhoneExt}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className='form-title' >Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="accountingEmail"
                  value={formData.accountingEmail}
                  onChange={handleChange}
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
                <Form.Label className='form-title' >Cell Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cell Phone"
                  name="accountingCellPhone"
                  value={formData.accountingCellPhone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Fax</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fax"
                  name="accountingFax"
                  value={formData.accountingFax}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Dispatch Section */}
          <h6 className='mb-3 mt-5'>Dispatch</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First & Last Name"
                  name="dispatchFullName"
                  value={formData.dispatchFullName}
                  onChange={handleChange}
                />
                {errors.dispatchFullName && (
                  <span className="error-text">Full Name is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="dispatchTitle"
                  value={formData.dispatchTitle}
                  onChange={handleChange}
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
                <Form.Label className='form-title' >Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="dispatchPhoneNumber"
                  value={formData.dispatchPhoneNumber}
                  onChange={handleChange}
                />
                {errors.dispatchPhoneNumber && (
                  <span className="error-text">Phone Number is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className='form-title' >Extension</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ext"
                  name="dispatchPhoneExt"
                  value={formData.dispatchPhoneExt}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className='form-title' >Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="dispatchEmail"
                  value={formData.dispatchEmail}
                  onChange={handleChange}
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
                <Form.Label className='form-title' >Cell Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cell Phone"
                  name="dispatchCellPhone"
                  value={formData.dispatchCellPhone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Fax</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fax"
                  name="dispatchFax"
                  value={formData.dispatchFax}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="form-actions mt-4">
            <button type="submit" className=" button-11">
              Next
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactInformation;
