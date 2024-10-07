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
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
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
                    <button className='button-11' style={{background:'#ff5f09'  }} type='submit' disabled={loading}>
                      {loading ? "Sending..." : "SEND MESSAGE"} {/* Display loading */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5' >
              {/* Contact information (same as before) */}
              <div className='contact-information-wrap' style={{background:'#ff5f09'  }}>
                <h3>CONTACT INFORMATION</h3>
                <div className='single-contact-info-wrap'>
                  <h6>Contact Number:</h6>
                  <div className='media'>
                    <div className='icon' style={{background:'#ff5f09'  }}>
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
                    <div className='icon' style={{background:'#ff5f09'  }}>
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
                    <div className='icon' style={{background:'#ff5f09'  }}>
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
        <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
      </div>
    </>
  );
};

export default ContactInner;
