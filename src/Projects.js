// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Project = ({ title, description, technologies }) => (
  <div className='project'>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Technologies: {technologies.join(', ')}</p>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Food Catalog RESTful API',
      description: 'Developed RESTful APIs in Java and Spring Boot, attaining a 20% increase in efficiency for retrieving, creating, updating, and deleting customer information, streamlining customer data management.',
      technologies: ['SpringBoot', 'RESTful API', 'Java', 'Maven',' JUnit', 'MySQL',' Git', 'Github'],
    },
    {
      title: 'Serverless Menu Item CRUD Service with AWS Lambda',
      description: 'Maintained a high standard of code quality, resulting in a 100% accuracy rate for data insertion and updates in Dynamo DB.',
      technologies: ['Python', 'AWS Lambda', 'DynamoDB', 'API Gateway','Git'],
    },
    // Add more projects as needed
  ];

  return (
    <div className='projects-container'>
      <h2 className='projects-title'>Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    

    <p class="footertext">© @nvspradeep</p>
    </div>
  );
};

export default Projects;