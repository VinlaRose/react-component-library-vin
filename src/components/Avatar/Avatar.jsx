
import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt, size }) => {
 
  const avatarClass = `avatar ${size}`;

  return (
    <div className={avatarClass}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
