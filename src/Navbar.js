// Navbar.js
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="about" smooth={true} duration={500} offset={-70} className="nav-link">About</Link>
        <Link to="skills" smooth={true} duration={500} offset={-30} className="nav-link">Skills</Link>
        <Link to="education" smooth={true} duration={500} offset={-70} className="nav-link">Education</Link>
        <Link to="experience" smooth={true} duration={500} offset={-50} className="nav-link">Experience</Link>
        <Link to="projects" smooth={true} duration={500} offset={-50} className="nav-link">Projects</Link>
      </nav>
    </div>
  );
};

export default Navbar;
