import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

const BannerOne = () => {
  const navigate = useNavigate()
  // Media query to check if screen width is less than 768px (small screens)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {/* banner start */}
      <div className="banner-area-unique text-white">
        <div >
          {isSmallScreen ? (
            <Carousel>
              {/* Carousel Item 1 */}
              <Carousel.Item>
                <div className="carousel-item-unique carriers-section-unique">
                  <h2 className="custom-heading">CARRIERS</h2>
                  <p className="custom-paragraph">Ready to haul some freight?</p>
                  <button className="btn-1-unique" as={Link}  onClick={()=>navigate("/carrier")}>
                    Become a Carrier
                  </button>
                </div>
              </Carousel.Item>

              {/* Carousel Item 2 */}
              <Carousel.Item>
                <div className="carousel-item-unique shippers-section-unique ">
                  <h2 className="custom-heading">SHIPPERS</h2>
                  <p className="custom-paragraph">We treat your freight like family</p>
                  <button className="btn-1-unique" as={Link} onClick={()=>navigate("/shipper")}>
                    Become a shipper
                  </button>
                </div>
              </Carousel.Item>

              {/* Carousel Item 3 */}
              <Carousel.Item>
                <div className="carousel-item-unique team-section-unique">
                  <h2 className="custom-heading">Load Board</h2>
                  <p className="custom-paragraph">Coming Soon</p>
                  <button className="btn-1-unique" as={Link} to="/jobs">
                    Learn More
                  </button>
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
                  <button className="btn-1-unique" as={Link}  onClick={()=>navigate("/carrier")}>
                    Become a Carrier
                  </button>
                </div>
              </Col>

              {/* Section 2 - Shippers */}
              <Col xs={12} md={4} className="banner-item-unique shippers-section-unique">
                <div className="content-unique">
                  <h2 className="custom-heading">SHIPPERS</h2>
                  <p className="custom-paragraph">We treat your freight like family</p>
                  <button className="btn-1-unique" as={Link} onClick={()=>navigate("/shipper")}>
                    Become a shipper
                  </button>
                </div>
              </Col>

              {/* Section 3 - Join Our Team */}
              <Col xs={12} md={4} className="banner-item-unique team-section-unique">
                <div className="content-unique">
                  <h2 className="custom-heading">Load Board</h2>
                  <p className="custom-paragraph">Coming Soon</p>
                  <button className="btn-1-unique" as={Link} to="/jobs">
                    Learn More
                  </button>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        /* Scoped button styles */
        .btn-1-unique {
          padding: 10px 30px;
          background-color: #fa4318;
          color: #fff;
          outline: none;
          border: none;
          border-radius: 50px;
        }

        /* Scoped banner styles */
        .banner-area-unique {
          padding: 0;
          background-color: #002b5b;
        }

        .banner-section-unique {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
        }

        .banner-item-unique, .carousel-item-unique {
          position: relative;
          color: #fff;
          text-align: center;
          background-size: cover;
          background-position: center;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          transition: transform 0.5s ease, background-color 0.5s ease;
        }

        .carriers-section-unique {
          background-image: url('assets/img/banner/bg.png');
        }

        .shippers-section-unique {
          background-image: url('assets/img/banner/bg.png');
        }

        .team-section-unique {
          background-image: url('assets/img/banner/bg.png');
        }

        .content-unique {
          position: relative;
          z-index: 2;
          transition: transform 0.5s ease;
        }

        /* Custom scoped styles for h2 and p */
        .custom-heading {
          font-size: 2.5rem;
          font-weight: 700;
          text-transform: uppercase;
          color:#fff
          }
          
          .custom-paragraph {
            color:#fff
          font-size: 1.2rem;
          margin: 10px 0;
        }

        button {
          margin: 5px;
        }

        /* Adding dark overlay effect */
        .banner-item-unique::before, .carousel-item-unique::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        /* Hover effect: Darken background and add transform */
        .banner-item-unique:hover .content-unique, .carousel-item-unique:hover .content-unique {
          transform: translateY(-10px) scale(1.05);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .carousel-item-unique {
            height: 60vh;
            display: flex;
        flex-direction: column;
          
          }

          .custom-heading {
            font-size: 2rem;
          }

          .custom-paragraph {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .carousel-item-unique {
            padding: 10px;
            
          }

          .custom-heading {
            font-size: 1.5rem;
          }

          .custom-paragraph {
            font-size: 0.9rem;
          }

          button {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default BannerOne;
