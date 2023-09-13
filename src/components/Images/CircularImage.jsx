import React from 'react';
import './ImageTypes.css';

const CircularImage = ({ src, alt, className })  => {
  return (
    <div className={`circular-image ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className="circular-image-inner"
      />
    </div>
  );
}

export default CircularImage;
