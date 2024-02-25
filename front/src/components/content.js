import React from 'react';
import './Body.css';
import maskGroupImage from './Mask group.svg'; // Import your image

function Body() {
  return (
    <div className="body">
      <div className="matrix">
        <div className="square">mean</div>
        <div className="square">mode</div>
        <div className="square">median</div>
        <div className="square">average</div>
        <div className="square">minimum</div>
        <div className="square">maximum</div>
      </div>
      <div className="vertical-rectangle">
        <div className="content-container">
          <img src={maskGroupImage} alt="Mask Group" className="image" />
          <h1>About the Data</h1>
        </div>
        <h2>Write ~150 to 200 word introduction to your chosen data set</h2>
      </div>
    </div>
  );
}

export default Body;