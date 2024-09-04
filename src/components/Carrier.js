import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './carrier.css';
import { useNavigate } from 'react-router-dom';
function Carrier() {
    const navigate = useNavigate()
  return (
    <section className="blog-details-area pd-top-120 pd-bottom-120 "  style={{ backgroundImage: 'url("assets/img/banner/bg.png")'  }}>
    <Container fluid className="banner-container  container pd-top-120">
      <Row className="align-items-center">
        <Col md={8} xs={12}>
          <h1 className="text-white  banner-title">Ready to Haul Some Freight?</h1>
          <p className=" text-white banner-text">
            Allen Lund Company is available to assist you in becoming an approved
            Allen Lund Company contract freight carrier. Whether you are an
            independent owner-operator, mid-size, or larger fleet, we are ready
            to work with you.
          </p>
          <Button className="btn btn-base" onClick={()=>{navigate("/registration-criteria")}}>
            Become a Carrier
          </Button>
        </Col>
       
      </Row>
    </Container>
  </section>
  )
}

export default Carrier
 // Custom CSS

