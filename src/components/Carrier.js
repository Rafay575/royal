import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './carrier.css';
import { Link, useNavigate } from 'react-router-dom';

function Carrier() {
    const navigator = useNavigate()
    const handleNavigate = (e) =>{
      console.log("first")
      e.preventDefault();
      navigator()
    }
  return (
    <section className="blog-details-area pd-top-120 pd-bottom-120 "  style={{ backgroundImage: 'url("assets/img/banner/bg.png")'  }}>
    <Container fluid className="banner-container  container ">
      <Row className="align-items-center">
        <Col md={8} xs={12}>
          <h1 className="text-white  banner-title">Ready to Haul Some Freight?</h1>
          <p className=" text-white banner-text">
            Royal Star Logistics is available to assist you in becoming an approved
            Royal Star Logistics contract freight carrier. Whether you are an
            independent owner-operator, mid-size, or larger fleet, we are ready
            to work with you.
          </p>
          <Link to={'/registration'}>
          <button className="button-11" >
            Become a Carrier
          </button>
          </Link>
        </Col>
       
      </Row>
    </Container>
  </section>
  )
}

export default Carrier


