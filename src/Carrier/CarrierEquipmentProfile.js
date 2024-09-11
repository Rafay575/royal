import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CarrierEquipmentProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center form-title">Allen Lund Company - Carrier Equipment Profile</h1>
    <div className="carrier-equipment-form-container">

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Company Profile */}
        <h4>Company Profile</h4>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Company Drivers</Form.Label>
              <Form.Control type="text" {...register('companyDrivers')} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Teams</Form.Label>
              <Form.Control type="text" {...register('teams')} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Owner Operators</Form.Label>
              <Form.Control type="text" {...register('ownerOperators')} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Has Mexico Interchange"
                {...register('hasMexicoInterchange')}
              />
              <Form.Check
                type="checkbox"
                label="Has Canadian Authority"
                {...register('hasCanadianAuthority')}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Modes Section */}
        <h4>Modes (Check all that apply & must select at least one)</h4>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Check label="Dry LTL" {...register('dryLtl')} />
              <Form.Check label="Dry Van" {...register('dryVan')} />
              <Form.Check label="Flatbed" {...register('flatbed')} />
              <Form.Check label="Refrigerated" {...register('refrigerated')} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Check label="Refrigerated LTL" {...register('refrigeratedLtl')} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>48 Foot Vans</Form.Label>
              <Form.Control type="text" {...register('48FootVans')} />
            </Form.Group>
            <Form.Group>
              <Form.Label>48 Foot Reefers</Form.Label>
              <Form.Control type="text" {...register('48FootReefers')} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>53 Foot Vans</Form.Label>
              <Form.Control type="text" {...register('53FootVans')} />
            </Form.Group>
            <Form.Group>
              <Form.Label>53 Foot Reefers</Form.Label>
              <Form.Control type="text" {...register('53FootReefers')} />
            </Form.Group>
          </Col>
        </Row>

        {/* Special Equipment Section */}
        <h4>Special Equipment (Check all that apply & must select at least one)</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Check label="4' Tarps" {...register('fourTarps')} />
                  <Form.Check label="6' Tarps" {...register('sixTarps')} />
                  <Form.Check label="Air Ride" {...register('airRide')} />
                  <Form.Check label="Blind Shipment" {...register('blindShipment')} />
                  <Form.Check label="Box Truck" {...register('boxTruck')} />
                  <Form.Check label="Container" {...register('container')} />
                  <Form.Check label="Dry Bulk" {...register('dryBulk')} />
                </Col>
                <Col md={6}>
                  <Form.Check label="Food Grade" {...register('foodGrade')} />
                  <Form.Check label="Freeze Protect" {...register('freezeProtect')} />
                  <Form.Check label="Garment Trailer" {...register('garmentTrailer')} />
                  <Form.Check label="High Cube Trailer" {...register('highCubeTrailer')} />
                  <Form.Check label="Pallet Exchange" {...register('palletExchange')} />
                  <Form.Check label="Temp Recorder" {...register('tempRecorder')} />
                  <Form.Check label="Vented Van" {...register('ventedVan')} />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        {/* Tractor and Equipment Counts */}
        <h4>Tractor and Equipment Counts</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tractor / Power Units</Form.Label>
              <Form.Control type="text" {...register('tractorPowerUnits')} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>SCAC Code</Form.Label>
              <Form.Control type="text" {...register('scacCode')} />
            </Form.Group>
          </Col>
        </Row>

        {/* Commodities List Section */}
        <h4>Commodities List (Check all that apply & must select at least one)</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Check label="Agriculture" {...register('agriculture')} />
                  <Form.Check label="Alcohol" {...register('alcohol')} />
                  <Form.Check label="Automotive" {...register('automotive')} />
                  <Form.Check label="Beer and Wine" {...register('beerAndWine')} />
                  <Form.Check label="Chemicals" {...register('chemicals')} />
                  <Form.Check label="Electronics" {...register('electronics')} />
                </Col>
                <Col md={6}>
                  <Form.Check label="Food" {...register('food')} />
                  <Form.Check label="Household Goods" {...register('householdGoods')} />
                  <Form.Check label="Ice Cream" {...register('iceCream')} />
                  <Form.Check label="Machinery" {...register('machinery')} />
                  <Form.Check label="Metals" {...register('metals')} />
                  <Form.Check label="Pharmaceutical" {...register('pharmaceutical')} />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        {/* Certifications Section */}
        <h4>Certifications</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Check label="SmartWay" type="radio" name="smartWay" value="yes" {...register('smartWay')} />
              <Form.Check label="FAST" type="radio" name="fast" value="yes" {...register('fast')} />
              <Form.Check label="CARB" type="radio" name="carb" value="yes" {...register('carb')} />
              <Form.Check label="Safety Permit (HM 232)" type="radio" name="safetyPermit" value="yes" {...register('safetyPermit')} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Check label="C-TPAT" type="radio" name="cTpat" value="yes" {...register('cTpat')} />
              <Form.Check label="TWIC" type="radio" name="twic" value="yes" {...register('twic')} />
              <Form.Check label="HazMat Certification" type="radio" name="hazmatCertification" value="yes" {...register('hazmatCertification')} />
            </Form.Group>
          </Col>
        </Row>

        {/* Form Actions */}
        <div className="form-actions mt-4">
          <button type="submit" className=" button-11">
            Next 
          </button>
        </div>
      </Form>

      <style jsx>{`
        .carrier-equipment-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 1200px;
          margin: 0 auto;
        }
        .form-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
        }
        .error-text {
          color: red;
          font-size: 0.875rem;
        }
        .form-group {
          margin-bottom: 15px;
        }
        @media (max-width: 768px) {
          .form-actions {
            justify-content: center;
          }
        }
      `}</style>
    </div>
    </>

  );
};

export default CarrierEquipmentProfile;
