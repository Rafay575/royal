import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
import './navbarone.css'
const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setActive(window.pageYOffset > 300);
      return () => (window.onscroll = null);
    };
  }, []);

  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  return (
    <>
      <header className="navbar-unique-area">
        <div className="navbar-unique-top">
          <div className="navbar-unique-container">
            <div className="navbar-unique-row">
              <div className="navbar-contact-icon">
                
                <FaPhoneAlt className="navbar-phone-icon" />
                <span className="navbar-contact-number">+1 (319) 576 3111</span>
              </div>

              <div className="navbar-contact-info">
                <ul className="navbar-info-list">
                  <li className="navbar-info-item">
                    <FaRegClock className="navbar-clock-icon" />
                    Mon - Sat: 8 am - 5 pm, Sunday: CLOSED
                 
                  <CiLocationOn className="ms-4" style={{fontSize:"18px",color:"#fa4318"}}/>
                    2314 1st PL SW Vero Beach, FL United States
                  </li>
                </ul>
              </div>

              <div className="navbar-social-links">
                <ul className="social-icons">
                  <li><Link to="https://www.facebook.com/profile.php?id=61558683127747&mibextid=ZbWKwL"><FaFacebookF /></Link></li>
                  <li><Link to="https://www.linkedin.com/company/royal-star-logistics/"><FaLinkedinIn /></Link></li>
                  <li><Link to="https://www.instagram.com/royalstarlogistics?igsh=bm55cXEwNmlib2V1"><FaInstagram /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className={`navbar-unique ${active ? "sticky-active" : ""}`}>
          <div className="navbar-unique-container">
            <div className="navbar-unique-logo">
              <Link to="/">
              <img src='assets/img/logo1.svg' alt='Transpro' style={{ height: "100px" }} />
              </Link>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className={`navbar-toggle ${open ? "open" : ""}`}
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon" />
              <span className="navbar-toggle-icon" />
              <span className="navbar-toggle-icon" />
            </button>
            <div className={`navbar-unique-menu `}>
              <ul className="navbar-unique-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shipper">Shipper</Link></li>
                <li><Link to="/carrier">Carrier</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className={`navbar-unique-menu nav-sm ${open ? "navbar-open" : ""}`}>
              <ul className="navbar-unique-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shipper">Shipper</Link></li>
                <li><Link to="/carrier">Carrier</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarOne;
