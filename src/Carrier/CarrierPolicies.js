import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CarrierPolicies = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center form-title">Allen Lund Company - Carrier Policies</h1>
    <div className="carrier-policies-form-container">
      <p className="form-description">
        The following contains information and policies for new carriers loading with the Allen Lund Company.
      </p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Policy Information */}
        <div className="policy-section">
          <p><strong>Carrier Payments:</strong> New carriers are not eligible for com-check settlements for the first 90 days. During this trial period, the first payment must be paid by check to the address provided by the carrier. The payment for subsequent loads can be paid via ACH, regular mailed check, or if factoring, payment will be sent directly to your factor. After 90 days carriers will be able to request com-check settlements and advances.</p>
          
          <p><strong>Carrier Advances:</strong> During the initial 90-day period, carriers will be able to receive up to 40% in full advances. If the carrier is factoring a release form from the factor will be required.</p>

          <p><strong>Load Tracking:</strong> The ALC manager agrees to track all loads when requested by the ALC load manager. Tracking Apps may include Macro Point, Four Kites, or the ALC App. This is mandatory.</p>

          <p><strong>Driver Communications:</strong> The ALC load manager must be able to communicate directly with the driver until the load is delivered. This is mandatory.</p>

          <p><strong>Double-Brokering:</strong> The Broker/Carrier agreement specifically addresses double-brokering. ALC strongly recommends that this be read and understood before considering any such action. ALC has zero tolerance in such matters and will terminate any carrier that breaches our contract.</p>

          <p><strong>The following is from the broker/carrier contract:</strong> That I will not re-broker, co-broker, subcontract, assign, or transfer the transportation of shipments hereunder to any other person or entity conducting business under a different operating authority without prior written consent of BROKER. If CARRIER breaches this provision, among all other remedies (whether at equity or in law), BROKER shall have the right to pay the monies it owes CARRIER directly to the delivering carrier, in lieu of payment to CARRIER. Upon BROKER’s payment to delivering carrier, CARRIER shall not be released from any liability to BROKER under this Agreement or otherwise, including but not limited to any claims under 49 U.S.C. § 13902.</p>

          <p><strong>Potential Fines for Breach of Contract:</strong> A carrier that willfully re-brokers, co-brokers, subcontracts, assigns, or transfers the transportation of shipments to any other person or entity conducting business under a different operating authority without the prior written consent of the ALC broker will be in breach of contract and potentially fined up to $2500 per occurrence.</p>
        </div>

        {/* Payment Type Selection */}
        <h4>Please choose from one of the payment types:</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Quick Pay"
                value="quickPay"
                {...register('paymentType', { required: true })}
              />
              <Form.Check
                type="radio"
                label="Standard Check"
                value="standardCheck"
                {...register('paymentType')}
              />
              <Form.Check
                type="radio"
                label="Standard Check with Fuel Advance"
                value="standardCheckFuelAdvance"
                {...register('paymentType')}
              />
              <Form.Check
                type="radio"
                label="ACH - 14 days"
                value="ach14Days"
                {...register('paymentType')}
              />
              <Form.Check
                type="radio"
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
        <div className="policy-statement">
          <h4>Policy Statement</h4>
          <p>
            <strong>Quick Pay/Advance Policy:</strong> There will be no charge for all advances and/or advance settlements (quick-pay) as follows:
          </p>
          <ul>
            <li>1. Fee for advance is 2% of the rate or $25.00, whichever is higher.</li>
            <li>2. Fee for an advance settlement (quick-pay) on 2nd delivery is 2% of the settlement amount or $25.00, whichever is higher.</li>
            <li>3. The Allen Lund Company must receive all required information before final payment will be released.</li>
            <li>4. Payment Type: Direct deposit (ACH) is Allen Lund Company's preferred method of payment.</li>
            <li>5. Every effort will be made to pay carrier invoices within 14 days of invoice receipt, provided the following:</li>
          </ul>
          <ol>
            <li>1. The rate and delivery agreement has been signed.</li>
            <li>2. All copies are legible.</li>
            <li>3. Proof of claim has been given.</li>
            <li>4. A signed confirmation has been received.</li>
            <li>5. Invoice is mailed, faxed, or e-mailed to the appropriate Allen Lund Company Inc office.</li>
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
        .form-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .form-description {
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 20px;
        }
        .policy-section {
          font-size: 1rem;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .policy-statement ul, .policy-statement ol {
          margin-left: 20px;
          line-height: 1.5;
        }
        .error-text {
          color: red;
          font-size: 0.875rem;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
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

export default CarrierPolicies;
