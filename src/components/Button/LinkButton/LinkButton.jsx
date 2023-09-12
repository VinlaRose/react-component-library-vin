import React from 'react';
import './LinkButton.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const LinkButton = ({ text, href }) => {
  return (
    <a href={href}  className="link-button">
        <InsertLinkIcon/>
      {text}
    </a>
  );
};

export default LinkButton;
