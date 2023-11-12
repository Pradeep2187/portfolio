// About.js
import React from 'react';
import './About.css'; 
import profileImage from './nvspradeep.jpeg'; 



const About = () => {
  const downloadResume = () => {
    const resumePath = 'https://drive.google.com/file/d/1petiUSmUc06vOM9YFgI5RrUovNQhN_CT/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'PortfolioResume.pdf'; // Set the desired file name
    link.click();
  };

  return (
    <div className="about">
      <div className="main">
        <img src={profileImage} alt="Profile" className="about-image" />
        <div className="about-text">
          <h2>Venkata Sai Pradeep Nagisetti</h2>
          <h5>Software Developer and Web Developer</h5>
          <p>
            Motivated and detail-oriented graduate student actively pursuing a Master's degree in Software Engineering with a solid foundation in computer science. Aspiring to contribute my skills and knowledge as a Software Engineer or Software Developer to drive transformative solutions in the industry.
          </p>
          <button className="download-button" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
