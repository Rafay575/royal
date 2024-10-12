import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';  // Importing framer-motion
import "./WhyChooseUsOne.css"; // External CSS for additional styling

const WhyChooseUsOne = () => {
  const sectionRef = useRef(null);  // Create a reference for the section
  const isInView = useInView(sectionRef, { once: true });  // Detect if the section is in view

  // Fade-in animation variant for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3, ease: 'easeInOut' } }
  };

  return (
    <>
      {/* wcu-area start */}
      <div
        className='wcu-area-1 bg-overlay'
        style={{
          background: "url(assets/img/banner/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
        }}
        ref={sectionRef}  // Assign the section reference
      >
        <div className='container'>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}  // Trigger the animation when in view
            variants={fadeIn}
            className='row justify-content-center text-center'
          >
            <div className='col-xl-6 col-lg-8'>
              <div className='section-title style-white mb-5'>
                <h4 className='title-unique mb-3'>WHY CHOOSE US</h4>
                <p className='content'>
                  We dramatically enhance interactive metrics for reliable services. 
                  Proactively unleashing fully researched e-commerce solutions that cater to all your needs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}  // Trigger the animation when in view
            variants={fadeIn}
            className='row justify-content-center mb-5'
          >
            <div className='col-md-4 mb-4'>
              <motion.div
                className='single-wcu-wrap h-100 text-center'
                whileHover={{ scale: 1.05 }}  // Adding hover animation
              >
                <div className='icon mb-3'>
                  <img src='assets/img/wcu/icon-1.png' alt='Fast Transport' />
                </div>
                <div className='details'>
                  <h6 className='mb-2'>FAST TRANSPORTATION SERVICE</h6>
                  <p>
                    Enhance interactive metrics for reliable services. Proactively unleash fully researched transportation solutions.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className='col-md-4 mb-4'>
              <motion.div
                className='single-wcu-wrap h-100 text-center'
                whileHover={{ scale: 1.05 }}
              >
                <div className='icon mb-3'>
                  <img src='assets/img/wcu/icon-2.png' alt='Online Support' />
                </div>
                <div className='details'>
                  <h6 className='mb-2'>24/7 ONLINE SUPPORT</h6>
                  <p>
                    We offer 24/7 online support to assist you whenever needed, ensuring seamless operations for your business.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className='col-md-4 mb-4'>
              <motion.div
                className='single-wcu-wrap h-100 text-center'
                whileHover={{ scale: 1.05 }}
              >
                <div className='icon mb-3'>
                  <img src='assets/img/wcu/icon-3.png' alt='Safety and Reliability' />
                </div>
                <div className='details'>
                  <h6 className='mb-2'>SAFETY AND RELIABILITY</h6>
                  <p>
                    Your safety is our priority, offering highly reliable services backed by years of experience in the field.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* wcu-area end */}
    </>
  );
};

export default WhyChooseUsOne;
