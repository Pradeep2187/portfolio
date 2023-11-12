// Education.js
import React from 'react';
import './Education.css'; // Import your unique CSS file

const Education = () => {
  return (
    <div className="Edu-page">
      <div className="Edu-secondaryHeading">
        <h2>Education</h2>
      </div>

      <div className="Edu-grid">
        <div className="Edu-timeline">
          <div className="Edu-timeline-heading">
            <h3 className="Edu-timeline-heading-title">Master of Science</h3>
            <h3 className="Edu-timeline-heading-location">ARIZONA STATE UNIVERSITY, TEMPE</h3>
            <h3 className="Edu-timeline-heading-duration">August 2022 - May 2024</h3>
          </div>
            <h4 className="Edu-timeline-details-item-gpa">GPA: 3.93/4.00</h4>
            <h4 className='Edu-timeline-details-item'>Related CourseWork</h4>
            <ul>
              <li>SER501: Advanced Data Structures and Algorithms</li>
              <li>SER502: Emerging Languages and Programming Paradigms</li>
              <li>SER515: Foundations of Software Engineering</li>
              <li>SER531: Semantic Web Engineering</li>
              <li>SER594: Human Computer Interaction</li>
              <li>CSE564: Software Design</li>
              <li>CSE565: Software Verification, Validation, and Testing</li>
              <li>CSE579: Knowledge Representation and Reasoning</li>
              <li>SER423: Mobile Systems</li>
            </ul>
        </div>
        <div className="Edu-timeline">
          <div className="Edu-timeline-heading">
            <h3 className="Edu-timeline-heading-title">Bachelor of Technology</h3>
            <h3 className="Edu-timeline-heading-location">RAGHU ENGINEERING COLLEGE, VISAKHAPATNAM</h3>
            <h3 className="Edu-timeline-heading-duration">August 2018 - June 2022</h3>
          </div>
            <h4 className="Edu-timeline-details-item-gpa">GPA: 9.36/10.00</h4>
        </div>

      </div>
    </div>
  );
};

export default Education;
