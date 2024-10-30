import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Carrier from "../components/Carrier";
import CarrierBenefits from "../components/CarrierBenefits";
import Tools from "../components/Tools";

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const BlogDetails = () => {
  return (
    <div style={{background:'#E8E6CA'}}>
      <Fragment>
        <Suspense fallback={<Preloader />}>
         
          <NavbarOne />

          <Carrier />
          <CarrierBenefits />
          <Tools />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </div>
  );
};

export default BlogDetails;
