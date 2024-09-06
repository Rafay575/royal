import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
            <div className="login-box p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
              <h3 className="text-center mb-4" style={{ color: '#fa4318' }}>
                Login to Your Account
              </h3>
              <p className="text-center mb-4">If you have already signed up, please enter Username/Password below and click on 'Login' to proceed.</p>
              <Form onSubmit={(e)=>e.preventDefault()}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  
                  className="w-100 mt-5 btn btn-base"
                  style={{ backgroundColor: '#fa4318', borderColor: '#fa4318' }}
                >
                  Login
                </Button>
              </Form>
             
              <div className="text-center mt-4">
                <p>Don't have an account?</p>
                <Link to={"/access"}>
                <Button
                  variant="outline-primary"
                  style={{ color: '#fa4318', borderColor: '#fa4318' }}
                  >
                  Sign Up
                </Button>
                    </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
