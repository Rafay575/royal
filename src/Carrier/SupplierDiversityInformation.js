import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SupplierDiversityInformation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center form-title">Supplier Diversity Information</h1>
    <div className="supplier-diversity-form-container">

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Supplier Diversity Dropdown */}
        <Form.Group controlId="supplierDiversity" className="mb-3">
          <Form.Label>
            Supplier Diversity (Minority, Woman-Owned (M/WBE), Small Business (SBE), or Disadvantaged Small Business (DSBE) Enterprise)
          </Form.Label>
          <Form.Select {...register('supplierDiversity', { required: true })}>
            <option value="">--Please Select--</option>
            <option value="M/WBE">Minority/Woman-Owned (M/WBE)</option>
            <option value="SBE">Small Business (SBE)</option>
            <option value="DSBE">Disadvantaged Small Business (DSBE)</option>
            <option value="None">None of the Above</option>
          </Form.Select>
          {errors.supplierDiversity && (
            <span className="error-text">Supplier Diversity selection is required</span>
          )}
        </Form.Group>

        {/* Form Actions */}
        <div className="form-actions mt-4">
          <button type="submit" className=" button-11">
            Next 
          </button>
        </div>
      </Form>

      <style jsx>{`
        .supplier-diversity-form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 0 auto;
        }
        .form-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 20px;
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

export default SupplierDiversityInformation;
