import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './LogisticsPage.css';

const LogisticsPage = () => {
  return (
    <div  className="bg-white " >
      <Row className="align-items-center logistics-page-container-11">
        <Col md={6} className="text-content">
       
          <h2 className="section-title  text-uppercase">Online Load Tracking</h2>
          <p className="description">
            Upon activation of your profile with Royal Star Logistics, you will
            gain access to your shipments, with multiple options to track
            activity...
          </p>
          <blockquote className="custom-blockquote">
            Track your shipments in real-time from pick-up to delivery.
          </blockquote>
          <blockquote className="custom-blockquote">
            Fully customizable system that fits your transportation needs.
          </blockquote>
          <blockquote className="custom-blockquote">
            System integrates with ERP / Order Entry Systems.
          </blockquote>
          <blockquote className="custom-blockquote">
            Supported by 24×7 direct point of contact.
          </blockquote>
        </Col>
        <Col md={6} className="image-container">
          <img
            src="./assets/img/banner/a1.jpg"
            alt="Tracking"
            className="responsive-image"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LogisticsPage;
