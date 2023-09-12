import React from 'react';
import './IconButton.css';


const IconButton = ({ text,icon }) => {
  return (
    <button  className="icon-button">
        {icon}
      {text}
    </button>
  );
};

export default IconButton;
