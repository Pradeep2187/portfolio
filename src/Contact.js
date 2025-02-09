
import React, { useState } from 'react';
import './Contact.css'; 
import { FaLinkedin, FaEnvelope, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/xpwqlkkg", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });

                // Hide form after 3 seconds
                setTimeout(() => {
                    setShowForm(false);
                    setSubmitted(false);
                }, 3000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const sendEmail = () => {
        window.location.href = "mailto:venkatanagisetti99@gmail.com";
    };

    return (
        <div className="about">
            <div className="main">
                <div className="about-text">
                    <h6>What's Next?</h6>
                    <h2>Get In Touch</h2>
                    <p>
                        I'm currently seeking Full Stack Developer and Software Engineer full-time opportunities.
                        I'm always happy to connect and network. Feel free to connect with me via LinkedIn or just shoot me a message.
                    </p>

                    {/* Button to Show Form */}
                    {!showForm ? (
                        <button className="email-button" onClick={() => setShowForm(true)}>
                            Say Hi! <span role="img" aria-label="smiley">👋</span>
                        </button>
                    ) : (
                        !submitted ? (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <h3>Contact Form</h3>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit" className="send-button">
                                    Send <FaPaperPlane className="send-icon" />
                                </button>
                            </form>
                        ) : (
                            <p className="success-message">Message sent successfully! ✅</p>
                        )
                    )}

                    {/* Social Icons */}
                    <div className="fixed-icons">
                        <a href="https://www.linkedin.com/in/nagisetti-venkata-sai-pradeep-535201218/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} className="icon" />
                        </a>
                        <a href="https://github.com/VenkataSaiPradeep" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} className="icon" />
                        </a>
                        <FaEnvelope size={20} className="icon" onClick={sendEmail} />
                        <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
