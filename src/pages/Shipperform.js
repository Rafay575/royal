

import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import LogisticsPage from "../components/LogisticsPage";
import CarrierResourcesSection from "../components/CarrierResourcesSection";
import MultiStepForm from "../components/MultiStepForm";
import { Container } from "react-bootstrap";
// import Shipper from "./Shipper";
const BlogView = React.lazy(() => import("../components/BlogView"));

const Shipper = React.lazy(() => import("../components/Shipper"));

const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
    import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Shipperform = () => {
    return (
        <>
            <Fragment>
                <Suspense fallback={<Preloader />}>

                    {/* <SearchPopup /> */}

                    <NavbarOne />

                    <Breadcrumb title={"SHIPPER"}  />
                    <Container className="my-5">

                        <MultiStepForm />
                    </Container>

                    <FooterOne />

                    {/* Footer Bottom One */}
                    <FooterBottomOne />
                </Suspense>
            </Fragment>
        </>
    );
};

export default Shipperform;
