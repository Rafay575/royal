import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <>
      {/* service area start */}
      <div
        className='service-area pd-top-115 pd-bottom-90 pb-lg-0'
        style={{ background: "url(assets/img/service/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle style-2'>SERVICES</h4>
                <h2 className='title'>OUR SERVICE FOR YOU</h2>
                <p>
                  Quickly optimize cooperative models for long-term high-impact
                  ROI. Dynamically drive innovative e-commerce and distributed
                  paradigms.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/a.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Freight Matching</h5>
                  <p>
                  Seamlessly connect with trusted carriers to ensure your freight is delivered efficiently and on time.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/c.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Logistics Management</h5>
                  <p>
                  Optimize your supply chain with our expert logistics management, from route planning to real-time shipment tracking.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/b.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Rate Negotiation</h5>
                  <p>
                  Save on transportation costs with our skilled rate negotiation, securing the best pricing and terms for your shipments.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOne;
