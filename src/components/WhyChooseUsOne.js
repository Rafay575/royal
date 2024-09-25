import React, { useState } from "react";
import "./WhyChooseUsOne.css"; // External CSS for additional styling

const WhyChooseUsOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* wcu-area start */}
      <div
        className=' wcu-area-1 bg-overlay'
        style={{
          background: "url(assets/img/wcu/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
        }}
      >
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-xl-6 col-lg-8'>
              <div className='section-title style-white mb-5'>
                <h4 className='title-unique mb-3'>WHY CHOOSE US</h4>
                <h2 className='title mb-4'>Why You Should Choose Us</h2>
                <p className='content'>
                  We dramatically enhance interactive metrics for reliable
                  services. Proactively unleashing fully researched
                  e-commerce solutions that cater to all your needs.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-4 mb-4'>
              <div className='single-wcu-wrap h-100 text-center'>
                <div className='icon mb-3'>
                  <img src='assets/img/wcu/icon-1.png' alt='Fast Transport' />
                </div>
                <div className='details'>
                  <h6 className='mb-2'>FAST TRANSPORTATION SERVICE</h6>
                  <p>
                    Enhance interactive metrics for reliable services.
                    Proactively unleash fully researched transportation
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='single-wcu-wrap h-100 text-center'>
                <div className='icon mb-3'>
                  <img src='assets/img/wcu/icon-2.png' alt='Online Support' />
                </div>
                <div className='details'>
                  <h6 className='mb-2'>24/7 ONLINE SUPPORT</h6>
                  <p>
                    We offer 24/7 online support to assist you whenever needed,
                    ensuring seamless operations for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='single-wcu-wrap  h-100 text-center'>
                <div className='icon mb-3'>
                  <img src='assets/img/wcu/icon-3.png' alt='Safety and Reliability' />
                </div>
                <div className='details'>
                  <h6 className='mb-2'>SAFETY AND RELIABILITY</h6>
                  <p>
                    Your safety is our priority, offering highly reliable
                    services backed by years of experience in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wcu-area end */}
    </>
  );
};

export default WhyChooseUsOne;
