import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const Notification = ({ message, showNotification, setShowNotification }) => {
  useEffect(() => {
    let timer;
    if (showNotification) {
      // Automatically hide notification after 3 seconds
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts or showNotification changes
  }, [showNotification, setShowNotification]);

  if (!showNotification) return null;

  return (
    <div className="position-fixed top-0 start-50 translate-middle-x mt-3" style={{ zIndex: 1051 }}>
      <Alert
        variant="success"
        className="shadow-lg"
        // onClose={() => setShowNotification(false)}
        dismissible
      >
        <p className="mb-0">{message}</p>
      </Alert>
    </div>
  );
};

export default Notification;
