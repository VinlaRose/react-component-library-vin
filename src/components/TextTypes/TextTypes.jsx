import React from 'react';
import './TextTypes.css'; 
import Box from '../../documentation/Box/Box';
import Divider from '../../documentation/Divider/Divider';

function TextTypes() {
  return (
    <div className="heading-container">
        <Box>
        <p class="primary">primary text</p>
        <p class="primary bold">primary bold text</p>
        <p class="secondary">secondary text</p>
        <p class="underline">underline</p>
        <p class="strike">Line through</p>
        
      
      
        </Box>
     
    </div>
  );
}

export default TextTypes;
