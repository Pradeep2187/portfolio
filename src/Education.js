// Education.js
import React from 'react';
import './Education.css';
import universityLogo from './ASU-logo.png';
//import collgeLogo from './raghu_engineering_college_logo.jpeg';
import univLogo from './Jntuk-logo.png';
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
          <h2 className="university-name">Arizona State University </h2>
          <p className="degree">Master of Science in Software Engineering</p>
          <p className="years">August 2022 - May 2024</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="education-details">
        <img src={univLogo} alt="University Logo" className="university-logo" />
        <div className="education-text">
          <h2 className="university-name">Jawaharlal Nehru Technological University Kakinada</h2>
          <p className="degree">Bachelor of Technology in Electronics and Communication Engineering</p>
          <p className="years">July 2018 - June 2022</p>
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
