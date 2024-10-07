import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* testimonial area start */}
      <div className='testimonial-area pd-top-115 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='title-unique'>TESTIMONIALS</h4>
                <h2 className='title'>OUR CLIENT’S FEEDBACK</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  "Working with Royal Star Logistics has been a game changer for us. They handled all our fresh produce loads 
                  with efficiency and professionalism, ensuring on-time deliveries every time. 
                  The communication has been seamless,
                  and their team truly understands the time-sensitive nature of our shipments.
                   We couldn’t be happier with their service."
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/a1.jpg' alt='Transpro' height={60}/>
                    </div> */}
                    <div className='details'>
                      <h5>ANGELINA MATHEW</h5>
                      <p>Logistics Manager at Greenfield Produce</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  "Royal Star Logistics is hands down the best brokerage service we’ve worked with. Their attention to detail, customer service, and ability to adapt to our changing needs is second to none. They handled our LTL loads flawlessly, saving us both time and money. I highly recommend their services."
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/a1.jpg' alt='Transpro' height={60}/>
                    </div> */}
                    <div className='details'>
                      <h5>MANISH PAUL</h5>
                      <p>Operations Director at Premier Foods USA </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  "We’ve been using Royal Star Logistics for over a year now,
                  and their commitment to excellence has never faltered. 
                  They consistently find us the best carriers, and our loads are always delivered on time.
                   The transparency and communication they offer give us peace of mind knowing our shipments are in
                    good hands." </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/a1.png' alt='TransproZ' height={60}/>
                    </div> */}
                    <div className='details'>
                      <h5>MICHEL CLACRK</h5>
                      <p>Supply Chain Manager at Northwind Agriculture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  "From the moment we started working with Royal Star Logistics,
                   we knew we were in good hands. Their team went above and beyond to handle our complex 
                   shipping needs with ease. They’ve become our go-to broker, 
                   and I can’t recommend them enough for their top-notch service and
                    reliability." </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/a1.jpg' alt='Transpro' height={60} />
                    </div> */}
                    <div className='details'>
                      <h5>MONISH POUL</h5>
                      <p>Senior Buyer at Maple Grove Farms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialOne;
