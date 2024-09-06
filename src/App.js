import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";

import Shipperform from "./pages/Shipperform";
import RegistrationCriteria from "./components/RegistrationCriteria";
import LoginPage from "./components/LoginPage";
import PortalAccessRequest from "./components/PortalAccessRequest";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/service-details' element={<ServiceDetails />} />
        <Route exact path='/shipper' element={<Blog />} />
        <Route exact path='/shipperform' element={<Shipperform/>} />

        <Route exact path='/carrier' element={<BlogDetails />} />
        <Route exact path='/registration-criteria' element={<RegistrationCriteria />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/access' element={<PortalAccessRequest />} />
      </Routes>
      <ScrollToTop smooth color='#FA4318' />
    </BrowserRouter>
  );
}

export default App;
