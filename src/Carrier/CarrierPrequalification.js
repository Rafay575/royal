import React, { useState } from 'react';
import { Container, Form, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../api/url'; 
import { useSelector } from 'react-redux'; 

const CarrierPrequalification = () => {
  const [formData, setFormData] = useState({
    mcNumber: '',
    dotNumber: '',
  });
  const userId = localStorage.getItem("___");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for the spinner
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleSearch = async (e) => {
    e.preventDefault();
    const { mcNumber, dotNumber } = formData;
    const API_URL = 'https://mobile.fmcsa.dot.gov/qc/services/';
    const API_KEY = '79acc181659f1e7514973f115a65e2b1fd1c9e0a';
  
    // Ensure both MC and DOT numbers are provided
    if (!mcNumber || !dotNumber) {
      toast.error('Both MC Number and DOT Number are required.');
      return;
    }
  
    setLoading(true); // Start loading spinner
  
    try {
      const response = await axios.get(`${API_URL}carriers/${dotNumber}`, {
        params: {
          webKey: API_KEY,
        },
      });
  
      if (response.status === 200 && response.data) {
        const carrierData = response.data.content.carrier;
        setSearchResult(carrierData);
        toast.success('Carrier found successfully!');
  
        if (carrierData.allowedToOperate === 'Y') {
          // If carrier is allowed to operate, send the MC and DOT numbers to the backend
          const submissionData = {
            mcNumber: formData.mcNumber,
            dotNumber: formData.dotNumber,
            allowedToOperate: carrierData.allowedToOperate,
            reg_id:userId,
          };
  
          try {
            const submitResponse = await axios.post(`${baseUrl}/api/submit-carrier`, submissionData);
            if (submitResponse.status === 200) {
              localStorage.setItem("rslmc",formData.mcNumber);
              toast.success('Carrier data submitted successfully!');
              navigate('/carrierdashboard/form', { state: carrierData });
            }
          } catch (submitError) {
            toast.error('Error submitting carrier data.');
            console.error('Submit Error:', submitError);
          }
        } else {
          toast.error('Carrier is not allowed to operate.');
        }
      } else {
        toast.error('Carrier not found. Please check the information and try again.');
        setSearchResult(null);
      }
    } catch (error) {
      console.error('API Error:', error);
      toast.error('Error fetching carrier details. Please try again later.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  
  return (
    <>
      <NavbarComponent toggleSidebar={() => {}} />
      <Toaster position="top-right" reverseOrder={false} />
      <Container className="" style={{ marginTop: '130px' }}>
        <h3 className="mb-4 bg-light p-3 border rounded">Carrier Prequalification</h3>

        <Form onSubmit={handleSearch}>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="formMcNumber">
                <Form.Label>MC #</Form.Label>
                <Form.Control
                  type="text"
                  name="mcNumber"
                  required
                  placeholder="MC #"
                  value={formData.mcNumber}
                  onChange={handleChange}
                  className="m-0"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDotNumber">
                <Form.Label>DOT #</Form.Label>
                <Form.Control
                  type="text"
                  name="dotNumber"
                  required
                  placeholder="DOT #"
                  value={formData.dotNumber}
                  onChange={handleChange}
                  className="m-0"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <button type="submit" className="button-11 ms-3" disabled={loading}>
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  'Search'
                )}
              </button>
            </Col>
          </Row>
        </Form>

    
      </Container>
    </>
  );
};

export default CarrierPrequalification;
