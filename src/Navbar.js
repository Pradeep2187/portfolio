// Navbar.js
import React, { useState } from "react";
import { Link} from "react-scroll";
import './Navbar.css';

const Navbar = () => {
  /*const scrollToTop = () => {
    scroll.scrollToTop();
  };*/
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false); // Close menu after clicking an item
  };
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* <Link to="about" smooth={true} duration={500} offset={-70} className="nav-link">About</Link>
        {/*<Link to="skills" smooth={true} duration={500} offset={-30} className="nav-link">Skills</Link>*/}
        {/* <Link to="education" smooth={true} duration={500} offset={-80} className="nav-link">Education</Link>
        <Link to="experience" smooth={true} duration={500} offset={-80} className="nav-link">Experience</Link>
        <Link to="projects" smooth={true} duration={500} offset={-70} className="nav-link">Projects</Link>
        <Link to="contact" smooth={true} duration={500} offset={-10} className="nav-link">Contact</Link> */} 
         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="about" smooth={true} duration={500} offset={-50} className="nav-link" onClick={handleMenuClick}>
          About
        </Link>
        <Link to="education" smooth={true} duration={500} offset={-100} className="nav-link" onClick={handleMenuClick}>
          Education
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-120} className="nav-link" onClick={handleMenuClick}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-140} className="nav-link" onClick={handleMenuClick}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-10} className="nav-link" onClick={handleMenuClick}>
          Contact
        </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
