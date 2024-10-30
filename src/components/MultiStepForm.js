import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stepper.css';  // For custom styles
import { Button, Form, Container, Row, Col, Table, Nav, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';  // Import react-hot-toast
import axios from 'axios';  
import { baseUrl } from '../api/url';

function Step1({ register, errors }) {
    return (
        <>
            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            {...register('firstName', { required: 'First name is required' })}
                            isInvalid={errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            {...register('lastName', { required: 'Last name is required' })}
                            isInvalid={errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.lastName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="phone">
                        <Form.Label>Phone<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            {...register('phone', { required: 'Phone is required' })}
                            isInvalid={errors.phone}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.phone?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="email">
                        <Form.Label>Email<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                            {...register('email', { required: 'Email is required' })}
                            isInvalid={errors.email}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="title">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your job title"
                            {...register('title')}
                        />
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="company">
                        <Form.Label>Company<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your company name"
                            {...register('company', { required: 'Company name is required' })}
                            isInvalid={errors.company}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.company?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="origin">
                        <Form.Label>Origin (City/State/Zip)<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the origin location"
                            {...register('origin', { required: 'Origin is required' })}
                            isInvalid={errors.origin}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.origin?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="destination">
                        <Form.Label>Destination (City/State/Zip)<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the destination location"
                            {...register('destination', { required: 'Destination is required' })}
                            isInvalid={errors.destination}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.destination?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </>
    );
}
function Step2({ register, errors }) {
    return (
        <>
            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="pickupDate">
                        <Form.Label>Pickup Date<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select the pickup date"
                            {...register('pickupDate', { required: 'Pickup date is required' })}
                            isInvalid={errors.pickupDate}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.pickupDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="deliveryDate">
                        <Form.Label>Delivery Date<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select the delivery date"
                            {...register('deliveryDate', { required: 'Delivery date is required' })}
                            isInvalid={errors.deliveryDate}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.deliveryDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={4} xs={12} className='mt-3'>
                    <Form.Group controlId="commodity">
                        <Form.Label>Commodity<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the commodity"
                            {...register('commodity', { required: 'Commodity is required' })}
                            isInvalid={errors.commodity}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.commodity?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4} xs={12} className='mt-3'>
                    <Form.Group controlId="weight">
                        <Form.Label>Weight (lbs<span style={{color:'red'}}>*</span>)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter the weight in lbs"
                            {...register('weight', { required: 'Weight is required' })}
                            isInvalid={errors.weight}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.weight?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4} xs={12} className='mt-3'>
                    <Form.Group controlId="equipment">
                        <Form.Label>Equipment<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the equipment type"
                            {...register('equipment', { required: 'Equipment is required' })}
                            isInvalid={errors.equipment}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.equipment?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="truckType">
                        <Form.Label>Truck Type<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the truck type"
                            {...register('truckType', { required: 'Truck type is required' })}
                            isInvalid={errors.truckType}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.truckType?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="trailerSize">
                        <Form.Label>Trailer Size<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the trailer size"
                            {...register('trailerSize', { required: 'Trailer size is required' })}
                            isInvalid={errors.trailerSize}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontSize:'10px'}}>
                            {errors.trailerSize?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="specialInstructions" className='mt-3'>
                <Form.Label>Special Instructions / Comments</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any special instructions or comments"
                    {...register('specialInstructions')}
                />
            </Form.Group>
        </>
    );
}



const Preview = ({ formData }) => {
    return (
        <div>

            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Name</th>
                        <td>{formData.firstName + " " + formData.lastName}</td>
                        <th style={{ color: "#fa4318" }}>Title</th>
                        <td>{formData.title}</td>
                    </tr>
                    <tr>
                       
                        <th style={{ color: "#fa4318" }}>Phone</th>
                        <td>{formData.phone}</td>
                        <th style={{ color: "#fa4318" }}>Email</th>
                        <td>{formData.email}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Company</th>
                        <td>{formData.company}</td>
                        <th style={{ color: "#fa4318" }}>Equipment</th>
                        <td>{formData.equipment}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Origin</th>
                        <td>{formData.origin}</td>
                        <th style={{ color: "#fa4318" }}>Destination</th>
                        <td>{formData.destination}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Pickup Date</th>
                        <td>{formData.pickupDate}</td>
                        <th style={{ color: "#fa4318" }}>Delivery Date</th>
                        <td>{formData.deliveryDate}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Commodity</th>
                        <td>{formData.commodity}</td>
                        <th style={{ color: "#fa4318" }}>Weight</th>
                        <td>{formData.weight}</td>
                    </tr>
                    <tr>
                 
                        <th style={{ color: "#fa4318" }}>Truck Type</th>
                        <td >{formData.truckType}</td>
                       
                        <th style={{ color: "#fa4318" }}>Trailer Size</th>
                        <td>{formData.trailerSize}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Special Instructions</th>
                        <td colSpan={3}>{formData.specialInstructions}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};


function MultiStepForm() {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors }, trigger, getValues, reset } = useForm();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);  // Loading state

    const nextStep = async () => {
        const valid = await trigger();
        if (valid) {
            setFormData(getValues());
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const onSubmit = async (data) => {
        setLoading(true);  // Show loading spinner

        try {
            const response = await axios.post(`${baseUrl}/api/submit-truckload-quote`, data);
            if (response.status === 200) {
                toast.success('Form submitted successfully!');  // Show success toast
                reset();  // Reset the form
                setStep(1);  // Go back to the first step
            }
        } catch (error) {
            toast.error('Error submitting the form. Please try again.');  // Show error toast
            console.error('Error:', error);
        } finally {
            setLoading(false);  // Hide loading spinner
        }
    };

    return (
        <section id="tabs">
            {/* Hot toast container */}
            
            <h2 className='text-center mb-5 ' style={{ color: "#fa4318" }}>Truckload Quote</h2>
            <Container className="form-container">
                <Nav variant="tabs" className="nav-fill" activeKey={step}>
                    <Nav.Item>
                        <Nav.Link
                            eventKey={1}
                            className={step === 1 ? "active" : ""}
                        >
                            Basic info
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            eventKey={2}
                            className={step === 2 ? "active" : ""}
                        >
                            Details
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            eventKey={3}
                            disabled={step < 3}
                            className={step === 3 ? "active" : ""}
                        >
                            Preview
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="tab-content py-5 px-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {step === 1 && <Step1 register={register} errors={errors} />}
                        {step === 2 && <Step2 register={register} errors={errors} />}
                        {step === 3 && <Preview formData={formData} />}

                        <div className={`mt-5 d-flex ${step > 1 ? "justify-content-between" : "justify-content-end"} `}>
                            {step > 1 && <button className='button-11  ' style={{backgroundColor:"gray"}} onClick={prevStep}>Previous</button>}
                            {step < 3 && <button className=" button-11 " onClick={nextStep}>Next</button>}
                            {step === 3 && (
                                <button  className="ml-2 bg-success button-11" type="submit" disabled={loading}>
                                    {loading ? (
                                        <Spinner animation="border" size="sm" />  // Show spinner when loading
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            )}
                        </div>
                    </Form>
                </div>
            </Container>
        </section>
    );
}

export default MultiStepForm;