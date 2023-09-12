import React from 'react';
import './VerticalCard.css'
const VerticalCard = ({ name, price, description, imageUrl }) => {
  return (
    <div className="vertical-product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default VerticalCard;
