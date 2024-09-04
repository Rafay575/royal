import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Table, Nav } from 'react-bootstrap';
import './stepper.css';  // For custom styles
import Notification from './Notification';
function Step1({ register, errors }) {
    return (
        <>
            <Row>
                <Col md={6} xs={12} className='mt-3' >
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('firstName', { required: 'First name is required' })}
                            isInvalid={errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('lastName', { required: 'Last name is required' })}
                            isInvalid={errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="phone">
                        <Form.Label>Phone*</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('phone', { required: 'Phone is required' })}
                            isInvalid={errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="email">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            isInvalid={errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('title')}
                        />
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="company">
                        <Form.Label>Company*</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('company', { required: 'Company name is required' })}
                            isInvalid={errors.company}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.company?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="origin">
                        <Form.Label>Origin (City/State/Zip)*</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('origin', { required: 'Origin is required' })}
                            isInvalid={errors.origin}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.origin?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="destination">
                        <Form.Label>Destination (City/State/Zip)*</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('destination', { required: 'Destination is required' })}
                            isInvalid={errors.destination}
                        />
                        <Form.Control.Feedback type="invalid">
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
                        <Form.Label>Pickup Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register('pickupDate', { required: 'Pickup date is required' })}
                            isInvalid={errors.pickupDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.pickupDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="deliveryDate">
                        <Form.Label>Delivery Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register('deliveryDate', { required: 'Delivery date is required' })}
                            isInvalid={errors.deliveryDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.deliveryDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="commodity">
                        <Form.Label>Commodity</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('commodity', { required: 'Commodity is required' })}
                            isInvalid={errors.commodity}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.commodity?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="weight">
                        <Form.Label>Weight (lbs)</Form.Label>
                        <Form.Control
                            type="number"
                            {...register('weight', { required: 'Weight is required' })}
                            isInvalid={errors.weight}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.weight?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="equipment">
                        <Form.Label>Equipment</Form.Label>
                        <Form.Control
                            type="text"
                            {...register('equipment', { required: 'Equipment is required' })}
                            isInvalid={errors.equipment}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.equipment?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} xs={12} className='mt-3'>
                    <Form.Group controlId="trailerSize">
                        <Form.Label>Trailer Size</Form.Label>
                        <Form.Control
                            as="select"
                            {...register('trailerSize', { required: 'Trailer size is required' })}
                            isInvalid={errors.trailerSize}
                        >
                            <option value="53 feet">53 feet</option>
                            <option value="40 feet">40 feet</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {errors.trailerSize?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="specialInstructions">
                <Form.Label>Special Instructions / Comments</Form.Label>
                <Form.Control
                    as="textarea"
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
                        <th style={{ color: "#fa4318" }}>First Name</th>
                        <td>{formData.firstName}</td>
                        <th style={{ color: "#fa4318" }}>Phone</th>
                        <td>{formData.phone}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Last Name</th>
                        <td>{formData.lastName}</td>
                        <th style={{ color: "#fa4318" }}>Email</th>
                        <td>{formData.email}</td>
                    </tr>
                    <tr>
                        <th style={{ color: "#fa4318" }}>Title</th>
                        <td>{formData.title}</td>
                        <th style={{ color: "#fa4318" }}>Company</th>
                        <td>{formData.company}</td>
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
                        <th style={{ color: "#fa4318" }}>Equipment</th>
                        <td>{formData.equipment}</td>
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
    const [showNotification, setShowNotification] = useState(false);  // Control the notification visibility
    const [notificationMessage, setNotificationMessage] = useState('');

    const nextStep = async () => {
        const valid = await trigger();
        if (valid) {
            setFormData(getValues());
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const onSubmit = (data) => {
        console.log(data);
        //   alert('Form Submitted Successfully!');
        setNotificationMessage('Form submitted successfully!');
        reset();
        setShowNotification(true);


    };

    return (
        <section id="tabs">
            <Notification
                message={notificationMessage}
                showNotification={showNotification}
                setShowNotification={setShowNotification}
            />

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
                            {step > 1 && <Button className='btn btn-border-black ' onClick={prevStep}>Previous</Button>}
                            {step < 3 && <Button className=" btn btn-base " onClick={nextStep}>Next</Button>}
                            {step === 3 && <Button variant="success" className="ml-2 btn btn-base" type="submit">Submit</Button>}
                        </div>
                    </Form>
                </div>
            </Container>
        </section>
    );
}

export default MultiStepForm;