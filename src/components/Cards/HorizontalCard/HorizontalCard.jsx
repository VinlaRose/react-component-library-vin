import React from 'react';
import './HorizontalCard.css';

const HorizontalCard = ({ title, content,imageUrl}) => {
  return (
    <div className="card">
    <div className="image-container">
        {
            imageUrl && (<img src={imageUrl} alt="Card Background" className="card-image" />)
        }
      
      <div className="badge-container">
       
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="content-text">{content}</p>
    </div>
  </div>
  );
};

export default HorizontalCard;
