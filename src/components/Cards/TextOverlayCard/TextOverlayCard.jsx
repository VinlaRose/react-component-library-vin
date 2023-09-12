import React from 'react';
import './TextOverlayCard.css';

const TextOverlayCard = ({ title, content, imageUrl }) => {
  return (
    
      <div className="textOverlay-image-container">
        <img src={imageUrl} alt="Card Background" className="textOverlay-card-image" />
        <div className="overlay">
          <h3 className="textOverlay-card-title">{title}</h3>
          <p className="textOverlay-content-text">{content}</p>
        </div>
      </div>
    
  );
};

export default TextOverlayCard;
