import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './carrier.css';
import { Link, useNavigate } from 'react-router-dom';

function ShipperTop() {
    const navigator = useNavigate()
    const handleNavigate = (e) => {
        console.log("first")
        e.preventDefault();
        navigator()
    }
    return (
        <section className="blog-details-area pd-top-120 pd-bottom-120 " style={{ backgroundImage: 'url("assets/img/banner/bg.png")' }}>
            <Container fluid className="banner-container  container ">
                <Row className="align-items-center">
                    <Col md={8} xs={12}>
                        <h1 className="text-white  banner-title">Reliable freight solutions</h1>
                        <p className=" text-white banner-text">
                        Royal Star Logistics offers reliable, personalized freight solutions with vetted carriers. Contact us at +1 (319) 576 3111 or email contact@royalstarlogistics.us for seamless shipping.
                        </p>
                        <Link to={'/shipperform'}>
                            <button className="button-11" >
                                Become a Shipper
                            </button>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ShipperTop


