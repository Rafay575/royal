import React, { useState } from 'react';
import NavbarComponent from './NavbarComponent';
import SidebarComponent from './SidebarComponent';
import { Row, Col } from 'react-bootstrap';
import AddressInformation from './AddressInformation';
import "./main.css"
import ContactInformation from './ContactInformation';
import CarrierPolicies from './CarrierPolicies';
import InsuranceInstructions from './InsuranceInstructions';
import CarrierEquipmentProfile from './CarrierEquipmentProfile';
import ELDLoadTracking from './ELDLoadTracking';
import SupplierDiversityInformation from './SupplierDiversityInformation';
import CARBTruckBusCompliance from './CARBTruckBusCompliance';
import StatusReport from './StatusReport';
import CarrierOperatingAreas from './CarrierOperatingAreas';
import CompanyAgreement from './CompanyAgreement';
const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true); // Toggle sidebar visibility
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const toggleSidebar = () => setShowSidebar(!showSidebar); // Toggle sidebar function

  const incPage = () =>{
    setCurrentPage(currentPage+1) 
  }
  const handlePageChange = (page) => {
    setCurrentPage(page); // Change the page content based on the sidebar link clicked
  };



  console.log(toggleSidebar)
  return (
    <>
    
      <NavbarComponent toggleSidebar={toggleSidebar} />

      <div className="d-flex">
        <Row className="flex-fill">
        
          {
            showSidebar &&
            (

              <Col lg={2} className={`sidebar ${showSidebar ? 'sidebar-visible' : 'off'}`} style={{ position: "fixed", top: "60px", height: "100vh", zIndex: 1050 }}>
            <SidebarComponent handlePageChange={handlePageChange} />
          </Col>
            )
          }
          <Col lg={{ span: 10, offset: 2 }} style={{ overflowY: "auto", marginTop: "60px" }}>
            {/* Form content for the current page */}
            {currentPage === 1 && <AddressInformation currentPage={currentPage} incPage={incPage}/>}
            {currentPage === 2 && <ContactInformation currentPage={currentPage} incPage={incPage}/>}
            {currentPage === 3 && <CarrierPolicies    currentPage={currentPage} incPage={incPage}/>}
            {currentPage === 4 && <CompanyAgreement  />}
            {currentPage === 5 && <InsuranceInstructions  />}
            {currentPage === 6 && <CarrierEquipmentProfile  />}
            {currentPage === 7 && <ELDLoadTracking  />}
            {currentPage === 8 && <CarrierOperatingAreas  />}
            {currentPage === 9 && <SupplierDiversityInformation  />}
            {currentPage === 10 && <CARBTruckBusCompliance  />}
            {currentPage === 11 && <StatusReport  />}
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .sidebar {
          display: none;
          background-color: #f8f9fa;
          transition: 0.3s;
        }
        .sidebar-visible {
          display: block;
        }
          .off{
          
          display:none !important}
        @media (max-width: 991px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Dashboard;
