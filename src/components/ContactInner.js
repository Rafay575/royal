import React, { useState } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import axios from "axios"; // Import axios for API calls
import { toast, Toaster } from "react-hot-toast";
import { baseUrl } from "../api/url";

const ContactInner = () => {
  const { register, handleSubmit, reset } = useForm(); // Initialize react-hook-form
  const [loading, setLoading] = useState(false); // State to manage loading

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/contact`, data); // Send form data to API
      if (response.status === 200) {
        toast.success("Message Sent Successfully!");
        reset(); // Reset form after successful submission
      } else {
        toast.error("Message Not Sent!");
      }
    } catch (error) {
      toast.error("Error submitting the form!");
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <>
        {/* border-top: 5px solid #244855;
    border-bottom: 5px solid #244855;
    border-left: 5px solid #244855; */}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center' >
            <div className='col-lg-7' style={{background:" #fff", borderTop: '5px solid rgb(230, 72, 51)',
    borderBottom: '5px solid rgb(230, 72, 51)',
    borderLeft: '5px solid rgb(230, 72, 51)'
    ,borderTopLeftRadius: '60px',
    borderBottomLeftRadius: '60px'
    }}>
              <form
                className='contact-form text-center'
                onSubmit={handleSubmit(onSubmit)} // Submit form using react-hook-form
              >
                <h3>Contact Us</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaUserAlt />
                      </label>
                      <input
                        type='text'
                        placeholder='Your name'
                        {...register("user_name", { required: true })} // Register input field
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type='email'
                        placeholder='Your email'
                        {...register("user_email", { required: true })} // Register input field
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaCalculator />
                      </label>
                      <input
                        type='text'
                        placeholder='Phone number'
                        {...register("phone_number", { required: true })} // Register input field
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaFileAlt />
                      </label>
                      <input
                        type='text'
                        placeholder='subject'
                        {...register("subject", { required: true })} // Register input field
                      />
                      
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder='Write message'
                        {...register("message", { required: true })} // Register textarea
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='button-11' style={{background:'#E64833'  }} type='submit' disabled={loading}>
                      {loading ? "Sending..." : "SEND MESSAGE"} {/* Display loading */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5' >
              {/* Contact information (same as before) */}
              <div className='contact-information-wrap' style={{background:'#244855',borderTopRightRadius: '60px',
    borderBottomRightRadius: '60px' }}>
                <h3>CONTACT INFORMATION</h3>
                <div className='single-contact-info-wrap'>
                  <h6>Contact Number:</h6>
                  <div className='media'>
                    <div className='icon' style={{background:'#E64833'  }}>
                      <FaPhoneAlt />
                    </div>
                    <div className='media-body'>
                      <p>772 501 2777</p>
                      {/* <p>+1 932-654-9874</p> */}
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap'>
                  <h6>Mail Address:</h6>
                  <div className='media'>
                    <div className='icon' style={{background:'#E64833'  }}>
                      <FaRegEnvelope />
                    </div>
                    <div className='media-body'>
                      <p>Contact@royalstarlogistics.us</p>
                      <p>Royalstarlogistics7@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>Office Location:</h6>
                  <div className='media'>
                    <div className='icon' style={{background:'#E64833'  }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='media-body'>
                      <p>2314 1st PL SW, Vero Beach, FL</p>
                      <p>32962, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-g-map'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.2897013149657!2d-80.40815468492436!3d27.589699982846807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de9fcacb48403b%3A0xe21bcde3691fdbd8!2s2314%201st%20Pl%20SW%2C%20Vero%20Beach%2C%20FL%2032962%2C%20USA!5e0!3m2!1sen!2s!4v1697021033945!5m2!1sen!2s"
       ></iframe>

      </div>
    </>
  );
};

export default ContactInner;
