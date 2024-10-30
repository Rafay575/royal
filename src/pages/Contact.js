import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import { Col, Container, Row } from "react-bootstrap";
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const Contact = () => {
  return (
    <div style={{background:'#E8E6CA'}} >
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
        
          <NavbarOne />
          <section className="blog-details-area pd-top-120 " style={{ backgroundImage: 'url("assets/img/banner/bg.png")' }}>
            <Container fluid className="" >
                <Row className="align-items-center ">
                    <Col  >
                        <h1 className="text-white text-center ">Contact Us</h1>
                      
                    </Col>
                </Row>
            </Container>
        </section>
          <ContactInner />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </div>
  );
};

export default Contact;
