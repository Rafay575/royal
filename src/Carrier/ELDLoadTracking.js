import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { baseUrl } from '../api/url';

const ELDLoadTracking = ({incPage}) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const reg_id = localStorage.getItem("___") // Get reg_id from Redux store

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/api/eld-load-tracking/submit-eld-load-tracking`, {
        reg_id: reg_id, // Send reg_id along with form data
        ...data
      });

      if (response.status === 200) {
        console.log('ELD Load Tracking data submitted successfully');
        incPage(); // Proceed to the next page
      }
    } catch (error) {
      console.error('Error submitting ELD Load Tracking data:', error);
    }
  };

  return (
    <>
      <h5 className="text-center mt-5 ">ELD/Load Tracking</h5>
    <div className="p-5">
      <h6 className="mb-3">Please Answer the Following:</h6>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Consent Checkbox */}
        <Form.Group controlId="consentCheckbox" className="mb-3 form-title">
          <Form.Check className='form-title' 
            type="checkbox"
            
            label="By checking this box, you are consenting to receive communications from the Allen Lund Company, which may include phone calls, text messages and/or emails for the purpose of providing load details or information related only to specific loads assigned to your company. You may revoke this consent at any time by texting 'STOP' to (888) 521-5863."
            {...register('consent', { required: true })}
          />
          {errors.consent && <span className="error-text">Consent is required.</span>}
        </Form.Group>

        {/* ELD Compliance */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className='form-title' >Are you ELD Compliant?</Form.Label>
              <Form.Check className='form-title' 
                type="radio"
                label="Yes"
                value="Yes"
                {...register('eldCompliant', { required: true })}
              />
              <Form.Check className='form-title' 
                type="radio"
                label="No"
                value="No"
                {...register('eldCompliant')}
              />
              {errors.eldCompliant && <span className="error-text">ELD compliance selection is required.</span>}
            </Form.Group>
          </Col>
        </Row>

        {/* ALC App Usage */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className='form-title' >ALC App (uses GPS/Phone)</Form.Label>
              <Form.Check className='form-title' 
                type="radio"
                label="Yes"
                value="Yes"
                {...register('alcApp', { required: true })}
              />
              <Form.Check className='form-title' 
                type="radio"
                label="No"
                value="No"
                {...register('alcApp')}
              />
              {errors.alcApp && <span className="error-text">ALC App usage selection is required.</span>}
            </Form.Group>
          </Col>
        </Row>

        {/* Tracking Methods */}
        <h6 className='mb-3 mt-5'>Do you use any of these tracking methods below?</h6>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Check className='form-title'  label="FourKites" type="radio" name="trackingMethod" value="FourKites" {...register('trackingMethod')} />
              <Form.Check className='form-title'  label="Macropoint" type="radio" name="trackingMethod" value="Macropoint" {...register('trackingMethod')} />
              <Form.Check className='form-title'  label="Project 44" type="radio" name="trackingMethod" value="Project 44" {...register('trackingMethod')} />
              <Form.Check className='form-title'  label="Trucker Tools" type="radio" name="trackingMethod" value="Trucker Tools" {...register('trackingMethod')} />
              <Form.Group controlId="otherTrackingMethod">
                <Form.Label className='form-title' >Other</Form.Label>
                <Form.Control type="text" placeholder="Specify other tracking method" {...register('otherTrackingMethod')} />
              </Form.Group>
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
        .eld-load-tracking-container {
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

export default ELDLoadTracking;
