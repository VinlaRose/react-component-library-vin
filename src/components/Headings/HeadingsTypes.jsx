import React from 'react';
import './HeadingsTypes.css'; 
import Box from '../../documentation/Box/Box';
import Divider from '../../documentation/Divider/Divider';

function HeadingsTypes() {
  return (
    <div className="heading-container">
        <Box>
        <h1 className="heading">Heading 1</h1>
        <Divider/>
      <h2 className="heading">Heading 2</h2>
      <Divider/>
      <h3 className="heading">Heading 3</h3>
      <Divider/>
      <h4 className="heading">Heading 4</h4>
      <Divider/>
      <h5 className="heading">Heading 5</h5>
      <Divider/>
      <h6 className="heading">Heading 6</h6>
      
        </Box>
     
    </div>
  );
}

export default HeadingsTypes;
