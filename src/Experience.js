// Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
   <div className='experience-section'>
    <div className="CV-page">
      <div className="CV-grid">
        <div className="CV-grid-column">
          <h1 className="CV-secondaryHeading">Experience</h1>
          <div className="CV-timeline">
            <div className="CV-timeline-heading">
              <h2 className='CV-timeline-heading-position'>AWS Virtual Intern</h2>
              <h3 className="CV-timeline-heading-title">EduSkills, India</h3>
              <h3 className="CV-timeline-heading-duration">March 2022 - May 2022</h3>
            </div>
            <ul className="CV-timeline-details">
              <li className="CV-timeline-details-item">
                Architected a highly efficient Amazon Virtual Private Cloud (VPC) with modified subnets and security groups, achieving a 99% uptime for critical web applications.
              </li>
              <li className="CV-timeline-details-item">
                Implemented an Application Load Balancer (ALB) for seamless traffic distribution, reducing latency by 20% and enhancing user experience, while combining with Amazon RDS for efficient data storage and retrieval.
              </li>
              <li className="CV-timeline-details-item">
                Increased development team productivity by 40% by setting up AWS Cloud9 as an integrated development environment (IDE) and utilizing AWS Systems Manager for efficient server management.
              </li>
            </ul>
          </div>

          <div className="CV-timeline">
            <div className="CV-timeline-heading">
              <h2 className='CV-timeline-heading-position'>Programmer Analyst Trainee</h2>
              <h3 className="CV-timeline-heading-title">Cognizant Technological Solutions, India</h3>
              <h3 className="CV-timeline-heading-duration">October 2021 - March 2022</h3>
            </div>
            <ul className="CV-timeline-details">
              <li className="CV-timeline-details-item">
                Increased service scalability by developing RESTful APIs for micro-services, resulting in a 30% increase in system efficiency and improved accessibility for end-users.
              </li>
              <li className="CV-timeline-details-item">
                Demonstrated proficiency in database design and implementation with SQL Server, modifying data retrieval and storage processes for 25% faster query response times.
              </li>
              <li className="CV-timeline-details-item">
                Leveraged Java Maven, Postman, and GitHub to streamline development workflows, fostering a 15% improvement in project collaboration and code version control.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
