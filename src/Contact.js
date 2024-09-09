// About.js
import React from 'react';
import './Contact.css'; 
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';


const Contact = () => {
    const email = () => {
        const recipient = 'venkatanagisetti99@gmail.com';
        window.location.href = `mailto:${recipient}`;
      };
  return (
    <div className="about">
      <div className="main">
        <div className="about-text">
          <h6> What's Next?</h6>
          <h2>Get In Touch</h2>
          <p>
          I'm currently seeking Data Analyst full-time opportunities, I'm always happy to connect and network. Feel free to connect with me via LinkedIn or just shoot me an email.
          </p>
          <button className="download-button" onClick={email}>
            Say Hi !
          </button>
          <div className="fixed-icons">
                <a href="https://linkedin.com/in/venkata-sai-pradeep-n/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} className="icon" />
                </a>
                <a href="https://github.com/VenkataSaiPradeep" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} className="icon" />
                </a>
                <FaEnvelope size={20} className="icon" onClick={email} />
                <div className="vertical-line"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
