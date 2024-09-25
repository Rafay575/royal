import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
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
import Dashboard from "./Carrier/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CarrierPrequalification from './Carrier/CarrierPrequalification'

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
    <Router>
      <RouteScrollToTop />
      <Routes>
        <Route  path="/" element={<HomeOne />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/service" element={<Service />} />
        <Route  path="/service-details" element={<ServiceDetails />} />
        <Route  path="/shipper" element={<Blog />} />
        <Route  path="/shipperform" element={<Shipperform />} />
        <Route  path="/carrier" element={<BlogDetails />} />
        <Route  path="/registration" element={<RegistrationCriteria />}/>
        <Route  path="/pricing" element={<Pricing />} />
        <Route  path="/faq" element={<Faq />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/access" element={<PortalAccessRequest />} />

        <Route element={<PrivateRoute />}>
          <Route path="/carrierdashboard" >
            <Route index element={<CarrierPrequalification />} />
            <Route path="form" element={<Dashboard/>} />
          </Route>
        </Route>

      </Routes>

      <ScrollToTop smooth color="#FA4318" />
    </Router>
  );
}

export default App;
