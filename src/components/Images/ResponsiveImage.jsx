import React from 'react';
import './ImageTypes.css';

const ResponsiveImage = ({src,alt}) => {
  return (
    <div className="responsive-image-container">
      <img
        src={src}
        alt={alt}
        className="responsive-image"
      />
    </div>
  );
};

export default ResponsiveImage;
