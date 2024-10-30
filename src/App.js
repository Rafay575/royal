import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import Shipperform from "./pages/Shipperform";
import RegistrationCriteria from "./components/RegistrationCriteria";
import LoginPage from "./components/LoginPage";
import PortalAccessRequest from "./components/PortalAccessRequest";
import Dashboard from "./Carrier/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CarrierPrequalification from './Carrier/CarrierPrequalification'
import ModalForm from "./components/ModalForm";


function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: 'ease',
      once: true,
    });
    AOS.refresh();

    const isFormFilled = localStorage.getItem('formFilled');
    if (isFormFilled === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX2RvZSIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwNTU3MDU4NSwiZXhwIjoxNjA1NTc0MTg1fQ.FFbAfSzwNSYQ2DSNIwHHby0ic4dWRBVCroQqBCddHDo') {
      setShowModal(false);
    }
  }, []);

  const handleFormSubmit = (data) => {
    console.log('Form submitted with data:', data);

    localStorage.setItem('formFilled', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX2RvZSIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwNTU3MDU4NSwiZXhwIjoxNjA1NTc0MTg1fQ.FFbAfSzwNSYQ2DSNIwHHby0ic4dWRBVCroQqBCddHDo');
    setShowModal(false); // Close the modal
  };
  return (
    <Router>
      {/* Apply blur to the main content if the modal is active */}
      <div className={showModal ? 'blurred-background' : ''}>
        <RouteScrollToTop />
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipper" element={<Blog />} />
          <Route path="/shipperform" element={<Shipperform />} />
          <Route path="/carrier" element={<BlogDetails />} />
          <Route path="/registration" element={<RegistrationCriteria />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/access" element={<PortalAccessRequest />} />
          <Route element={<PrivateRoute />}>
            <Route path="/carrierdashboard">
              <Route index element={<CarrierPrequalification />} />
              <Route path="form" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
        <ScrollToTop smooth color="#FA4318" />
      </div>
      {/* Modal is always rendered */}
      <ModalForm show={showModal} handleFormSubmit={handleFormSubmit} />
    </Router>
  );
}

export default App;