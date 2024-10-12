import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const AboutPage = () => {
    const features = [
        {
          title: 'Nationwide Coverage with a Versatile Fleet',
          description: 'We operate across all states with a fleet that can meet any logistical demand.',
        },
        {
          title: 'Expertise and Experience',
          description: 'Decades of experience in the industry ensure top-notch service.',
        },
        {
          title: 'Customer-Centric Approach',
          description: 'We prioritize our clients\' needs to build lasting partnerships.',
        },
        {
          title: 'Innovation and Technology',
          description: 'Embracing the latest in logistics tech to streamline operations and deliver efficiency.',
        },
        {
          title: 'Sustainability and Reliability',
          description: 'Committed to environmentally responsible practices while maintaining operational reliability.',
        }
      ];
  return (
    <div
      className="about-page"
      style={{
        // backgroundColor: '#ffffff',
        padding: '60px 0',
        color: '#333',
      }}
    >
      <Container>
        {/* Introduction Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
          
            <p className="text-center" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              At Royal Star Logistics, we’ve been a cornerstone of transportation for over two decades. Our journey began with a simple mission: to provide reliable, efficient movement of freight to shippers across the United States. Today, we proudly operate a diverse fleet of trucks in every state, ensuring that your freight is handled with the utmost care, from origin to destination.
            </p>
          </Col>
        </Row>

        {/* Story Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="mb-4" >
              Our Story
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Founded in 2008, we started as a small operation with a big vision. We recognized the growing need for a logistics partner who could do more than just move goods. We wanted to offer a service that was personal, trustworthy, and above all, dependable. Over the years, we’ve been known for our dedication to customer satisfaction and our ability to adapt to the ever-changing demands of the logistics industry.
            </p>
          </Col>
          <Col md={6}>
            {/* Replace this with an image or illustration */}
            <img src="./assets/img/about/a5.jpg" alt="Our Fleet" className="img-fluid" style={{ borderRadius: '10px' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
