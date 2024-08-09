// About.js
import React from 'react';
import './About.css'; 
import profileImage from './nvspradeep.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  const downloadResume = () => {
    const resumePath = 'https://docs.google.com/document/d/1sRsgZhOGSN1nHvZpcWPUefoYmWG40bJS/edit';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'PortfolioResume.pdf'; // Set the desired file name
    link.click();
  };

  return (
    <div className="about">
      <div className="main">
        <div className="about-text">
          <h6>Hi, my name is</h6>
          <h2>Venkata Sai Pradeep Nagisetti.</h2>
          <h5>Data Analyst  and Software Developer</h5>
          <p>
          I am a Software Engineering grad from ASU based out of Tempe, AZ. My expertise lies in the field of Data Analysis, Cloud Computing, Software Development and Salesforce.
          </p>
          <button className="download-button" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
        <img src={profileImage} alt="Profile" className="about-image" />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <h4 className='cert'><FontAwesomeIcon color=" #64FFDA" icon={faCertificate} size="1x" />   Microsoft Power BI Data Analyst Professional Certificate | Coursera</h4>
      <h4 className='cert'><FontAwesomeIcon color=" #64FFDA" icon={faCertificate} size="1x" />   AWS Certified Solutions Architect - Associate | AWS</h4>
    </div>
  );
};

export default About;
