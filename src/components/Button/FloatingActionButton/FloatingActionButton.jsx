import React from 'react';
import './FloatingActionButton.css';

const FloatingActionButton = ({ onClick, icon }) => {
  return (
    <div className="fab" onClick={onClick}>
      {icon}
    </div>
  );
};

export default FloatingActionButton;
