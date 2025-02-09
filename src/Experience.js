// Experience.js
import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      company: 'ASU EPICS',
=======
      company: 'EPICS ASU',
>>>>>>> Stashed changes
=======
      company: 'EPICS ASU',
>>>>>>> Stashed changes
      title: 'Data Analyst',
      years: 'August 2024 - Present',
      description: 'Managed the end-to-end dashboard creation process, from data loading and cleaning to visualization and final layout design, ensuring the dashboard was both functional and aesthetically appealing, resulting in a 35% increase in stakeholder satisfaction. Optimized data preparation and transformation processes, ensuring accurate and efficient data representation by utilizing Power BI’s data modeling capabilities, which led to a 20% reduction in report generation time.'
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      company: 'Version 1',
      title: 'Data Analyst',
      years: 'August 2020 - July 2022',
      description: 'Developed interactive financial reports and dashboards using Power BI, integrating SQL queries to extract and visualize key banking metrics, which improved data-driven decision-making by 35% across management teams.Utilized DAX in Power BI to perform complex data transformations and calculations, enabling the creation of customized metrics and KPIs, which led to a 40% increase in report accuracy and insights.Designed and implemented dynamic data dashboards using advanced data visualization techniques, leading to a 30% boost in user engagement and a 50% reduction in decision-making time.Harnessed GitHub and JIRA for data workflow management, ensuring seamless collaboration, accurate version control, and timely project completion through Agile methodologies, enhancing sprint productivity by 20%.'
  },
=======
=======
>>>>>>> Stashed changes
      company: 'Cognizant',
      title: 'Programmer Analyst Intern',
      years: 'Feb 2022 - July 2022',
      description: 'Developed interactive financial reports and dashboards using Power BI, integrating SQL queries to extract and visualize key banking metrics, which improved data-driven decision-making by 35% across management teams.Utilized DAX in Power BI to perform complex data transformations and calculations, enabling the creation of customized metrics and KPIs, which led to a 40% increase in report accuracy and insights.Designed and implemented dynamic data dashboards using advanced data visualization techniques, leading to a 30% boost in user engagement and a 50% reduction in decision-making time.Harnessed GitHub and JIRA for data workflow management, ensuring seamless collaboration, accurate version control, and timely project completion through Agile methodologies, enhancing sprint productivity by 20%.'
  },
  {
      company: 'EduSkills',
      title: 'AWS Cloud Intern',
      years: 'March 2022 - May 2022',
      description: 'Architected a PHP application on an Amazon EC2 instance, delivering high availability and sustaining less than 1% downtime over a six-month period. Managed a MySQL database on Amazon RDS, efficiently handling over 1 million transactions monthly while maintaining an impeccable 99.99% data accuracy rate. Led Agile-driven development sprints, ensuring timely delivery and continuous integration of features, which resulted in a 30% improvement in team efficiency and accelerated deployment cycles.'
  }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
