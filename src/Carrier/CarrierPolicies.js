import axios from 'axios';
import { useSelector } from 'react-redux';

import { Form, Button, Row, Col } from 'react-bootstrap';
import { baseUrl } from '../api/url';

const CarrierPolicies = ({ incPage, register, handleSubmit, setValue, errors }) => {

 
  const userId = useSelector((state) => state.user.id); // Get the reg_id (userId)

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/api/carrier-policies/submit-policies`, {
        paymentType: data.paymentType,
        reg_id: userId // Send the reg_id (userId) with the paymentType
      });

      if (response.status === 200) {
        console.log('Carrier policies submitted successfully');
        incPage(); // Move to the next page
      }
    } catch (error) {
      console.error('Error submitting carrier policies:', error);
    }
  };
  return (
    <>
      <h5 className="text-center mt-5"> Carrier Policies</h5>
      <div className="p-5">
        <p className="form-title">
          The following contains information and policies for new carriers loading with the Royal Star Trucking Company.
        </p>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Policy Information */}
          <div className="policy-section">
            <p className='form-title' style={{textAlign:"justify"}}><strong>Carrier Payments:</strong> New carriers are not eligible for com-check settlements for the first 90 days. During this trial period, the first payment must be paid by check to the address provided by the carrier. The payment for subsequent loads can be paid via ACH, regular mailed check, or if factoring, payment will be sent directly to your factor. After 90 days carriers will be able to request com-check settlements and advances.</p>

            <p className='form-title' style={{textAlign:"justify"}}><strong>Carrier Advances:</strong> During the initial 90-day period, carriers will be able to receive up to 40% in full advances. If the carrier is factoring a release form from the factor will be required.</p>

            <p className='form-title' style={{textAlign:"justify"}}><strong>Load Tracking:</strong> The ALC manager agrees to track all loads when requested by the ALC load manager. Tracking Apps may include Macro Point, Four Kites, or the ALC App. This is mandatory.</p>

            <p className='form-title' style={{textAlign:"justify"}}><strong>Driver Communications:</strong> The ALC load manager must be able to communicate directly with the driver until the load is delivered. This is mandatory.</p>

            <p className='form-title' style={{textAlign:"justify"}}><strong>Double-Brokering:</strong> The Broker/Carrier agreement specifically addresses double-brokering. ALC strongly recommends that this be read and understood before considering any such action. ALC has zero tolerance in such matters and will terminate any carrier that breaches our contract.</p>

            <p className='form-title' style={{textAlign:"justify"}}><strong>The following is from the broker/carrier contract:</strong> That I will not re-broker, co-broker, subcontract, assign, or transfer the transportation of shipments hereunder to any other person or entity conducting business under a different operating authority without prior written consent of BROKER. If CARRIER breaches this provision, among all other remedies (whether at equity or in law), BROKER shall have the right to pay the monies it owes CARRIER directly to the delivering carrier, in lieu of payment to CARRIER. Upon BROKER’s payment to delivering carrier, CARRIER shall not be released from any liability to BROKER under this Agreement or otherwise, including but not limited to any claims under 49 U.S.C. § 13902.</p>

            <p className='form-title' style={{textAlign:"justify"}}><strong>Potential Fines for Breach of Contract:</strong> A carrier that willfully re-brokers, co-brokers, subcontracts, assigns, or transfers the transportation of shipments to any other person or entity conducting business under a different operating authority without the prior written consent of the ALC broker will be in breach of contract and potentially fined up to $2500 per occurrence.</p>
          </div>

          {/* Payment Type Selection */}
          <h6 className='mt-5 mb-3'>Please choose from one of the payment types:</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Check
                  type="radio"
                  label="Quick Pay"
                  value="quickPay"
                  className='form-title'
                  {...register('paymentType', { required: true })}
                  />
                <Form.Check
                  type="radio"
                  label="Standard Check"
                  value="standardCheck"
                  className='form-title'
                  {...register('paymentType')}
                  />
                <Form.Check
                  type="radio"
                  className='form-title'
                  label="Standard Check with Fuel Advance"
                  value="standardCheckFuelAdvance"
                  {...register('paymentType')}
                  />
                <Form.Check
                  type="radio"
                  className='form-title'
                  label="ACH - 14 days"
                  value="ach14Days"
                  {...register('paymentType')}
                  />
                <Form.Check
                  type="radio"
                  className='form-title'
                  label="ACH - 14 days with Fuel Advance"
                  value="ach14DaysFuelAdvance"
                  {...register('paymentType')}
                />
                {errors.paymentType && (
                  <span className="error-text">Payment type selection is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Policy Statement */}
          <div className="form-title">
            <h6 className='mt-5 mb-3'>Policy Statement</h6>
            <p>
              <strong>Quick Pay/Advance Policy:</strong> There will be no charge for all advances and/or advance settlements (quick-pay) as follows:
            </p>
            <ol>
              <li> Fee for advance is 2% of the rate or $25.00, whichever is higher.</li>
              <li> Fee for an advance settlement (quick-pay) on 2nd delivery is 2% of the settlement amount or $25.00, whichever is higher.</li>
              <li> The Royal Star Trucking Company must receive all required information before final payment will be released.</li>
              <li> Payment Type: Direct deposit (ACH) is Royal Star Trucking Company's preferred method of payment.</li>
              <li> Every effort will be made to pay carrier invoices within 14 days of invoice receipt, provided the following:</li>
            <ol className='pl-5'>
              <li>The rate and delivery agreement has been signed.</li>
              <li>All copies are legible.</li>
              <li>Proof of claim has been given.</li>
              <li>A signed confirmation has been received.</li>
              <li>Invoice is mailed, faxed, or e-mailed to the appropriate Royal Star Trucking Company Inc office.</li>
            </ol>
            </ol>
          </div>

          {/* Form Actions */}
          <div className="form-actions mt-4">
            <button type="submit" className=" button-11">
              Next
            </button>
          </div>
        </Form>

        <style jsx>{`
        .carrier-policies-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 1200px;
          margin: 0 auto;
        }
         
       
      `}</style>
      </div>
    </>

  );
};

export default CarrierPolicies;
