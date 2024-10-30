import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import AboutPage from "../components/AboutPage";
import { Container } from "react-bootstrap";
import MissionComponent from "../components/MissionComponent";
import Services from "./Services";
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
  const servicesData = [
    {
      title: 'Nationwide Coverage with a Versatile Fleet',
      description: 'We operate across all states with a fleet that can meet any logistical demand.',
      icon: "assets/img/about/1.svg"
    },
    {
      title: 'Expertise and Experience',
      description: 'Decades of experience in the industry ensure top-notch service.',
      icon: "assets/img/about/2.svg"
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We prioritize our clients\' needs to build lasting partnerships.',
      icon: "assets/img/about/3.svg"
    },
    {
      title: 'Innovation and Technology',
      description: 'Embracing the latest in logistics tech to streamline operations and deliver efficiency.',
      icon: "assets/img/about/4.svg"
    },
    {
      title: 'Sustainability and Reliability',
      description: 'Committed to environmentally responsible practices while maintaining operational reliability.',
      icon: "assets/img/about/5.svg"
    }
  ];

  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>

          <NavbarOne />
          <section className="blog-details-area pd-top-120  " style={{ backgroundImage: 'url("assets/img/banner/bg.png")' }}>
            <Container fluid className="banner-container  container ">
              <h1 className="text-center" style={{ color: '#fff', fontWeight: '700', fontFamily: "Protest Guerrilla" }}>
                Royal Star Logistics
              </h1>
            </Container>
          </section>
          <section style={{ backgroundImage: 'url("assets/img/about/11.jpg")',backgroundPosition:'center',backgroundSize:'cover'}}>

          <AboutPage />
          <Services services={servicesData} />
          <MissionComponent />

          </section>
          <FooterOne />
          <FooterBottomOne />

        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
