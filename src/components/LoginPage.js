import React, { useState } from 'react';
import { Form,  Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../api/url';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        email: data.username,  // Assuming the API expects 'email' instead of 'username'
        password: data.password
      });

      // Handle successful login
      const { token ,id } = response.data;
      
      // Store the token in localStorage or state management
      localStorage.setItem('authToken', token);

      setLoading(false); // Stop loading
      setSuccess('Login successful! Redirecting...');
      
      setTimeout(() => {
        navigate('/carrierdashboard', { state: { id: id } });  // Change this to your protected route
      }, 2000);
    } catch (error) {
      // Handle login error
      setLoading(false); // Stop loading
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred during login.');
      }
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("assets/img/banner/bg.png")', // Add a background image here if needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-box p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '10px' }}>
              <h3 className="text-center mb-4" style={{ color: '#fa4318' }}>
                Login to Your Account
              </h3>
              <p className="text-center mb-4">If you have already signed up, please enter Username/Password below and click on 'Login' to proceed.</p>

              {/* Display Error Alert */}
              {error && <Alert variant="danger" className="text-center">{error}</Alert>}

              {/* Display Success Alert */}
              {success && <Alert variant="success" className="text-center">{success}</Alert>}

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    {...register('username', { required: true })}
                  />
                  {errors.username && <p className="text-danger" style={{ color: 'red', fontSize: '9px',marginLeft:"5px" }}>Username is required</p>}
                </Form.Group>

                <Form.Group controlId="password" className='mt-3'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', { required: true })}
                  />
                  {errors.password && <p className="text-danger" style={{ color: 'red', fontSize: '9px',marginLeft:"5px" }}>Password is required</p>}
                </Form.Group>

                <button
                
                  className="w-100 button-11 mt-4"
                 
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    'Login'
                  )}
                </button>
              </Form>

              <div className="text-center mt-4">
                <p>Don't have an account?{' '}
                  <Link to="/access">
                    <span style={{ color: '#fa4318', fontWeight: 700 }}>
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Loading spinner overlay */}
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(10px)",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
