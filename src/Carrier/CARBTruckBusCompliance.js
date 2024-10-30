import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { baseUrl } from '../api/url';

const CARBTruckBusCompliance = ({incPage}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const userId = useSelector((state) => state.user.id);
  const onSubmit = (data) => {
    const formData = new FormData();
  
    // Append all form data including the file
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append('reg_id', userId)

    console.log(userId)
    axios.post(`${baseUrl}/api/compliance`, formData)
      .then((response) => {
        console.log(response.data);
        incPage();  // Move to the next page
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
  

  const watchCarbCompliant = watch('carbCompliant', '');

 

  return (
    <>
      <h5 className="text-center mt-5">CARB Truck and Bus Compliance</h5>
      <div className="p-5">

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Compliance Question */}
          <div className="form-title">
            <h6 className='mb-3'>Truck and Bus Regulation</h6>
            <p>Are you California Air Resources Board (CARB) Truck and Bus Regulation compliant?</p>
            <p>To declare that you are Truck and Bus compliant, you must have a Certificate of Reported Compliance (see example image) which you will be asked to upload here. CARB Truck and Bus is NOT the same as CARB TRU (Transport Refrigeration Unit) and Drayage regulations.</p>
            
            <Row className="mb-3">
              <Col md={6}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="Yes"
                  {...register('carbCompliant', { required: true })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  {...register('carbCompliant')}
                />
                {errors.carbCompliant && <span className="error-text">Compliance selection is required</span>}
              </Col>
              <Col md={6} className="example-">
              <div>
                
              <img src="/assets/img/banner/a122.png" alt="Transpro" style={{ maxHeight: "150px" }} />

              </div>
              </Col>
            </Row>
          </div>
          <div className="form-title mb-4">
            <p><strong>Learn more link:</strong></p>
            <ul>
              <li><a href="https://www.arb.ca.gov/msprog/onrdiesel/ordiese.htm" target="_blank" rel="noopener noreferrer">https://www.arb.ca.gov/msprog/onrdiesel/ordiese.htm</a></li>
              <li><a href="https://ww3.arb.ca.gov/msprog/onrdiesel/documents/printcert.pdf" target="_blank" rel="noopener noreferrer">https://ww3.arb.ca.gov/msprog/onrdiesel/documents/printcert.pdf</a></li>
              <li><a href="https://ssl.arb.ca.gov/trucrs_reporting/login.php" target="_blank" rel="noopener noreferrer">https://ssl.arb.ca.gov/trucrs_reporting/login.php</a></li>
            </ul>
          </div>
          {/* Conditional Dropdown */}
          {watchCarbCompliant==='No' && (
            <div className="mb-3" >
              <Form.Label className='form-title'>Our records will indicate that your company is not compliant with the CARB Truck and Bus regulation.
              Please indicate your reason below:</Form.Label>
              <Col md={6}>
              <Form.Select {...register('planningToComply')} className='form-title' >
                <option className='form-title' value="">Select...</option>
                <option className='form-title' value="yes">I do not operate in California.</option>
                <option className='form-title' value="no">I operate in California, but am not currently CARB Truck and Bus compliant.</option>
              </Form.Select>
            </Col>
            </div>
          )}

          {/* Conditional Additional Form */}
          {watchCarbCompliant==='Yes' && (
            <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label className='form-title'>Certificate Issued To (Company Name):</Form.Label>
                <Form.Control
                  type="text"
                  className='form-title'
                  {...register('certificateIssuedTo', { required: true })}
                />
                {errors.certificateIssuedTo && <span className="error-text">This field is required</span>}
              </Form.Group>
      
              <Form.Group className="mb-3">
                <Form.Label className='form-title'>Number of Vehicles Reported:</Form.Label>
                <Form.Control
                  type="number"
                  {...register('vehiclesReported', { required: true })}
                />
                {errors.vehiclesReported && <span className="error-text">This field is required</span>}
              </Form.Group>
      
              <Form.Group className="mb-3">
                <Form.Label className='form-title'>Certificate Valid Until:</Form.Label>
                <Form.Control
                  type="date"
                  {...register('certificateValidUntil', { required: true })}
                />
                {errors.certificateValidUntil && <span className="error-text">This field is required</span>}
              </Form.Group>
      
              <Form.Group className="mb-3">
                <Form.Label className='form-title'> TRUCRS ID (Truck and Bus Fleet Identification #):</Form.Label>
                <Form.Control
                  type="text"
                  {...register('trucrsId', { required: true })}
                />
                {errors.trucrsId && <span className="error-text">This field is required</span>}
              </Form.Group>
      
              <Form.Group className="mb-3">
                <Form.Label className='form-title'>Compliance Type:</Form.Label>
                <Form.Select {...register('complianceType', { required: true })}>
                  <option value="">-- Please Select --</option>
                  <option value="enginemodelyearschedule">Engine Model Year Schedule</option>
                  <option value="FlexibilityOptions">FlexibilityOptions</option>
                </Form.Select>
                {errors.complianceType && <span className="error-text">This field is required</span>}
              </Form.Group>
      
              <Form.Group className="mb-3">
                <Form.Label className='form-title'>Upload a copy of your current Certificate of Reported Compliance from CARB:</Form.Label>
                <Form.Control
                  type="file"
                  {...register('certificateFile', { required: true })}
                />
                {errors.certificateFile && <span className="error-text">This field is required</span>}
              </Form.Group>
            </Form>
          </div>
          )}

          {/* Form Actions */}
          <div className="form-actions mt-4">
            <button type="submit" className="button-11">
              Next 
            </button>
          </div>
        </Form>

        <style jsx>{`
          .carb-compliance-form-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            margin: 0 auto;
          }
        
        `}</style>
      </div>
    </>
  );
};

export default CARBTruckBusCompliance;
