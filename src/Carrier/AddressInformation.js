import React, { useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 
import { baseUrl } from '../api/url'; 
import { useSelector } from 'react-redux'; 

const AddressInformation = ({ incPage, formData, setFormData }) => {
  const location = useLocation();
  const searchResult = location.state || {}; 
  const userId = useSelector((state) => state.user.id);
  useEffect(() => {
    if (searchResult) {
      setFormData(prevData => ({
        ...prevData,
        dotnum: searchResult.dotNumber || '',
        companyName: searchResult.legalName || '',
        address: searchResult.phyStreet || '',
        city: searchResult.phyCity || '',
        state: searchResult.phyState || '',
        zip: searchResult.phyZipcode || '',
        country: searchResult.phyCountry || 'USA',
      }));
    }
  }, [searchResult]);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Store file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object for sending multipart form data
    const formDataToSend = new FormData();
    formDataToSend.append('reg_id', userId);
    formDataToSend.append('dotnum', formData.dotnum);
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('dba', formData.dba);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('suite', formData.suite);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('zip', formData.zip);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('factoringCompany', formData.factoringCompany);
    formDataToSend.append('sameAddress', formData.sameAddress);
    formDataToSend.append('payToCompanyName', formData.payToCompanyName);
    formDataToSend.append('payToAddress', formData.payToAddress);
    formDataToSend.append('payToAddress2', formData.payToAddress2);
    formDataToSend.append('payToCity', formData.payToCity);
    formDataToSend.append('payToState', formData.payToState);
    formDataToSend.append('payToZip', formData.payToZip);
    formDataToSend.append('payToCountry', formData.payToCountry);
    formDataToSend.append('payToEmail', formData.payToEmail);
    formDataToSend.append('dunsNumber', formData.dunsNumber);
    formDataToSend.append('w9Name', formData.w9Name);
    formDataToSend.append('federalId', formData.federalId);

    // Append file only if it's present
    if (formData.w9File) {
      formDataToSend.append('w9File', formData.w9File); // Append the file to FormData
    }

    try {
      // Post form data to backend API
      const response = await axios.post(`${baseUrl}/api/submit-form`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Form submitted successfully:', response.data);
      incPage(); // Call the increment page function if submission is successful
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <>
      <h1 className="form-title text-center">Address Information</h1>
      <div className="address-form-container">
        <p className="form-description">
          You must complete the fields listed below. If you have any issues, please contact us for assistance.
        </p>

        <Form onSubmit={handleSubmit}>
          {/* Form fields setup as before */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
                {formData.companyName === '' && (
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
                  name="dba"
                  value={formData.dba}
                  onChange={handleChange}
                />

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
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {formData.address === '' && (
                  <span className="error-text">Address is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Suite/Office</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Suite/Office"
                  name="suite"
                  value={formData.suite}
                  onChange={handleChange}
                />
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
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                {formData.city === '' && (
                  <span className="error-text">City is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>State/Province</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                {formData.state === '' && (
                  <span className="error-text">State/Province is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Zip Code"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
                {formData.zip === '' && (
                  <span className="error-text">Zip Code is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                {formData.country === '' && (
                  <span className="error-text">Country is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Pay To Is Factoring Company</Form.Label>
                <Form.Control
                  as="select"
                  name="factoringCompany"
                  value={formData.factoringCompany}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
                {formData.factoringCompany === '' && (
                  <span className="error-text">This field is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check if Pay To Address is the same as Main Address"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Additional details for each field replicated here as previously described */}

          {/* Factoring Company Information Section */}
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
                    name="payToCompanyName"
                    value={formData.payToCompanyName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Pay To Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pay To Address"
                    name="payToAddress"
                    value={formData.payToAddress}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Pay To Address 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pay To Address 2"
                    name="payToAddress2"
                    value={formData.payToAddress2}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Pay To City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pay To City"
                    name="payToCity"
                    value={formData.payToCity}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Pay To State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pay To State"
                    name="payToState"
                    value={formData.payToState}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Pay To Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Zip Code"
                    name="payToZip"
                    value={formData.payToZip}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Pay To Country</Form.Label>
                  <Form.Control
                    as="select"
                    name="payToCountry"
                    value={formData.payToCountry}
                    onChange={handleChange}
                  >
                    <option value="USA">USA</option>
                  </Form.Control>
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
                    name="payToEmail"
                    value={formData.payToEmail}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>DUNS Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter DUNS Number"
                    name="dunsNumber"
                    value={formData.dunsNumber}
                    onChange={handleChange}
                  />
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
                  <Form.Label>Name (as shown on your income tax return)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="w9Name"
                    value={formData.w9Name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Federal Id Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Federal Id Number"
                    name="federalId"
                    value={formData.federalId}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload W-9 Document</Form.Label>
              <Form.Control
                type="file"
                name="w9File"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <div className="form-actions mt-4">
            <button type="submit" className="button-11">
              Next
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddressInformation;