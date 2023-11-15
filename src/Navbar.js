// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar-wrapper ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar">
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="education" smooth={true} duration={500} offset={-90} onClick={toggleMenu}>
            Education
          </Link>
          <Link to="experience" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
