import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MissionComponent = () => {
  return (
    <Container className="mission-container pb-5">
      <Row className="align-items-center">
        {/* Left column for text */}
        <Col lg={6} className="text-section">
          <div className="section mb-5">
            <h2 className="custom-heading">Our Mission</h2>
            <p className="custom-paragraph">
            To deliver exceptional freight brokerage and transportation services by leveraging
             our extensive industry experience, diverse fleet, and nationwide coverage. 
             We are committed to providing reliable, customized logistics solutions that prioritize customer satisfaction, 
             operational efficiency, and sustainable practices
            </p>
            <hr className="custom-divider" />
          </div>
          <div className="section">
            <h2 className="custom-heading">Our Vision</h2>
            <p className="custom-paragraph">
            To be the leading logistics partner in the United States, 
            recognized for our innovation, integrity, and unwavering 
            commitment to excellence. We aim to set new standards in the
             freight industry by continuously evolving to meet the needs of 
             our clients and contributing to a sustainable future.
            </p>
            <hr className="custom-divider" />
          </div>
        </Col>

        {/* Right column for image and heading */}
        <Col lg={6} className="text-center image-section">
          <h1 className="mission-heading">mission</h1>
          <img
            src="./assets/img/about/vission.jpeg"
            alt="Mission"
            className="img-fluid mission-image"
          />
        </Col>
      </Row>

      {/* Scoped CSS */}
      <style jsx>{`
        .custom-heading {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .custom-paragraph {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #333;
        }

        .custom-divider {
          border: 0;
          height: 2px;
          background-color: #000;
          margin: 1.5rem 0;
        }

        .mission-heading {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .mission-image {
          width: 100%;
          max-width: 350px;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .mission-heading {
            margin-top: 2rem;
            font-size: 2.5rem;
          }

          .mission-image {
            max-width: 100%;
          }

          .text-section {
            text-align: center;
          }
        }
      `}</style>
    </Container>
  );
};

export default MissionComponent;
