import React, { useState } from 'react';
import './DismissCard.css';
import CloseIcon from '@mui/icons-material/Close'; // Import your close icon from Material-UI

const DismissCard = ({ title, content }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null; // Render nothing if the card is closed
  }

  return (
    <div className="card">
      <div className="image-container">
        
       
        <button className="close-button" onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="content-text">{content}</p>
      </div>
    </div>
  );
};

export default DismissCard;
