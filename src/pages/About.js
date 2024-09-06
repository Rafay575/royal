import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import AboutPage from "../components/AboutPage";
import { Container } from "react-bootstrap";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const SkillOne = React.lazy(() => import("../components/SkillOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const TestimonialTwo = React.lazy(() => import("../components/TestimonialTwo"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>

          <NavbarOne />
          <section className="blog-details-area pd-top-120  " style={{ backgroundImage: 'url("assets/img/banner/bg.png")' }}>
            <Container fluid className="banner-container  container pd-top-120">
              <h1 className="text-center" style={{ color: '#fff', fontWeight: '700' }}>
                Royal Star Logistics
              </h1>
            </Container>
          </section>
          <div className=' pd-bottom-120'>
            <AboutPage />
          </div>
          <FooterOne />
          <FooterBottomOne />

        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
