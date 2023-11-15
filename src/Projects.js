// Projects.js
import React from 'react';
import './Projects.css';
import project1 from './Project1.png';
import project2 from './Project2.png';
import project3 from './Project3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className='projects-section-heading'>Projects</h2>

      <div className="project-gallery">
        <div className="project">
          <img src={project1} alt="Project 1" />
          <div className="project-details">
            <h3>Project 1: Food Catalog RESTful API</h3>
            <p>
            Developed RESTful APIs using Java and Spring Boot.
            Performed CRUD operations retrieving, creating, updating, and deleting customer information, streamlining customer data management using Spring Data JPA by connecting MySQL.
            </p>
            <a
              href="https://github.com/Pradeep2187/Food-Catalog-RESTful-API"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          </div>
        </div>

        <div className="project">
          <img src={project2} alt="Project 2" />
          <div className="project-details">
            <h3>Project 2: Serverless Menu Item CRUD Service with AWS Lambda</h3>
            <p>
              Created a CRUD application to handle HTTP requests using AWS API Gateway,  
              Utilizes Lambda function to provide RESTful API for performing CRUD operations on DynamoDB.
      
            </p>
            <a
              href="https://github.com/Pradeep2187/Serverless-Menu-Item-CRUD-Service-with-AWS-Lambda"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          </div>
        </div>

        <div className="project">
          <img src={project3} alt="Project 3" />
          <div className="project-details">
            <h3>Project 3: Portfolio Website</h3>
            <p>
              Designed and developed a personal portfolio website using React, HTML, and CSS.
              Implemented smooth navigation and showcased various projects.
            </p>
            <a
              href="https://github.com/Pradeep2187/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
