import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { baseUrl } from '../api/url';
import axios from 'axios';

const SupplierDiversityInformation = ({incPage}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const userId = useSelector((state) => state.user.id); // Get reg_id from Redux store

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/api/supplier-diversity/submit-supplier-diversity`, {
        supplierDiversity: data.supplierDiversity,
        reg_id: userId, // Send reg_id along with form data
      });

      if (response.status === 200) {
        console.log('Supplier diversity information submitted successfully');
        incPage(); // Proceed to the next page
      }
    } catch (error) {
      console.error('Error submitting supplier diversity information:', error);
    }
  };

  return (
    <>
      <h1 className="text-center form-title">Supplier Diversity Information</h1>
    <div className="supplier-diversity-form-container">

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Supplier Diversity Dropdown */}
        <h6>

            Supplier Diversity (Minority, Woman-Owned (M/WBE), Small Business (SBE), or Disadvantaged Small Business (DSBE) Enterprise)
        </h6>
        <Form.Group controlId="supplierDiversity" className="mb-3">
          <Form.Label>
            Is your company an M/WBE, SBE, or DSBE enterprise? (check all that apply)
          </Form.Label>
          <Form.Select {...register('supplierDiversity', { required: true })}>
            <option value="">--Please Select--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
         
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
