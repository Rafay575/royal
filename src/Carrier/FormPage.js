import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const FormPage = ({ currentPage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {currentPage === 1 && (
        <>
          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" {...register("companyName", { required: true })} />
            {errors.companyName && <span>This field is required</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label>DBA</Form.Label>
            <Form.Control type="text" {...register("dba", { required: true })} />
            {errors.dba && <span>This field is required</span>}
          </Form.Group>
          
          <Button type="submit">Submit Page 1</Button>
        </>
      )}

      {currentPage === 2 && (
        <>
          {/* Page 2 fields */}
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" {...register("address", { required: true })} />
            {errors.address && <span>This field is required</span>}
          </Form.Group>
          {/* Continue with more fields */}
          <Button type="submit">Submit Page 2</Button>
        </>
      )}

      {/* Repeat the similar structure for pages 3-7 */}
    </Form>
  );
};

export default FormPage;
