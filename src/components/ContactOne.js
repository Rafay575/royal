import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactOne = () => {
  return (
    <>
      {/*contact-area start*/}
      <div className="container">
        <img src='assets/img/about/a7.png' alt='Transpro' />
        <div className=''>
          <div className='row justify-content-end'>
            <div className='col-xl-6 col-lg-7'>
              <div className='cta-inner-wrap'>
                <div className='section-title style-white mb-0'>
                  <h4 className='title-unique '>LET’S TALK</h4>
                  <h2 className='title'>
                    CALL US NOW FOR FREE CONSULTATION
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    <h6>Have Any Question</h6>
                    <h3>-3114-1-371</h3>
                  </div>
                </div>
                <Link className='btn btn-base' to='/contact'>
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*contact-area end*/}
    </>
  );
};

export default ContactOne;
