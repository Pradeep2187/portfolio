// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



import './App.css'; 
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Navbar from './Navbar';
import Contact from './Contact';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <div id="about">
          <About />
        </div>

        {/*<div id="skills">
          <Skills />
        </div>

        <div id="education">
          <Education />
        </div>*/}

        <div id="experience">
          <Experience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
