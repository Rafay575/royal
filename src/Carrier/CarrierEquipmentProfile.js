import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { baseUrl } from '../api/url';
import { useSelector } from 'react-redux';

const specialEquipmentOptions = [
  '4\' TARPS', '6\' TARPS', '8\' TARPS', 'AIR RIDE', 'BLIND SHIPMENT',
  'BLOCK AND BRACE', 'BONDED CARRIER', 'BOX TRUCK', 'BULK', 'CARGO VAN',
  'CHAINS', 'CHASSIS', 'COIL RACKS', 'CONESTOGA', 'CONTAINER', 'CTPAT',
  'CURTAIN VAN', 'DOUBLE DROP DECK', 'DRAYAGE', 'DRIVER ASSIST',
  'DRIVER COUNT', 'DROP & HOOK', 'DROP TRAILER', 'DRY BULK', 'DUMP TRAILER',
  'DUNNAGE', 'E-TRACK/STRAPS', 'EDGE PROTECTORS', 'EXTERIOR WASH',
  'FLOOR LOAD', 'FOOD GRADE', 'FREEZE PROTECT', 'GARMENT TRAILER', 'HAZMAT',
  'HEATED VAN', 'HIGH CUBE TRAILER', 'HOPPER', 'HOT SHOT', 'INTERMODAL',
  'INTERNATIONAL', 'LAST MILE', 'LIFTGATE', 'LOAD LOCKS', 'LOGISTICS VAN',
  'MAXI', 'MP UPDATES REQUIRED', 'NO TARP', 'OPEN TOP', 'OTHER',
  'OVER DIMENSIONAL', 'PAD WRAP', 'PALLET EXCHANGE', 'PARTIAL/LTL',
  'PERSONAL PROTECTIVE EQUIPMENT', 'PLATE TRAILER', 'PORT INTERCHANGE AGREEMENT',
  'POWER ONLY', 'PRODUCE', 'REEFER NON-PRODUCE', 'REMOVABLE GOOSE NECK',
  'ROUND TRIP', 'SCALE TICKET', 'SEAL REQ', 'SIDE KIT', 'SMOKE TARPS',
  'SPACE SAVER REEFER', 'STEP DECK', 'STRAIGHT', 'SUPER VAN', 'SWING DOORS',
  'TANKER', 'TEAM', 'TEMP RECORDER', 'TRACKING REQUIRED', 'TRIPLE AXLE VAN',
  'TWIC REQUIRED', 'V-BOARDS', 'VENTED VAN', 'VINYL CHUTE ONLY', 'WALKING FLOOR',
  'WASHOUT', 'WOOD FLOORS'
];

const CarrierEquipmentProfile = ({incPage}) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const watchOther = watch('Other', false);
  const reg_id = useSelector((state) => state.user.id);
  const handleCheckboxChange = (option) => {
    setSelectedOptions(prevState =>
      prevState.includes(option)
        ? prevState.filter(item => item !== option)
        : [...prevState, option]
    );
  };

  const onSubmit = async (data) => {
    if (selectedOptions.length === 0) {
      alert('Please select at least one special equipment option.');
      return;
    }

    const formData = { 
      ...data, 
      specialEquipment: selectedOptions ,
      reg_id:reg_id

    };
    console.log(reg_id)

    try {
      const response = await fetch(`${baseUrl}/api/carrier-equipment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        incPage(); // This function moves to the next page
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
  };
  return (
    <>
      <h1 className="text-center form-title">Allen Lund Company - Carrier Equipment Profile</h1>
      <div className="carrier-equipment-form-container">

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Company Profile */}
          <h4 className="section-title">Company Profile</h4>
          <Row className="mb-4">
            <Col md={3}>
              <Form.Group>
                <Form.Label>Company Drivers</Form.Label>
                <Form.Control type="text" {...register('companyDrivers')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Teams</Form.Label>
                <Form.Control type="text" {...register('teams')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Owner Operators</Form.Label>
                <Form.Control type="text" {...register('ownerOperators')} size="sm" />
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
          <h4 className="section-title">Modes (Check all that apply & must select at least one)</h4>
          <Row className="mb-4">
            <Col md={3}>
              <Form.Group>
                <Form.Check label="Dry LTL" {...register('dryLtl')} />
                <Form.Check label="Dry Van" {...register('dryVan')} />
                <Form.Check label="Flatbed" {...register('flatbed')} />
                <Form.Check label="Refrigerated" {...register('refrigerated')} />
                <Form.Check label="Refrigerated LTL" {...register('refrigeratedLtl')} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>48 Foot Vans</Form.Label>
                <Form.Control type="text" {...register('FootVans48')} size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label>53 Foot Vans</Form.Label>
                <Form.Control type="text" {...register('FootVans53')} size="sm" />
              </Form.Group>

            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>48 Foot Reefers</Form.Label>
                <Form.Control type="text" {...register('FootReefers48')} size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label>53 Foot Reefers</Form.Label>
                <Form.Control type="text" {...register('FootReefers53')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>48 Foot Beds</Form.Label>
                <Form.Control type="text" {...register('Footbeds48')} size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label>53 Foot Beds</Form.Label>
                <Form.Control type="text" {...register('Footbeds53')} size="sm" />
              </Form.Group>
            </Col>
          </Row>

          {/* Special Equipment Section */}
          <h4 className="section-title">Special Equipment (Check all that apply & must select at least one)</h4>
          <Row className="mb-4">
            {specialEquipmentOptions.map((option, index) => (
              <Col xs={12} md={4} key={index} className="mb-2">
                <Form.Check
                  type="checkbox"
                  label={option}
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
              </Col>
            ))}
          </Row>

          {/* Tractor and Equipment Counts */}
          <h4 className="section-title">Tractor and Equipment Counts</h4>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Tractor / Power Units</Form.Label>
                <Form.Control type="text" {...register('tractorPowerUnits')} size="sm" />
              </Form.Group>
            </Col>
          </Row>
          <h4 className="section-title">Standard Carrier Alpha Code</h4>
          <Row className="mb-4">

            <Col md={6}>
              <Form.Group>
                <Form.Label>SCAC Code</Form.Label>
                <Form.Control type="text" {...register('scacCode')} size="sm" />
              </Form.Group>
            </Col>
          </Row>

          {/* Commodities List Section */}
          <h4 className="section-title">Commodities List (Check all that apply & must select at least one)</h4>
          <Row className="mb-4">
            <Col md={12}>
              <Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Check label="Agriculture" {...register('agriculture')} />
                    <Form.Check label="Alcohol" {...register('alcohol')} />
                    <Form.Check label="Automotive" {...register('automotive')} />
                    <Form.Check label="Beer and Wine" {...register('beerAndWine')} />
                    <Form.Check label="Chemicals" {...register('chemicals')} />
                    <Form.Check label="Electronics" {...register('electronics')} />
                  </Col>
                  <Col md={4}>
                    <Form.Check label="Food" {...register('food')} />
                    <Form.Check label="Household Goods" {...register('householdGoods')} />
                    <Form.Check label="Ice Cream" {...register('iceCream')} />
                    <Form.Check label="Machinery" {...register('machinery')} />
                    <Form.Check label="Metals" {...register('metals')} />
                    <Form.Check label="Pharmaceutical" {...register('pharmaceutical')} />
                  </Col>

                  <Col md={4}>
                    <Form.Check label="ManufacturedProducts" {...register('ManufacturedProducts')} />
                    <Form.Check label="Plastics Goods" {...register('PlasticsGoods')} />
                    <Form.Check label="Petroleum Products" {...register('PetroleumProducts')} />
                    <Form.Check label="Textiles" {...register('Textiles')} />
                    <Form.Check label="Wood Products" {...register('WoodProducts')} />
                    <Form.Check label="Other" {...register('Other')} />
                    {watchOther && (
                      <Form.Group style={{ maxWidth: "50%" }}>
                        <Form.Control
                          type="text"
                          {...register('otherinput', { required: watchOther })}
                        />
                      </Form.Group>
                    )}
                  </Col>
                </Row>
                <Row className='mt-4'>
                  <Col md={3}>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>

          {/* Certifications Section */}
          <h4 className="section-title">Certifications</h4>
          <Row className="mb-4">
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
          <h4 className="section-title">Drop Trailer</h4>
          <p>Do you have the equipment and ability to drop trailers?</p>
          <Form.Group>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              {...register('agree', { required: true })}
            />
            <Form.Check
              type="radio"
              label="No"
              value="no"
              {...register('agree', { required: true })}
            />
            {errors.agree && <span className="error-text">This field is required</span>}
          </Form.Group>

          {/* Form Actions */}
          <div className="form-actions mt-4">
            <button type="submit" className="button-11">
              Next
            </button>
          </div>
        </Form>
      </div>

      <style jsx>{`
        .carrier-equipment-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 1000px;
          margin: 0 auto;
        }
       
      `}</style>
    </>
  );
};

export default CarrierEquipmentProfile;
