import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';  // Import framer-motion
import "./bannerOne.css";

const BannerOne = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  // Fade-in animation variant for Framer Motion
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3, ease: 'easeInOut' } }
  };

  return (
    <div className="banner-area-unique">
      <div>
        {isSmallScreen ? (
          <Carousel>
            {/* Carousel Item 1 */}
            <Carousel.Item>
              <div className="carousel-item-unique carriers-section-unique">
                <h2 className="custom-heading">CARRIERS</h2>
                <p className="custom-paragraph">Ready to haul some freight?</p>
                <Link to="/carrier" className="btn-1-unique">Become a Carrier</Link>
              </div>
            </Carousel.Item>

            {/* Carousel Item 2 */}
            <Carousel.Item>
              <div className="carousel-item-unique shippers-section-unique">
                <h2 className="custom-heading">SHIPPERS</h2>
                <p className="custom-paragraph">We treat your freight like family</p>
                <Link to="/shipper" className="btn-1-unique">Become a Shipper</Link>
              </div>
            </Carousel.Item>

            {/* Carousel Item 3 */}
            <Carousel.Item>
              <div className="carousel-item-unique team-section-unique">
                <h2 className="custom-heading">Load Board</h2>
                <Link to="/" className="btn-1-unique">Coming Soon</Link>
              </div>
            </Carousel.Item>
          </Carousel>
        ) : (
          <Row className="banner-section-unique">
            {/* Section 1 - Carriers */}
            <Col xs={12} md={4} className="banner-item-unique carriers-section-unique">
              <motion.div
                className="content-unique"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
              >
                <h2 className="custom-heading">CARRIERS</h2>
                <p className="custom-paragraph">Ready to haul some freight?</p>
                <Link to={"/carrier"} className="btn-1-unique">Become a Carrier</Link>
              </motion.div>
            </Col>

            {/* Section 2 - Shippers */}
            <Col xs={12} md={4} className="banner-item-unique shippers-section-unique">
              <motion.div
                className="content-unique"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
              >
                <h2 className="custom-heading">SHIPPERS</h2>
                <p className="custom-paragraph">We treat your freight like family</p>
                <Link to="/shipper" className="btn-1-unique">Become a Shipper</Link>
              </motion.div>
            </Col>

            {/* Section 3 - Load Board */}
            <Col xs={12} md={4} className="banner-item-unique team-section-unique">
              <motion.div
                className="content-unique"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
              >
                <h2 className="custom-heading">Load Board</h2>
                <Link to="/" className="btn-1-unique">Coming Soon</Link>
              </motion.div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default BannerOne;
