import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

const StatusReport = () => {
  // Initial state for each action
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

  // Mock function to fetch data from backend
  useEffect(() => {
    // Example backend response, replace this with an actual API call
    const fetchData = async () => {
      const response = {
        addressInformation: true,
        contactInformation: false,
        carrierPolicy: false,
        companyAgreement: true,
        carrierInsurance: false,
        carrierEquipment: false,
        eldLoadTracking: true,
        operatingAreas: false,
        supplierDiversityInfo: false,
        carbTruckAndBus: false,
      };
      setStatus(response);
      checkIfAllCompleted(response);
    };

    fetchData();
  }, []);

  // Check if all statuses are completed
  const checkIfAllCompleted = (statusObj) => {
    const allCompleted = Object.values(statusObj).every((val) => val === true);
    setIsAllCompleted(allCompleted);
  };

  return (
    <>
      <h4 className="mt-5 text-center form-title">Status Report</h4>
    <div className="status-report-container">
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

      <div className="form-actions mt-4 text-center">
          <button type="submit" className=" button-11">
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
