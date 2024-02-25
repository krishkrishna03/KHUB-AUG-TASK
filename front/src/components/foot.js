import React from 'react';
import './foot.css'; // Import your CSS file for styling
import mdiGithubImage from './mdi_github.svg'; // Import the image file

function Footer() {
  return (
    <div className="footer">
      <div className="foot custom-partition-1">
        <img src={mdiGithubImage} alt="GitHub" className="github-icon" />
      </div>
      <div className="foot custom-partition-2">
        2023 © Copyright Raj Reddy Center for Technology and Society. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
