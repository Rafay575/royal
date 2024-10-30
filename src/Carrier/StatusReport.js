import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from '../api/url';

const StatusReport = () => {
  const userId = localStorage.getItem("___");
  const [status, setStatus] = useState({
    addressInformation: false,
    contactInformation: false,
    carrierPolicy: false,
    companyAgreement: false,
    carrierInsurance: false,
    carrierEquipment: false,
    eldLoadTracking: false,
    operatingAreas: false,
    supplierDiversityInfo: false,
    carbTruckAndBus: false,
  });

  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/registration/${userId}`);
        const data = response.data[0];

        const formattedData = {
          addressInformation: !!data.AddressInformation,
          contactInformation: !!data.ContactInformation,
          carrierPolicy: !!data.CarrierPolicies,
          companyAgreement: !!data.CompanyAgreement,
          carrierInsurance: !!data.InsuranceInstructions,
          carrierEquipment: !!data.CarrierEquipmentProfile,
          eldLoadTracking: !!data.ELDLoadTracking,
          operatingAreas: !!data.CarrierOperatingAreas,
          supplierDiversityInfo: !!data.SupplierDiversityInformation,
          carbTruckAndBus: !!data.CARBTruckBusCompliance,
        };

        setStatus(formattedData);
        checkIfAllCompleted(formattedData);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, [userId]);

  // Check if all statuses are completed
  const checkIfAllCompleted = (statusObj) => {
    const allCompleted = Object.values(statusObj).every((val) => val === true);
    setIsAllCompleted(allCompleted);
  };

  return (
    <>
      <h5 className="mt-5 text-center">Status Report</h5>
      <div className="status-report-container">
        {isLoading ? ( // Show loading spinner while fetching data
          <div className="text-center d-flex justify-content-center  " style={{height:"70vh",alignItems:'center' }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Table striped bordered hover className="status-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address Information</td>
                <td style={{ color: status.addressInformation ? 'green' : 'red' }}>
                  {status.addressInformation ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Contact Information</td>
                <td style={{ color: status.contactInformation ? 'green' : 'red' }}>
                  {status.contactInformation ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Carrier Policy</td>
                <td style={{ color: status.carrierPolicy ? 'green' : 'red' }}>
                  {status.carrierPolicy ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Company Agreement</td>
                <td style={{ color: status.companyAgreement ? 'green' : 'red' }}>
                  {status.companyAgreement ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Carrier Insurance</td>
                <td style={{ color: status.carrierInsurance ? 'green' : 'red' }}>
                  {status.carrierInsurance ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Carrier Equipment</td>
                <td style={{ color: status.carrierEquipment ? 'green' : 'red' }}>
                  {status.carrierEquipment ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>ELD/Load Tracking</td>
                <td style={{ color: status.eldLoadTracking ? 'green' : 'red' }}>
                  {status.eldLoadTracking ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Operating Areas</td>
                <td style={{ color: status.operatingAreas ? 'green' : 'red' }}>
                  {status.operatingAreas ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>Supplier Diversity Info</td>
                <td style={{ color: status.supplierDiversityInfo ? 'green' : 'red' }}>
                  {status.supplierDiversityInfo ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
              <tr>
                <td>CARB Truck and Bus</td>
                <td style={{ color: status.carbTruckAndBus ? 'green' : 'red' }}>
                  {status.carbTruckAndBus ? 'Completed' : 'Not Completed'}
                </td>
              </tr>
            </tbody>
          </Table>
        )}

        {/* Submit Button */}
        <div className="form-actions mt-4 text-center">
          <button
            type="submit"
            className="button-11"
            disabled={!isAllCompleted} // Disable button if all tasks are not completed
          >
            Submit
          </button>
        </div>

        <style jsx>{`
          .status-report-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
          }
          .status-table {
            margin-top: 20px;
          }
          .submit-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
        `}</style>
      </div>
    </>
  );
};

export default StatusReport;
