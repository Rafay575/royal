// import React from "react";
// import TrackVisibility from "react-on-screen";
// import CountUp from "react-countup";
// import { Link } from "react-router-dom";

// const AboutOne = () => {
//   return (
//     <>
//       {/* about area start */}
//       <div className="about-area pd-bottom-120">
//         <div className="container">
//           <div className="about-area-inner">
//             <div className="row">
//               {/* Single Image Section */}
//               <div className="col-lg-6">
//                 <div className="about-thumb-wrap">
//                   <img
//                     className="img-main"
//                     src="./assets/img/about/a6.png"
//                     alt="Company"
//                     style={{
//                       borderRadius: "10px",
//                       width: "100%",
//                       objectFit: "cover",
//                       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
//                     }}
//                   />
//                   {/* Experience Badge */}
//                   <div className="experience-badge">
//                     <div className="details">
//                       <TrackVisibility once>
//                         {({ isVisible }) =>
//                           isVisible && (
//                             <h1 className="experience-number">
//                               <CountUp delay={0} start={0} end={22} />+
//                             </h1>
//                           )
//                         }
//                       </TrackVisibility>
//                       <p>Years of Experience</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Text Content Section */}
//               <div className="col-lg-6 align-self-center">
//                 <div className="about-inner-wrap">
//                   <div className="section-title">
//                     <h4 className="subtitle">About Us</h4>
//                     <h2 className="title">
//                       Welcome to the Leading Transport Company
//                     </h2>
//                     <p className="content">
//                       A leading brokerage firm based in the USA, committed to
//                       connecting businesses with reliable transportation
//                       solutions.
//                     </p>
//                     <div className="row">
//                       <div className="col-lg-12">
//                         <ul className="list-inner-wrap mb-3">
//                           <li>
//                             <i className="fa fa-check-circle"></i> Reliability
//                           </li>
//                           <li>
//                             <i className="fa fa-check-circle"></i> Expertise
//                           </li>
//                           <li>
//                             <i className="fa fa-check-circle"></i> Transparency
//                           </li>
//                           <li>
//                             <i className="fa fa-check-circle"></i> Efficiency
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="btn-wrap">
//                       <Link className="btn btn-base" to="/about">
//                         Learn More
//                       </Link>
//                       <div className="author-wrap">
//                         <div className="details">
//                           <img
//                             src="./assets/img/about/signature.png"
//                             alt="CEO Signature"
//                             height={40}
//                           />
//                           <p>CEO, Of Company</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//

// export default AboutOne;
import React from "react";

const AboutOne = () => {
  return (
    <>
      <div className="pb-3 pb-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            {/* Image Section */}
            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="./assets/img/about/a6.png"
                alt="About Us"
              />
            </div>

            {/* Text Section */}
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                <div className="section-title mb-2">
                <h4 className="subtitle">About us</h4>
                <h2 className="title">Who are we</h2>
              </div>
                  <p className="lead fs-4 text-secondary mb-3">
                    A leading brokerage firm based in the USA, committed to
                    connecting businesses with reliable transportation
                    solutions.
                  </p>
                  <p className="mb-5">
                    We are a fast-growing company, but we have never lost sight
                    of our core values. We believe in collaboration, innovation,
                    and customer satisfaction. We are always looking for new
                    ways to improve our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 gy-md-4 gx-xxl-5 mt-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex">
                <div className="me-4 text-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-shield-fill-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c-.69 0-1.34.146-1.937.406L2.68 1.682c-.746.372-1.38 1.194-1.504 1.987L.02 8.21c-.14.903.353 1.826 1.188 2.127l5.338 1.926 5.338-1.926c.835-.3 1.327-1.224 1.187-2.127l-1.156-6.54c-.125-.793-.758-1.615-1.504-1.987L9.937.406A3.245 3.245 0 0 0 8 0zM5.41 8.417l-1.71-1.71a.5.5 0 1 1 .707-.707L6 7.293l4.293-4.293a.5.5 0 1 1 .707.707L6.707 8.417a.5.5 0 0 1-.707 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="h4 mb-3">Reliability</h2>
                  <p className="text-secondary mb-0">
                    We ensure timely delivery with complete reliability across
                    all regions and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex">
                <div className="me-4 text-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-award-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.478 7.508a4 4 0 1 1 5.044 0l-.546 2.732a1.746 1.746 0 0 0-.333.962v.548h-3.334v-.548a1.746 1.746 0 0 0-.333-.962l-.546-2.732ZM8 0a7.16 7.16 0 0 0-2.33.437c.352.547.878 1.092 1.588 1.495C8.066 1.812 8.514 2 9 2h.25a7.164 7.164 0 0 0 1.732-.318l1.12 1.9a8.983 8.983 0 0 1-3.957 0L9 2A6.55 6.55 0 0 0 8 2h-.001v-.316C7.55.73 7.324.363 7 0h1ZM9 3a8.9 8.9 0 0 0-.422-.067c-.222-.043-.414-.113-.578-.227-.354-.234-.72-.676-.96-1.12C7.097 1.01 7.535.5 8 .5c.465 0 .903.51.96 1.086C8.78 1.93 8.482 2.573 8 3ZM9 4.55l.615.432c.08.05.12.14.12.246v.155c.105.47.282 1.111.57 1.91l.875-.765-.482-2.386L9 4.55Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="h4 mb-3">Expertise</h2>
                  <p className="text-secondary mb-0">
                    Our team has a deep understanding of the market and industry
                    standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparency */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex">
                <div className="me-4 text-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.333-8-5.333S0 8 0 8s3 5.333 8 5.333S16 8 16 8zm-8 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.005-.995a3.755 3.755 0 0 0 0-2.51 3.773 3.773 0 0 0-1.245-1.245 3.755 3.755 0 0 0-2.51 0 3.773 3.773 0 0 0-1.245 1.245 3.755 3.755 0 0 0 0 2.51 3.773 3.773 0 0 0 1.245 1.245 3.755 3.755 0 0 0 2.51 0 3.773 3.773 0 0 0 1.245-1.245z" />
                  </svg>
                </div>
                <div>
                  <h2 className="h4 mb-3">Transparency</h2>
                  <p className="text-secondary mb-0">
                    We maintain an open and transparent approach in all business
                    transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Efficiency */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex">
                <div className="me-4 text-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-speedometer2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a7 7 0 0 0-5.468 11.037.75.75 0 1 0 1.03-1.09A5.5 5.5 0 1 1 14 8a5.479 5.479 0 0 1-3.556 5.216.75.75 0 1 0 .556 1.39A7 7 0 1 0 8 1zm3.159 9.447a.75.75 0 0 0-.517-.11 1.514 1.514 0 1 1-1.537-2.768.75.75 0 0 0 .94-.94A2.517 2.517 0 1 0 12 9.002a.75.75 0 0 0-.14-.555l-1.01 2.035a.75.75 0 0 0-.14-.035z" />
                  </svg>
                </div>
                <div>
                  <h2 className="h4 mb-3">Efficiency</h2>
                  <p className="text-secondary mb-0">
                    Our services are designed for maximum efficiency, ensuring
                    smooth operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .lead {
          font-size: 1.25rem;
        }
        .fs-4 {
          font-size: 1.5rem;
        }
        .text-secondary {
          color: #6c757d;
        }
        .text-primary {
          color: #007bff;
        }
        .mb-3 {
          margin-bottom: 1rem;
        }
        .mb-5 {
          margin-bottom: 3rem;
        }
        .bi {
          display: block;
        }
        .h4 {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default AboutOne;
