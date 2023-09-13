import React from 'react';
import './TextOnlyCard.css';

const TextCard = ({ title, text }) => {
  return (
    <div className="text-card">
      <div className="text-card-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextCard;
