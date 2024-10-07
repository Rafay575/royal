import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
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
                    <p>Contact@royalstarlogistics.us</p>
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
                    <p>Weekdays - Mon-Fri: 8am-5pm</p>
                    <p>Weekend - Sat &amp; Sun: Closed</p>
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
                  <img src='assets/img/logo1.png' alt='Transpro' style={{height:"100px"}} />
                </div>
                <div className='details'>
                  <p>
                   WITH YOU ON EVERY MILE OF THE WAY
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    
                    
                    <li>
                      <a href='#'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link to='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <FaArrowRight />
                      Blog
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
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>OUR SERVICES</h4>
                <ul>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Air Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Ocean Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Railway Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Warehousing
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Distribution
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_subscribe'>
                <h4 className='widget-title'>SUBSCRIBE NOW</h4>
                <p>
                  Continually evolve worldwide vortals rather than process
                  centric human capital. Subscribe for our latest news &amp;
                  articles. and send message.
                </p>
                <div className='single-subscribe-inner'>
                  <input type='text' placeholder='Email Address' />
                  <a className='btn btn-base' href='#'>
                    <FaPaperPlane />
                  </a>
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
