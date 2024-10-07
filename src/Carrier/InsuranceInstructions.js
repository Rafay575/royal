import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { baseUrl } from '../api/url';

const InsuranceInstructions = ({ incPage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const reg_id = useSelector((state) => state.user.id); // Get reg_id from Redux store

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('insuranceFile', data.insuranceFile[0]); // Append file to formData
    formData.append('reg_id', reg_id); // Append reg_id to formData

    try {
      const response = await axios.post(`${baseUrl}/api/insurance/upload-insurance`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log('File uploaded successfully', response.data);
        incPage(); // Proceed to the next page
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


  return (
    <>
      <h1 className="text-center form-title">Carrier Registration - Insurance Instructions</h1>
    <div className="insurance-instructions-container">
      <p className="form-description">
        Please review the Insurance Requirements Below
      </p>
      <p className="form-details">
        Please note a carrier will not be certified until a valid certificate is received. The insurance requirements are shown below. Certificates must be sent directly from the carrier's insurance agent.
      </p>

      <div className="insurance-requirements">
        <p><strong>The Certificate MUST show the following</strong></p>
        <p><strong>Certificate Holder</strong> must be shown as:</p>
        <p>
          Allen Lund Company LLC<br />
          PO BOX 1369<br />
          La Canada, CA 91012
        </p>

        <p><strong>Coverages:</strong> Certificate must include</p>
        <ul>
          <li><strong>Cargo</strong><br />Minimum Cargo Limit: $100,000</li>
          <li><strong>Commercial Automobile Liability</strong><br />Minimum combined Single Limit: $1,000,000</li>
          <li><strong>General Liability</strong><br />Minimum Each Occurrence: $1,000,000<br />Minimum General Aggregate: $2,000,000</li>
        </ul>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Please Upload a current copy of valid Insurance</Form.Label>
              <Form.Control
                type="file"
                {...register('insuranceFile', { required: true })}
              />
              {errors.insuranceFile && (
                <span className="error-text">Insurance file is required</span>
              )}
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
        .insurance-instructions-container {
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

export default InsuranceInstructions;