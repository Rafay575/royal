import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from 'react-simple-typewriter';  // Importing react-simple-typewriter

const ContactOne = () => {
  // Using the useTypewriter hook to handle the typing effect
  const [text] = useTypewriter({
    words: ['CALL FOR FREE CONSULTATION!'],
    loop: true,          // Infinite loop
    delaySpeed: 2000,    // Delay between loops
    typeSpeed: 100,      // Speed of typing
    deleteSpeed: 50,     // Speed of deleting
  });

  return (
    <>
      {/*contact-area start*/}
      <div className="container">
        <img src='assets/img/banner/23.jpg' alt='Transpro' height={360}/>
        <div className=''>
          <div className='row justify-content-end'>
            <div className='col-xl-6 col-lg-7'>
              <div className='cta-inner-wrap'>
                <div className='section-title style-white mb-0'>
                  <h4 className='title-unique '>LET’S TALK</h4>
                  {/* Typing effect h2 tag */}
                  <h2 className='title'>
                    {text}
                    <Cursor cursorStyle="|" />
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    <h6>Have Any Question</h6>
                    <h3>+1 (319) 576 3111</h3>
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
