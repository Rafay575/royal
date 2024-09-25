import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CarrierPrequalification = () => {
  const [formData, setFormData] = useState({
    carrierName: '',
    mcNumber: '',
    dotNumber: '',
  });

  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();

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
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const { mcNumber, dotNumber, carrierName } = formData;
    const API_URL = 'https://mobile.fmcsa.dot.gov/qc/services/';
    const API_KEY = '79acc181659f1e7514973f115a65e2b1fd1c9e0a';

    let searchEndpoint = '';

    if (dotNumber) {
      searchEndpoint = `carriers/${dotNumber}`;
    } else if (mcNumber) {
      searchEndpoint = `carriers/docket-number/${mcNumber}`;
    } else if (carrierName) {
      searchEndpoint = `carriers/name/${carrierName}`;
    } else {
      toast.error('Please enter either Carrier Name, MC #, or DOT #.');
      return;
    }

    try {
      const response = await axios.get(`${API_URL}${searchEndpoint}`, {
        params: {
          webKey: API_KEY,
        },
      });

      if (response.status === 200 && response.data) {
        const carrierData = response.data.content.carrier;
        setSearchResult(carrierData);
        toast.success('Carrier found successfully!');

        if (carrierData.allowedToOperate === 'Y') {
          navigate('/carrierdashboard/form', { state: carrierData });
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
            <Col className='text-center'>
              <button type="submit" className="button-11 ms-3">
                Search
              </button>
            </Col>
          </Row>
        </Form>

        {searchResult && (
          <div className="mt-4">
            <h5>Carrier Found</h5>
            <p><strong>Allowed To Operate:</strong> {searchResult.allowedToOperate || 'N/A'}</p>
            <p><strong>DOT #:</strong> {searchResult.dotNumber || 'N/A'}</p>
            <p><strong>MC #:</strong> {searchResult.mcNumber || 'N/A'}</p>
            <p><strong>Legal Name:</strong> {searchResult.legalName || 'N/A'}</p>
            <p><strong>DBA Name:</strong> {searchResult.dbaName || 'N/A'}</p>
            <p><strong>Street:</strong> {searchResult.phyStreet || 'N/A'}</p>
            <p><strong>City:</strong> {searchResult.phyCity || 'N/A'}</p>
            <p><strong>State:</strong> {searchResult.phyState || 'N/A'}</p>
            <p><strong>Zip Code:</strong> {searchResult.phyZipcode || 'N/A'}</p>
            <p><strong>Country:</strong> {searchResult.phyCountry || 'N/A'}</p>
            <p><strong>Phone:</strong> {searchResult.telephone || 'N/A'}</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default CarrierPrequalification;
