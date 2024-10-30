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
  const reg_id = localStorage.getItem("___");
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
      <h5 className="text-center mt-5 "> Carrier Equipment Profile</h5>
      <div className="p-5">

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Company Profile */}
          <h6 className="">Company Profile</h6>
          <Row className="mb-4">
            <Col md={3}>
              <Form.Group>
                <Form.Label className='form-title' >Company Drivers</Form.Label>
                <Form.Control type="text" {...register('companyDrivers')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className='form-title' >Teams</Form.Label>
                <Form.Control type="text" {...register('teams')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className='form-title' >Owner Operators</Form.Label>
                <Form.Control type="text" {...register('ownerOperators')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Check
                className='form-title'
                  type="checkbox"
                  label="Has Mexico Interchange"
                  {...register('hasMexicoInterchange')}
                />
                <Form.Check
                  type="checkbox"
                  className='form-title'
                  label="Has Canadian Authority"
                  {...register('hasCanadianAuthority')}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Modes Section */}
          <h6 className="mb-3 mt-5">Modes (Check all that apply & must select at least one)</h6>
          <Row className="mb-4">
            <Col md={3}>
              <Form.Group>
                <Form.Check className='form-title' label="Dry LTL" {...register('dryLtl')} />
                <Form.Check className='form-title' label="Dry Van" {...register('dryVan')} />
                <Form.Check className='form-title' label="Flatbed" {...register('flatbed')} />
                <Form.Check className='form-title' label="Refrigerated" {...register('refrigerated')} />
                <Form.Check className='form-title' label="Refrigerated LTL" {...register('refrigeratedLtl')} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className='form-title' >48 Foot Vans</Form.Label>
                <Form.Control type="text" {...register('FootVans48')} size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label className='form-title' >53 Foot Vans</Form.Label>
                <Form.Control type="text" {...register('FootVans53')} size="sm" />
              </Form.Group>

            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className='form-title' >48 Foot Reefers</Form.Label>
                <Form.Control type="text" {...register('FootReefers48')} size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label className='form-title' >53 Foot Reefers</Form.Label>
                <Form.Control type="text" {...register('FootReefers53')} size="sm" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className='form-title' >48 Foot Beds</Form.Label>
                <Form.Control type="text" {...register('Footbeds48')} size="sm" />
              </Form.Group>
              <Form.Group>
                <Form.Label className='form-title' >53 Foot Beds</Form.Label>
                <Form.Control type="text" {...register('Footbeds53')} size="sm" />
              </Form.Group>
            </Col>
          </Row>

          {/* Special Equipment Section */}
          <h6 className="mb-3 mt-5">Special Equipment (Check all that apply & must select at least one)</h6>
          <Row className="mb-4">
            {specialEquipmentOptions.map((option, index) => (
              <Col xs={12} md={4} key={index} className="mb-2">
                <Form.Check
                  type="checkbox"
                  label={option}
                  value={option}
                  className='form-title'
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
              </Col>
            ))}
          </Row>

          {/* Tractor and Equipment Counts */}
          <h6 className="mb-3 mt-5">Tractor and Equipment Counts</h6>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >Tractor / Power Units</Form.Label>
                <Form.Control type="text" {...register('tractorPowerUnits')} size="sm" />
              </Form.Group>
            </Col>
          </Row>
          <h6 className="mb-3 mt-5">Standard Carrier Alpha Code</h6>
          <Row className="mb-4">

            <Col md={6}>
              <Form.Group>
                <Form.Label className='form-title' >SCAC Code</Form.Label>
                <Form.Control type="text" {...register('scacCode')} size="sm" />
              </Form.Group>
            </Col>
          </Row>

          {/* Commodities List Section */}
          <h6 className="mb-3 mt-5">Commodities List (Check all that apply & must select at least one)</h6>
          <Row className="mb-4">
            <Col md={12}>
              <Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Check className='form-title' label="Agriculture" {...register('agriculture')} />
                    <Form.Check className='form-title' label="Alcohol" {...register('alcohol')} />
                    <Form.Check className='form-title' label="Automotive" {...register('automotive')} />
                    <Form.Check className='form-title' label="Beer and Wine" {...register('beerAndWine')} />
                    <Form.Check className='form-title' label="Chemicals" {...register('chemicals')} />
                    <Form.Check className='form-title' label="Electronics" {...register('electronics')} />
                  </Col>
                  <Col md={4}>
                    <Form.Check className='form-title' label="Food" {...register('food')} />
                    <Form.Check className='form-title' label="Household Goods" {...register('householdGoods')} />
                    <Form.Check className='form-title' label="Ice Cream" {...register('iceCream')} />
                    <Form.Check className='form-title' label="Machinery" {...register('machinery')} />
                    <Form.Check className='form-title' label="Metals" {...register('metals')} />
                    <Form.Check className='form-title' label="Pharmaceutical" {...register('pharmaceutical')} />
                  </Col>

                  <Col md={4}>
                    <Form.Check className='form-title' label="ManufacturedProducts" {...register('ManufacturedProducts')} />
                    <Form.Check className='form-title' label="Plastics Goods" {...register('PlasticsGoods')} />
                    <Form.Check className='form-title' label="Petroleum Products" {...register('PetroleumProducts')} />
                    <Form.Check className='form-title' label="Textiles" {...register('Textiles')} />
                    <Form.Check className='form-title' label="Wood Products" {...register('WoodProducts')} />
                    <Form.Check className='form-title' label="Other" {...register('Other')} />
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
          <h6 className="mb-3 mt-5">Certifications</h6>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Check className='form-title' label="SmartWay" type="radio" name="smartWay" value="yes" {...register('smartWay')} />
                <Form.Check className='form-title' label="FAST" type="radio" name="fast" value="yes" {...register('fast')} />
                <Form.Check className='form-title' label="CARB" type="radio" name="carb" value="yes" {...register('carb')} />
                <Form.Check className='form-title' label="Safety Permit (HM 232)" type="radio" name="safetyPermit" value="yes" {...register('safetyPermit')} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Check className='form-title' label="C-TPAT" type="radio" name="cTpat" value="yes" {...register('cTpat')} />
                <Form.Check className='form-title' label="TWIC" type="radio" name="twic" value="yes" {...register('twic')} />
                <Form.Check className='form-title' label="HazMat Certification" type="radio" name="hazmatCertification" value="yes" {...register('hazmatCertification')} />
              </Form.Group>
            </Col>
          </Row>
          <h6 className="mb-3 mt-5">Drop Trailer</h6>
          <p className='form-title'>Do you have the equipment and ability to drop trailers?</p>
          <Form.Group>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              className='form-title'
              {...register('agree', { required: true })}
            />
            <Form.Check
              type="radio"
              label="No"
              value="no"
              className='form-title'
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
