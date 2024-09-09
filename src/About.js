import React from 'react';
import './About.css'; 
import profileImage from './nvspradeep.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate,faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const downloadResume = () => {
    const resumePath = 'https://docs.google.com/document/d/1b6eaORkcoqrPdLQn5h-p4PZF_RqiEArM/edit?usp=sharing&ouid=103439502716041849064&rtpof=true&sd=true';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'PortfolioResume.pdf'; 
    link.click();
  };

  return (
    <div className="about">
      <div className="main">
        <div className="about-text">
          <h6>Hi, my name is</h6>
          <h2>Venkata Sai Pradeep Nagisetti.</h2>
          <h5>Data Analyst and Software Developer</h5>
          <p>
            I am a Software Engineering graduate from Arizona State University based out of Tempe, AZ. My expertise lies in the field of Data Analysis, Cloud Computing, Software Development, and Salesforce.
          </p>
          <button className="download-button" onClick={downloadResume}>
          <FontAwesomeIcon icon={faDownload} /> &nbsp;Download Resume
          </button>
        </div>
        <img src={profileImage} alt="Profile" className="about-image" />
      </div>
      
      <div className="cert">
        <h4>
          <FontAwesomeIcon color="#64FFDA" icon={faCertificate} size="1x" />   
          <a href="https://drive.google.com/file/d/1nfQrsKJsXzsLWFRrCHA_oTVzZvDMxgoi/view?usp=sharing"> Microsoft Power BI Data Analyst Professional Certificate | Coursera</a>
        </h4>
        <br></br>
        <h4>
          <FontAwesomeIcon color="#64FFDA" icon={faCertificate} size="1x" />   
          <a href="https://www.credly.com/badges/b92c03db-2624-4ed1-8c48-b3edd835e9ab/linked_in_profile"> AWS Certified Solutions Architect - Associate | AWS</a>
        </h4>
      </div>
    </div>
  );
};

export default About;
