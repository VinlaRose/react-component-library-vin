import React from 'react';
import './BadgeCard.css';

const BadgeCard = ({ title, content, badges,imageUrl}) => {
  return (
    <div className="card">
    <div className="image-container">
        {
            imageUrl && (<img src={imageUrl} alt="Card Background" className="card-image" />)
        }
      
      <div className="badge-container">
        {badges.map((badge, index) => (
          <span key={index} className="badge">
            {badge}
          </span>
        ))}
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="content-text">{content}</p>
    </div>
  </div>
  );
};

export default BadgeCard;
