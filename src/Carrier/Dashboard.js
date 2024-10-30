import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import SidebarComponent from "./SidebarComponent";
import { Row, Col, Spinner } from "react-bootstrap";
import AddressInformation from "./AddressInformation";
import "./main.css";
import ContactInformation from "./ContactInformation";
import CarrierPolicies from "./CarrierPolicies";
import InsuranceInstructions from "./InsuranceInstructions";
import CarrierEquipmentProfile from "./CarrierEquipmentProfile";
import ELDLoadTracking from "./ELDLoadTracking";
import SupplierDiversityInformation from "./SupplierDiversityInformation";
import CARBTruckBusCompliance from "./CARBTruckBusCompliance";
import StatusReport from "./StatusReport";
import CarrierOperatingAreas from "./CarrierOperatingAreas";
import CompanyAgreement from "./CompanyAgreement";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true); // Toggle sidebar visibility
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();
  const toggleSidebar = () => setShowSidebar(!showSidebar); // Toggle sidebar function
  const [formData1, setFormData1] = useState({
    dotnum: "",
    companyName: "",
    dba: "",
    address: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    country: "USA",
    factoringCompany: "",
    sameAddress: false,
    payToCompanyName: "",
    payToAddress: "",
    payToAddress2: "",
    payToCity: "",
    payToState: "",
    payToZip: "",
    payToCountry: "USA",
    payToEmail: "",
    dunsNumber: "",
    w9Name: "",
    federalId: "",
    w9File: "",
  });
  const [formData2, setFormData2] = useState({
    corporateFullName: "",
    corporateTitle: "",
    corporatePhoneNumber: "",
    corporatePhoneExt: "",
    corporateEmail: "",
    corporateCellPhone: "",
    corporateFax: "",
    accountingFullName: "",
    accountingTitle: "",
    accountingPhoneNumber: "",
    accountingPhoneExt: "",
    accountingEmail: "",
    accountingCellPhone: "",
    accountingFax: "",
    dispatchFullName: "",
    dispatchTitle: "",
    dispatchPhoneNumber: "",
    dispatchPhoneExt: "",
    dispatchEmail: "",
    dispatchCellPhone: "",
    dispatchFax: "",
  });
  const incPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page); // Change the page content based on the sidebar link clicked
  };

  return (
    <>
    
      <NavbarComponent />

      <div className="d-flex">
        <Row className="flex-fill">
          {showSidebar && (
            <Col
              lg={2}
              className={`sidebar ${showSidebar ? "sidebar-visible" : "off"}`}
              style={{
                position: "fixed",
                top: "60px",
                height: "100vh",
                zIndex: 1050,
              }}
            >
              <SidebarComponent handlePageChange={handlePageChange} />
            </Col>
          )}
          <Col
            lg={{ span: 10, offset: 2 }}
            style={{ overflowY: "auto", marginTop: "60px" }}
          >
            {/* Form content for the current page */}
            {currentPage === 1 && (
              <AddressInformation
                incPage={incPage}
                formData={formData1}
                setFormData={setFormData1}
               
                />
              )}
            {currentPage === 2 && (
              <ContactInformation
              incPage={incPage}
              formData={formData2}
              setFormData={setFormData2}
             
              />
            )}
            {currentPage === 3 && (
              <CarrierPolicies
                currentPage={currentPage}
                incPage={incPage}
                register={register}
                handleSubmit={handleSubmit}
                setValue={setValue}
                watch={watch}
                errors={errors}
              />
            )}
            {currentPage === 4 && (
              <CompanyAgreement
                formData1={formData1}
                incPage={incPage}
                formData2={formData2}
              />
            )}
            {currentPage === 5 && <InsuranceInstructions incPage={incPage} />}
            {currentPage === 6 && <CarrierEquipmentProfile incPage={incPage} />}
            {currentPage === 7 && <ELDLoadTracking incPage={incPage} />}
            {currentPage === 8 && <CarrierOperatingAreas incPage={incPage} />}
            {currentPage === 9 && (
              <SupplierDiversityInformation incPage={incPage} />
            )}
            {currentPage === 10 && <CARBTruckBusCompliance incPage={incPage} />}
            {currentPage === 11 && <StatusReport />}
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
        .off {
          display: none !important;
        }
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
