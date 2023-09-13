import React from 'react';
import './ImageTypes.css'; // Import your CSS file

class NormalImage extends React.Component {
  render() {
    const { src, alt, className } = this.props;

    return (
      <img
        src={src}
        alt={alt}
        className={`image-component ${className || ''}`}
      />
    );
  }
}

export default NormalImage;
