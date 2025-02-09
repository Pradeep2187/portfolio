// Education.js
import React from 'react';
import './Education.css';
import universityLogo from './ASU-logo.png';

const Education = () => {
  console.log("education loaded")
  return (
    <div id = "education" className="education-section">
      <div className="education-header">
        <h1 className="education-title"> Education </h1>
        <div className="horizontal-line"></div>
      </div>
      <div className="education-details">
        <img src={universityLogo} alt="University Logo" className="university-logo" />
        <div className="education-text">
          <h2 className="university-name">Arizona State University</h2>
          <p className="degree">Master of Science in Software Engineering</p>
          <p className="years">Aug 2022 - May 2024</p>
        </div>
      </div>
      <br></br>
          <br></br>
          <br></br>
          <br></br>
    </div>
  );
};


export default Education;
