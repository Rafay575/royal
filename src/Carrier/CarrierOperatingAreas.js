import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'; 
import { baseUrl } from '../api/url';

const CarrierOperatingAreas = ({incPage}) => {
  const [selectedZones, setSelectedZones] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedDestZones, setSelectedDestZones] = useState([]);
  const [selectedDestStates, setSelectedDestStates] = useState([]);
  const [lanePreferences, setLanePreferences] = useState({
    availableCity: '',
    availableState: '',
    preferredDestination: '',
    destinationState: '',
    equipment: ''
  });
  const reg_id = localStorage.getItem("___")
  const zoneStates = {
    Northeast: ['CT', 'ME', 'MA', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT', 'VA', 'MD', 'WV', 'DC', 'DE'],
    Midwest: ['IL', 'IN', 'IA', 'KS', 'KY', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'],
    Southwest: ['TX', 'OK', 'CO', 'NM', 'UT', 'AZ'],
    Southeast: ['FL', 'GA', 'LA', 'NC', 'SC', 'AR', 'AL', 'MS', 'TN'],
    Northwest: ['ID', 'MT', 'OR', 'WA', 'WY'],
    West: ['CA', 'NV'],
  };

  const zones = Object.keys(zoneStates);

  const states = [
    'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU',
    'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI',
    'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY',
    'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA',
    'VT', 'WA', 'WI', 'WV', 'WY'
  ];

  const handleZoneChange = (zone, type) => {
    const zoneSelected = type === 'origin' ? selectedZones.includes(zone) : selectedDestZones.includes(zone);
    const zoneStatesToSelect = zoneStates[zone];

    if (zoneSelected) {
      if (type === 'origin') {
        setSelectedZones(prevState => prevState.filter(z => z !== zone));
        setSelectedStates(prevState => prevState.filter(state => !zoneStatesToSelect.includes(state)));
      } else {
        setSelectedDestZones(prevState => prevState.filter(z => z !== zone));
        setSelectedDestStates(prevState => prevState.filter(state => !zoneStatesToSelect.includes(state)));
      }
    } else {
      if (type === 'origin') {
        setSelectedZones(prevState => [...prevState, zone]);
        setSelectedStates(prevState => [...new Set([...prevState, ...zoneStatesToSelect])]);
      } else {
        setSelectedDestZones(prevState => [...prevState, zone]);
        setSelectedDestStates(prevState => [...new Set([...prevState, ...zoneStatesToSelect])]);
      }
    }
  };

  const handleStateChange = (state, type) => {
    if (type === 'origin') {
      setSelectedStates(prevState =>
        prevState.includes(state)
          ? prevState.filter(s => s !== state)
          : [...prevState, state]
      );
    } else {
      setSelectedDestStates(prevState =>
        prevState.includes(state)
          ? prevState.filter(s => s !== state)
          : [...prevState, state]
      );
    }
  };

  const checkAllStates = (type) => {
    if (type === 'origin') {
      setSelectedStates(states);
    } else {
      setSelectedDestStates(states);
    }
  };

  const clearAllStates = (type) => {
    if (type === 'origin') {
      setSelectedStates([]);
    } else {
      setSelectedDestStates([]);
    }
  };

  const handleLanePreferenceChange = (field, value) => {
    setLanePreferences(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      reg_id,
      selectedZones,
      selectedStates,
      selectedDestZones,
      selectedDestStates,
      availableCity: lanePreferences.availableCity,
      availableState: lanePreferences.availableState,
      preferredDestination: lanePreferences.preferredDestination,
      destinationState: lanePreferences.destinationState,
      equipment: lanePreferences.equipment
    };

    try {
      const response = await axios.post(`${baseUrl}/api/carrier-operating-areas`, data); // Make sure this URL matches your backend route
      console.log(response.data);
      incPage(); // Move to the next page if applicable
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
    
  };

  return (
    <div className=" p-5">
      <h5 className='d-flex justify-content-center mb-5'>Carrier Operating Areas</h5>
     
      <h6 className='mt-5 mb-3'>Origin Preferences</h6>
      <Form>  
        <Form.Group>
          <Form.Label className='form-title' ><strong>Preferred Zones: (Please select at least one)</strong></Form.Label>
          <Row>
            {zones.map((zone, index) => (
              <Col key={index} xs={6} md={4} className="mb-2">
                <Form.Check className='form-title' 
                  type="checkbox"
                  label={zone}
                  checked={selectedZones.includes(zone)}
                  onChange={() => handleZoneChange(zone, 'origin')}
                />
                <Form.Select size="sm" className="mt-1">
                  <option>Priority</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Col>
            ))}
          </Row>
        </Form.Group>

        {/* Preferred States */}
        <Form.Group>
          <Form.Label className='form-title' ><strong>Preferred States:</strong></Form.Label>
          <Row>
            {states.map((state, index) => (
              <Col key={index} xs={6} md={2} className="mb-2">
                <Form.Check className='form-title' 
                  type="checkbox"
                  label={state}
                  checked={selectedStates.includes(state)}
                  onChange={() => handleStateChange(state, 'origin')}
                />
              </Col>
            ))}
          </Row>
          <div className='d-flex mt-3'>
            <button className=' button-11  me-3' style={{ cursor: "pointer",fontSize:"12px" }} onClick={() => checkAllStates('origin')}>Check All States</button>
            <button className=' button-11 ' style={{ cursor: "pointer",fontSize:"12px" }} onClick={() => clearAllStates('origin')}>Clear All States</button>
          </div>
        </Form.Group>
      </Form>

      <h6 className="mt-5 mb-3">Destination Preferences</h6>
      <Form>
        {/* Preferred Zones */}
        <Form.Group>
          <Form.Label className='form-title' ><strong>Preferred Zones: (Please select at least one)</strong></Form.Label>
          <Row>
            {zones.map((zone, index) => (
              <Col key={index} xs={6} md={4} className="mb-2">
                <Form.Check className='form-title' 
                  type="checkbox"
                  label={zone}
                  checked={selectedDestZones.includes(zone)}
                  onChange={() => handleZoneChange(zone, 'destination')}
                />
                <Form.Select size="sm" className="mt-1">
                  <option>Priority</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Col>
            ))}
          </Row>
        </Form.Group>

        {/* Preferred States */}
        <Form.Group>
          <Form.Label className='form-title' ><strong>Preferred States:</strong></Form.Label>
          <Row>
            {states.map((state, index) => (
              <Col key={index} xs={6} md={2} className="mb-2">
                <Form.Check className='form-title' 
                  type="checkbox"
                  label={state}
                  checked={selectedDestStates.includes(state)}
                  onChange={() => handleStateChange(state, 'destination')}
                />
              </Col>
            ))}
          </Row>
          <div className='d-flex mt-3'>
            <button className=' button-11  me-3' style={{ cursor: "pointer",fontSize:"12px" }} onClick={() => checkAllStates('destination')}>Check All States</button>
            <button className=' button-11 ' style={{ cursor: "pointer",fontSize:"12px" }} onClick={() => clearAllStates('destination')}>Clear All States</button>
          </div>
        </Form.Group>
      </Form>

      <h6 className="mt-5 mb-3">Carrier Lane Preferences <span style={{fontSize:"12px",fontWeight:700}}>(Please select available state and destination state)</span> </h6>
      <Form>
        <Row>
          <Col xs={12} md={3}>
            <Form.Group controlId="availableCity">
              <Form.Label className='form-title' >Available City</Form.Label>
              <Form.Control
                type="text"
                value={lanePreferences.availableCity}
                onChange={(e) => handleLanePreferenceChange('availableCity', e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={2}>
            <Form.Group controlId="availableState">
              <Form.Label className='form-title' >ST</Form.Label>
              <Form.Control
                as="select"
                value={lanePreferences.availableState}
                onChange={(e) => handleLanePreferenceChange('availableState', e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="preferredDestination">
              <Form.Label className='form-title' >Preferred Destination</Form.Label>
              <Form.Control
                type="text"
                value={lanePreferences.preferredDestination}
                onChange={(e) => handleLanePreferenceChange('preferredDestination', e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={2}>
            <Form.Group controlId="destinationState">
              <Form.Label className='form-title' >ST</Form.Label>
              <Form.Control
                as="select"
                value={lanePreferences.destinationState}
                onChange={(e) => handleLanePreferenceChange('destinationState', e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={2}>
            <Form.Group controlId="equipment">
              <Form.Label className='form-title' >EQP </Form.Label>
              <Form.Control
                as="select"
                value={lanePreferences.equipment}
                onChange={(e) => handleLanePreferenceChange('equipment', e.target.value)}
              >
                <option value="">Select Equipment </option>
                <option value="DRYLTL">DRY LTL</option>
                <option value="DRYVAN">DRY VAN</option>
                <option value="FLATBED">FLATBED</option>
                <option value="REFRIGERATED">REFRIGERATED</option>
                <option value="REFRIGERATEDLTL">REFRIGERATED LTL</option>
              
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <div className='d-flex justify-content-end mt-5' style={{}}>

        <button className=" button-11  mt-4" onClick={(e)=>handleSubmit(e)}>Next</button>
        </div>
      </Form>
    </div>
  );
};

export default CarrierOperatingAreas;
