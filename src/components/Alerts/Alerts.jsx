// Alert.js

import React from 'react';
import './Alert.css';

 const Alert = ({ type, message }) => {
  const alertClass = `alert ${type}`;
  
  return (
    <div className={alertClass}>
      {message}
    </div>
  );
};

export default Alert;
