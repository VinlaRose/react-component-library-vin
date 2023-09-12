import React from 'react';
import './AvatarBadge.css'


const AvatarBadge = ({ src, username, online }) => {
  return (
    <div className="user-profile">
      <div className={`status-dot ${online ? 'online' : 'offline'}`} />
      <img
        src={src} 
        alt={`Profile of ${username}`}
        className="profile-image"
      />
    
    </div>
  );
};

export default AvatarBadge;
