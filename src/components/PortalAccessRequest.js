import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PortalAccessRequest = () => {

    const navigate = useNavigate()
  return (
    <div
      className="portal-access-page"
      style={{
        backgroundColor: '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("assets/img/banner/bg.png")', // Add your background image path here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="portal-access-box p-5 shadow" style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #ddd' }}>
              <h4 className="text-center mb-4" style={{ backgroundColor: '#fa4318', padding: '15px', borderRadius: '5px 5px 0 0', color: '#ffff' }}>
                Portal Access Request
              </h4>
              <Form>
                <Form.Group controlId="selectType" className="mb-4">
                  <Form.Label style={{ color: '#fa4318' }}><strong>* Select one</strong></Form.Label>
                  <div className="d-flex justify-content-between">
                    <Form.Check
                      type="radio"
                      label="Carrier"
                      name="type"
                      id="carrier"
                      className="mr-3"
                    />
                    <Form.Check
                      type="radio"
                      label="Factor"
                      name="type"
                      id="factor"
                    />
                  </div>
                </Form.Group>

                <Form.Group controlId="email" className="mb-4">
                  <Form.Control 
                    type="email" 
                    placeholder="Email Address" 
                    className="py-2" 
                    style={{ borderRadius: '5px' }}
                  />
                </Form.Group>

                <Form.Group controlId="company" className="mb-4">
                  <Form.Control 
                    type="text" 
                    placeholder="Company Name" 
                    className="py-2"
                    style={{ borderRadius: '5px' }}
                  />
                </Form.Group>

                <Form.Group controlId="contact" className="mb-4">
                  <Form.Control 
                    type="text" 
                    placeholder="Contact Name" 
                    className="py-2"
                    style={{ borderRadius: '5px' }}
                  />
                </Form.Group>

                <Form.Group controlId="address" className="mb-4">
                  <Form.Control 
                    type="text" 
                    placeholder="Address, City, ST, Zip Code" 
                    className="py-2"
                    style={{ borderRadius: '5px' }}
                  />
                </Form.Group>

                <Form.Group controlId="phone" className="mb-4">
                  <Form.Control 
                    type="text" 
                    placeholder="Phone Number" 
                    className="py-2"
                    style={{ borderRadius: '5px' }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="mx-2"
                    style={{
                      backgroundColor: '#fa4318',
                      borderColor: '#fa4318',
                      padding: '0px 20px',
                      borderRadius: '5px'
                    }}
                    onClick={()=>navigate("/login")}
                    >
                    Submit
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    className="mx-2"
                    onClick={()=>navigate("/login")}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '5px'
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// 2xda#XRE8X7!VS$ =>password
export default PortalAccessRequest;
