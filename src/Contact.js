// Contact.js
import React,{useState} from 'react';
import './Contact.css'; 
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);

      // Reset the form after 5 seconds
      setTimeout(() => {
          setShowForm(false);
          setSubmitted(false);
      }, 3000);
  };
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
          I'm currently seeking Full Stack Developer and Software Engineer full-time opportunities, I'm always happy to connect and network. Feel free to connect with me via LinkedIn or just shoot me a message.
          </p>
          {/* Button to show form*/}
          {! showForm ? (
          <button className="email-button" onClick={() => setShowForm(true)}>
            Say Hi ! <span role="img" aria-label="smiley">👋</span>
          </button>
          ) : (
            !submitted ? (
              <form 
                  action="https://formsubmit.co/venkatanagisetti99@gmail.com" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  className="contact-form"
              >
                  <h3>Contact Form</h3>
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <textarea name="message" placeholder="Your Message" required></textarea>
                  <button type="submit" className="send-button">Send   <FaPaperPlane className="send-icon" /> </button>
              </form>
          ) : (
              <p className="success-message">Message sent successfully! ✅</p>
          )
      )}
          

          <div className="fixed-icons">
                <a href="https://www.linkedin.com/in/nagisetti-venkata-sai-pradeep-535201218/" target="_blank" rel="noopener noreferrer">
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
