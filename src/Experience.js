// Experience.js
import React, { useState } from 'react';
import './Experience.css';
import TSLogo from './TS-Logo.jpeg';
import CognizantLogo from './Cognizant-logo.jpeg';

const experiences = [
  {
      company: 'Teaching Solved',
      logo: TSLogo,
      title: 'Jr Full Stack Developer',
      years: 'August 2024 - Present',
      description: 'Engineered a scalable EdTech platform for Teaching Solved using Next.js, Python, Flask, and PostgreSQL, which reduced page load times by 20%, boosting user engagement by 15%. Optimized PostgreSQL database performance by creating efficient schemas and indexing strategies, resulting in 15% faster data access, allowing for 25% increase in reporting speed for stakeholders.Integrated Stripe API for secure payment processing, which reduced transaction errors by 30%, improving client satisfaction, and increased payment success rates by 20%. Tech-stack: Python, TypeScript, Next.js, AWS, Flask, PostgreSQL, Figma(UI/UX), Vercel, Github, Pytest, S3, Pycharm'
  },
  {
      company: 'Cognizant',
      logo: CognizantLogo,
      title: 'Programmer Analyst',
      years: 'February 2022 - July 2022',
      description: ' Designed and deployed a Banking Management System using Java, SpringBoot and SQL Server, reducing data inconsistencies by 25%, enhancing customer service response times by 40%. Developed interactive web components using HTML, CSS, and JavaScript, which improved page load times by 50%, ensuring a 30% boost in user satisfaction for high-traffic pages. Implemented RESTful APIs for modular and scalable service management, reducing operational latency by 25%, accelerating system scalability by 40%. Tech-stack: Java, SpringBoot, Azure, CSS3, Microsoft SQL Server, MicrosoftVisual Studio Code, Kubernetes, UAT'
  },
  //{
   // company: 'Version 1',
  //  title: 'Data Analyst Intern',
   // years: 'August 2019 - July 2020',
    //description: 'Designed and developed interactive Tableau and Power BI dashboards, significantly increasing performance metric visibility by 40% and enabling more informed decision-making for stakeholders. Streamlined data pipelines to automate data processing workflows, improving overall business performance by 20% and ensuring 99% accuracy in reporting across all departments.'
  //},
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
      <div className='experience'>
          <div className="header">
              <h1>Where I've Worked</h1>
              <div className="horizontal-line"></div>
          </div>
          <div className="timeline-container">
              <div className="experience-list">
                  {experiences.map((exp, index) => (
                      <div
                          key={index}
                          className={`experience-item ${selectedCompany === index ? 'active' : ''}`}
                          onClick={() => setSelectedCompany(index)}
                      >
                          <img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />
                          <div className="company-name">
                              {selectedCompany === index && <div className="vertical-line-company"></div>} 
                              {exp.company}
                          </div>
                      </div>
                  ))}
                  {selectedCompany !== null && (
                      <div className="experience-details">
                          <h6 className='exp-detail-title'> {experiences[selectedCompany].title}</h6>
                          <h5 className='exp-detail-years'> {experiences[selectedCompany].years}</h5>
                          <p>{experiences[selectedCompany].description}</p>
                      </div>
                  )}
              </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
  );
};


export default Experience;
