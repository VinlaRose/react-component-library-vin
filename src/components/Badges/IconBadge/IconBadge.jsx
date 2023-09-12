import React from 'react';
import './IconBadge.css'
import MessageIcon from '@mui/icons-material/Message';

const IconBadge = ({icon, count}) => {
  return (
    <div className="icon">
      {/* <div className={`status-dot ${online ? 'online' : 'offline'}`} /> */}
      <span className='dot-count'>{count}</span>
      <i className='your-icon'>{icon}</i>
    </div>
  );
};

export default IconBadge;
