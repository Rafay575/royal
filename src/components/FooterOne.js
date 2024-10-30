import React, { useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { baseUrl } from "../api/url";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const FooterOne = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/subscribe`, { email });
      if (response.status === 201) {
        toast.success('Thank you for subscribing!');
      } else {
        toast.error('Subscription failed. Please try again later.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  return (
    <>
      {/* footer area start */}
      <Toaster position="top-right" reverseOrder={false} /> {/* Add the toaster component to render notifications */}

      <footer className='footer-area'>
        <div
          className='footer-top'
          style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/map-marker.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>OFFICE ADDRESS:</h6>
                    <p>2314 1st PL SW Vero Beach,</p>
                    <p>FL 32962, United States</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT US:</h6>
                    <p>contact@royalstarlogistics.us</p>
                    <p>772-501-2777</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>WORKING HOURS:</h6>
                    <p>Weekdays - Mon-Sat: 8am-5pm</p>
                    <p>Weekend  Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo1.svg' alt='Transpro' style={{ height: "100px" }} />
                </div>
                <div className='details'>
                  <p>
                    WITH YOU ON EVERY MILE OF THE WAY
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <Link to='https://www.facebook.com/profile.php?id=61558683127747&mibextid=ZbWKwL'>
                        <FaFacebookF />
                      </Link>
                    </li>


                    <li>
                      <Link to='https://www.linkedin.com/company/royal-star-logistics/'>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to='https://www.instagram.com/royalstarlogistics?igsh=bm55cXEwNmlib2V1'>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/carrier'>
                      <FaArrowRight /> Carrier
                    </Link>
                  </li>
                  <li>
                    <Link to='/shipper'>
                      <FaArrowRight /> Shipper
                    </Link>
                  </li>
                  <li>
                    <Link to='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>

                  <li>
                    <Link to='/contact'>
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_subscribe'>
                <h4 className='widget-title'>SUBSCRIBE NOW</h4>
                <p>
                  Stay updated with our latest news and offers. Subscribe by entering your email address below.
                </p>
                <div className='single-subscribe-inner'>
                  <input
                    type='text'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className='btn btn-base' onClick={handleSubscribe}>
                    Subscribe
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
