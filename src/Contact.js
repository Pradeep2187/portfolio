// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Validate Name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate Message
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const sendEmail = () => {
    const subject = `New message from ${name} in Portfolio`;
    const mailtoLink = `mailto:n@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Email: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail();
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="contact-section">
      <h2>Let's talk:)</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleChange}
          required
        />
        <p className="error-message">{formErrors.name}</p>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          required
        />
        <p className="error-message">{formErrors.email}</p>

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={handleChange}
          required
        />
        <p className="error-message">{formErrors.message}</p>

        <button type="submit">Send Message</button>
      </form>
      <div className="social-icons">
        <a
          href="https://linkedin.com/in/venkata-sai-pradeep-n/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
        </a>
        <a href="https://github.com/Pradeep2187" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> 
        </a>
        <a href="mailto:nvspradeep5@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="1.5x" />
        </a>
      </div>
      <footer>
      <p>&copy; 2023 Pradeep. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
