import React, { useState } from "react";
import { Modal, Row, Col, Form, Spinner } from "react-bootstrap";
import axios from "axios"; // Import axios for HTTP requests
import { baseUrl } from "../api/url";

const ModalForm = ({ show, handleFormSubmit }) => {
  // Form state for each input field
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the spinner while the request is being processed

    try {
      // Make POST request to your API
      const response = await axios.post(`${baseUrl}/api/submit`, formData);

      console.log("Form Data Submitted:", response.data);
      handleFormSubmit(formData); // Trigger the parent handler (optional)
      setLoading(false); // Stop the spinner after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to submit the form.");
      setLoading(false); // Stop the spinner on error
    }
  };

  return (
    <Modal show={show}  centered>
      <Modal.Header>
        <Modal.Title>Start Your Journey with Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* First Name */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label className='form-title' >First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            {/* Last Name */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label className='form-title' >Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            {/* Email */}{" "}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className='form-title' >Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            {/* Phone */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className='form-title' >Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Error message */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* Submit Button */}
          <Row className="text-center">
            <div>
              <button className="button-11 " type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
