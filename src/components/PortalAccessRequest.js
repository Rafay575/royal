import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spinners from './Spinners';
import { baseUrl } from '../api/url';

const PortalAccessRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await fetch(`${baseUrl}/api/auth/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setLoading(false);
        alert('OTP sent successfully! Check your email.'); // Use browser alert
        reset();
        navigate("/login");
      } else {
        setLoading(false);
        alert('Error: ' + result.error); // Use browser alert
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setLoading(false);
      alert('An error occurred while sending OTP.'); // Use browser alert
    }
  };

  return (
    <div
      className="portal-access-page"
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("assets/img/banner/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(10px)",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Spinners />
        </div>
      )}
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <div
              className="portal-access-box p-4 shadow-lg"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                border: '1px solid #ddd',
              }}
            >
              <h4
                className="text-center mb-4"
                style={{
                  padding: '9px', marginLeft:"5px",
                  borderRadius: '9px ,marginLeft:"5px"9px ,marginLeft:"5px"0 0',
                  color: '#000',
                  fontSize: '1.5rem',
                }}
              >
                Portal Access Request
              </h4>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Address */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="py-2"
                    style={{ borderRadius: '8px', fontSize: '0.7rem' }}
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <p style={{ color: 'red', fontSize: '9px', marginLeft:"5px" }}>{errors.email.message}</p>}
                </Form.Group>

                {/* Company Name */}
                <Form.Group controlId="company" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    className="py-2"
                    style={{ borderRadius: '8px', fontSize: '0.7rem' }}
                    {...register('company', { required: 'Company name is required' })}
                  />
                  {errors.company && <p style={{ color: 'red', fontSize: '9px', marginLeft:"5px" }}>{errors.company.message}</p>}
                </Form.Group>

                {/* Contact Name */}
                <Form.Group controlId="contact" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Contact Name"
                    className="py-2"
                    style={{ borderRadius: '8px', fontSize: '0.7rem' }}
                    {...register('contact', { required: 'Contact name is required' })}
                  />
                  {errors.contact && <p style={{ color: 'red', fontSize: '9px', marginLeft:"5px" }}>{errors.contact.message}</p>}
                </Form.Group>

                {/* Address */}
                <Form.Group controlId="address" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Address, City, ST, Zip Code"
                    className="py-2"
                    style={{ borderRadius: '8px', fontSize: '0.7rem' }}
                    {...register('address', { required: 'Address is required' })}
                  />
                  {errors.address && <p style={{ color: 'red', fontSize: '9px', marginLeft:"5px" }}>{errors.address.message}</p>}
                </Form.Group>

                {/* Phone Number */}
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="py-2"
                    style={{ borderRadius: '8px', fontSize: '0.7rem' }}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p style={{ color: 'red', fontSize: '9px', marginLeft:"5px" }}>{errors.phone.message}</p>}
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <button className="button-11" style={{ width: '100%' }}>
                    Submit
                  </button>
                </div>
                <p className="text-center mt-1">
                  Already have an account?{' '}
                  <span style={{ fontWeight: 700, color: '#f22c0f', cursor:"pointer" }} onClick={() => navigate('/login')}>Login</span>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortalAccessRequest;
