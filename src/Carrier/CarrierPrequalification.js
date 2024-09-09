import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const CarrierPrequalification = () => {
  const [formData, setFormData] = useState({
    carrierName: '',
    mcNumber: '',
    dotNumber: '',
  });

  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      carrierName: '',
      mcNumber: '',
      dotNumber: '',
    });
    setSearchResult(null);
    setError('');
  };

  const handleSearch = async () => {
    const { mcNumber, dotNumber } = formData;
  
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = 'https://safer.fmcsa.dot.gov/query.asmx/CarrierSnapshot';
  
    try {
      const response = await axios.get(PROXY_URL + API_URL, {
        params: {
          searchstring: dotNumber || mcNumber,
          searchtype: dotNumber ? 'DOT' : 'MC',
        },
      });
  
      if (response.status === 200) {
        const carrierData = response.data;
        setSearchResult(carrierData);
        setError('');
      } else {
        setError('Carrier not found. Please check the MC # or DOT # and try again.');
        setSearchResult(null);
      }
    } catch (error) {
      console.error('API Error:', error);
      setError('Error fetching carrier details. Please try again later.');
    }
  };
  
  return (
    <Container className="mt-5">
      <h3 className="mb-4 bg-light p-3 border rounded">Carrier Prequalification</h3>

      <Alert variant="warning" className="mb-4">
        <strong>Please be advised:</strong> Allen Lund will not be processing applications from carriers with authority that is less than six (6) months. If you choose to submit an application and your authority does not meet this requirement, your application will not be processed at this time.
      </Alert>

      <Form>
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="formCarrierName">
              <Form.Label>Carrier Name</Form.Label>
              <Form.Control
                type="text"
                name="carrierName"
                placeholder="Carrier Name"
                value={formData.carrierName}
                onChange={handleChange}
                className="m-0"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formMcNumber">
              <Form.Label>MC #</Form.Label>
              <Form.Control
                type="text"
                name="mcNumber"
                placeholder="MC #"
                value={formData.mcNumber}
                onChange={handleChange}
                className="m-0"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formDotNumber">
              <Form.Label>DOT #</Form.Label>
              <Form.Control
                type="text"
                name="dotNumber"
                placeholder="DOT #"
                value={formData.dotNumber}
                onChange={handleChange}
                className="m-0"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={handleClear}>
              Clear
            </Button>
            <Button variant="primary" onClick={handleSearch} className="ms-3">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {error && <Alert variant="danger" className="mt-4">{error}</Alert>}

      {searchResult && (
        <Alert variant="success" className="mt-4">
          <h5>Carrier Found</h5>
          <p><strong>Carrier Name:</strong> {searchResult.carrierName}</p>
          <p><strong>MC #:</strong> {searchResult.mcNumber}</p>
          <p><strong>DOT #:</strong> {searchResult.dotNumber}</p>
          <p><strong>Status:</strong> {searchResult.status}</p>
        </Alert>
      )}
    </Container>
  );
};

export default CarrierPrequalification;
