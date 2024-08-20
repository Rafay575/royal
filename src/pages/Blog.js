import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
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
const Blog = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"CARRIER"} text={"BECOME A"} />

          {/* Blog View */}
          {/* <BlogView /> */}
          <Shipper />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Blog;
