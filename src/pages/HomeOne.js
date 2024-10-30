import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import NavbarTwo from "../components/NavbarTwo";
import NavbarThree from "../components/NavbarThree";
import NavbarFour from "../components/NavbarFour";
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const BlogOne = React.lazy(() => import("../components/BlogOne"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const PortfolioOne = React.lazy(() => import("../components/PortfolioOne"));
const ServiceOne = React.lazy(() => import("../components/ServiceOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const TestimonialOne = React.lazy(() => import("../components/TestimonialOne"));
const WhyChooseUsOne = React.lazy(() => import("../components/WhyChooseUsOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const HomeOne = () => {
  return (
    <div style={{background:'#E8E6CA'}}>
      <Fragment>
        <Suspense fallback={<Preloader />}>
      
          <NavbarOne />
          <BannerOne />
          <FeatureOne />
          <AboutOne />
          <WhyChooseUsOne />
          <CounterOne />
          <div className='call-to-contact-area pd-top-240'     >
            <ContactOne />
          </div>
          <TestimonialOne />       
          <FooterOne />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </div>
  );
};

export default HomeOne;
