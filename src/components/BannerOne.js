import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import "./bannerOne.css"

const BannerOne = () => {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {/* banner start */}
      <div className="banner-area-unique ">
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
                <div className="content-unique">
                  <h2 className="custom-heading">CARRIERS</h2>
                  <p className="custom-paragraph">Ready to haul some freight?</p>
                  <Link to={"/carrier"} className="btn-1-unique">Become a Carrier</Link>
                </div>
              </Col>

              {/* Section 2 - Shippers */}
              <Col xs={12} md={4} className="banner-item-unique shippers-section-unique">
                <div className="content-unique">
                  <h2 className="custom-heading">SHIPPERS</h2>
                  <p className="custom-paragraph">We treat your freight like family</p>
                  <Link to="/shipper" className="btn-1-unique">Become a Shipper</Link>
                </div>
              </Col>

              {/* Section 3 - Load Board */}
              <Col xs={12} md={4} className="banner-item-unique team-section-unique">
                <div className="content-unique">
                  <h2 className="custom-heading">Load Board</h2>
                  <Link to="/" className="btn-1-unique">Coming Soon</Link>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </div>

    </>
  );
};

export default BannerOne;
