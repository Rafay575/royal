import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const CarrierOperatingAreas = () => {
  // State to manage selections for origin and destination
  const [originSelected, setOriginSelected] = useState({
    northeast: false,
    midwest: false,
    southwest: false,
    southeast: false,
    states: {},
    provinces: {},
  });

  const [destinationSelected, setDestinationSelected] = useState({
    northeast: false,
    midwest: false,
    southwest: false,
    southeast: false,
    states: {},
    provinces: {},
  });

  // Handler for checking all states for origin or destination
  const handleCheckAllStates = (type) => {
    const allStates = {
      AK: true, FL: true, KY: true, MT: true, OH: true, TX: true, WY: true,
      GA: true, LA: true, MA: true, ND: true, OK: true, UT: true, AR: true,
      AZ: true, HI: true, IA: true, NE: true, OR: true, VA: true, CA: true
    };

    if (type === 'origin') {
      setOriginSelected((prev) => ({
        ...prev,
        states: allStates,
      }));
    } else {
      setDestinationSelected((prev) => ({
        ...prev,
        states: allStates,
      }));
    }
  };

  // Handler for clearing all states for origin or destination
  const handleClearAllStates = (type) => {
    if (type === 'origin') {
      setOriginSelected((prev) => ({
        ...prev,
        states: {},
      }));
    } else {
      setDestinationSelected((prev) => ({
        ...prev,
        states: {},
      }));
    }
  };

  // Handler for checking all provinces for origin or destination
  const handleCheckAllProvinces = (type) => {
    const allProvinces = { AB: true, BC: true, MB: true, NB: true, NS: true, ON: true };

    if (type === 'origin') {
      setOriginSelected((prev) => ({
        ...prev,
        provinces: allProvinces,
      }));
    } else {
      setDestinationSelected((prev) => ({
        ...prev,
        provinces: allProvinces,
      }));
    }
  };

  // Handler for clearing all provinces for origin or destination
  const handleClearAllProvinces = (type) => {
    if (type === 'origin') {
      setOriginSelected((prev) => ({
        ...prev,
        provinces: {},
      }));
    } else {
      setDestinationSelected((prev) => ({
        ...prev,
        provinces: {},
      }));
    }
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const isOriginSelected =
      originSelected.northeast ||
      originSelected.midwest ||
      originSelected.southwest ||
      originSelected.southeast ||
      Object.keys(originSelected.states).length > 0 ||
      Object.keys(originSelected.provinces).length > 0;

    const isDestinationSelected =
      destinationSelected.northeast ||
      destinationSelected.midwest ||
      destinationSelected.southwest ||
      destinationSelected.southeast ||
      Object.keys(destinationSelected.states).length > 0 ||
      Object.keys(destinationSelected.provinces).length > 0;

    if (!isOriginSelected || !isDestinationSelected) {
      alert('Please select at least one origin and one destination.');
    } else {
      // Form data to submit
      console.log('Form submitted:', {
        origin: originSelected,
        destination: destinationSelected,
      });
    }
  };

  return (
    <div className="carrier-operating-areas-container">
      <h3>Carrier Operating Areas</h3>
      <p>Please select all operating areas where you provide service.</p>
      <p><strong>Please only Select States you Actively Service.</strong> Do not Select a State if you have authority but do not actively haul freight To/From that State.</p>

      <Form onSubmit={handleSubmit}>
        {/* Origin Preferences */}
        <h4>Origin Preferences</h4>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Check
              label="Northeast"
              onChange={() => setOriginSelected({ ...originSelected, northeast: !originSelected.northeast })}
              checked={originSelected.northeast}
            />
            <Form.Control as="select">
              <option>Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Col>
          <Col md={3}>
            <Form.Check
              label="Midwest"
              onChange={() => setOriginSelected({ ...originSelected, midwest: !originSelected.midwest })}
              checked={originSelected.midwest}
            />
            <Form.Control as="select">
              <option>Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Col>
          <Col md={3}>
            <Form.Check
              label="Southwest"
              onChange={() => setOriginSelected({ ...originSelected, southwest: !originSelected.southwest })}
              checked={originSelected.southwest}
            />
            <Form.Control as="select">
              <option>Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Col>
        </Row>

        <h5>Preferred States</h5>
        <Row className="mb-3 states-row">
          <Col>
            <Form.Check
              label="AK"
              onChange={() => setOriginSelected({ ...originSelected, states: { ...originSelected.states, AK: !originSelected.states.AK } })}
              checked={originSelected.states.AK || false}
            />
            {/* Add other states similarly */}
          </Col>
        </Row>

        <div className="state-controls">
          <Button variant="link" onClick={() => handleCheckAllStates('origin')}>Check All States</Button>
          <Button variant="link" onClick={() => handleClearAllStates('origin')}>Clear All States</Button>
        </div>

        {/* Repeat for Preferred Provinces and Canadian Provinces */}

        {/* Destination Preferences */}
        <h4>Destination Preferences</h4>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Check
              label="Northeast"
              onChange={() => setDestinationSelected({ ...destinationSelected, northeast: !destinationSelected.northeast })}
              checked={destinationSelected.northeast}
            />
            <Form.Control as="select">
              <option>Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Col>
          <Col md={3}>
            <Form.Check
              label="Midwest"
              onChange={() => setDestinationSelected({ ...destinationSelected, midwest: !destinationSelected.midwest })}
              checked={destinationSelected.midwest}
            />
            <Form.Control as="select">
              <option>Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Col>
        </Row>

        <h5>Preferred States</h5>
        <Row className="mb-3 states-row">
          <Col>
            <Form.Check
              label="AK"
              onChange={() => setDestinationSelected({ ...destinationSelected, states: { ...destinationSelected.states, AK: !destinationSelected.states.AK } })}
              checked={destinationSelected.states.AK || false}
            />
            {/* Add other states similarly */}
          </Col>
        </Row>

        <div className="state-controls">
          <Button variant="link" onClick={() => handleCheckAllStates('destination')}>Check All States</Button>
          <Button variant="link" onClick={() => handleClearAllStates('destination')}>Clear All States</Button>
        </div>

        {/* Submit Button */}
        <div className="form-actions mt-4">
          <Button type="submit" className="btn btn-primary">
            Submit Preferences
          </Button>
        </div>
      </Form>

      <style jsx>{`
        .carrier-operating-areas-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 0 auto;
        }
        .states-row {
          display: flex;
          justify-content: space-between;
        }
        .state-controls {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .states-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default CarrierOperatingAreas;
