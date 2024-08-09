// src/components/Projects.js
import React from 'react';
import './Projects.css';
import p1 from './Sales example Dashboard.png'; 
import pr from './Histogram medium.png';
import p2 from './donut chart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub } from 'react-icons/fa';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {

  return (
    <div className='project'>
      <div className="header">
              <h2 className='projects-title'>Some Things I've Built</h2>
              <div className="horizontal-line"></div>
      </div>
      <h5 className='right-text-start'> Featured Project</h5>
      <h4 className='right-text-2'> Heart Disease Prediction using Machine Learning Algorithms</h4>
      <div className='projects-container'>
       <div className="image-half">
        <img src={pr} alt="Heart Disease Prediction Histogram"/>
       </div>
       <div className='text-half'>
        <p > 
Optimized heart disease prediction by leveraging a suite of machine learning algorithms, including Logistic Regression, Decision Tree Classifier, Naive Bayes, and SVM, achieving a stellar AUC-ROC score of 0.92 with Logistic Regression.</p>
<p>Boosted heart disease diagnosis accuracy by 88% by developing a robust Predictive Analytics System using Python, deploying multiple machine learning models.
</p>
<p>Technology Used: Python, Pandas, Numpy, Seaborn, Matplotlib, Jupyter Notebook</p>
<a className="external" href="https://medium.com/@nvspradeep5/from-data-to-diagnosis-building-a-predictive-analytics-system-for-heart-disease-with-python-b4eaa7314d48" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginLeft: '10px' }}>
  <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
</a>
<a className="external" href="https://github.com/VenkataSaiPradeep/Heart-Disease-Prediction-Using-Machine-Learning" target="_blank" rel="noopener noreferrer">
    <FaGithub size={20} className="icon" />
</a>
       </div>
      </div>
      <h5 className='left-text'> Featured Project</h5>
      <h4 className='left-text-2'> Adventure Works Sales Data Visualization and Analysis </h4>
      <br></br>
      <div className='projects-container'>
       <div className='text-half-2'>
        <p > Crafted a comprehensive and visually engaging sales dashboard in Power BI, enabling stakeholders to easily monitor key metrics such as net sales, product performance, and order trends, driving a 25% improvement in decision-making speed.</p>
        <p>Leveraged SQL to extract, transform, and load data from various sources, ensuring seamless integration with Power BI and accurate representation of key business metrics in the final dashboard.
        </p>
        <p>Technology Used: Microsoft Excel, Power BI, SQL, Powerpoint</p>
        <a className="external-2" href="https://medium.com/@nvspradeep5/transforming-decision-making-with-power-bi-a-journey-to-a-25-improvement-in-stakeholder-a383f35a4f9b" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginLeft: '10px' }}>
  <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
</a>
       </div>
       <div className="image-half-2">
        <img src={p2} alt="Sales Dashboard"/>
       </div>
      </div>
      <h5 className='right-text'> Featured Project</h5>
      <h4 className='right-text-2'> Enhancing Sales Performance Insights with Tableau</h4>
      <div className='projects-container'>
       <div className="image-half">
        <img src={p1} alt="Sales Dashboard"/>
       </div>
       <div className='text-half'>
        <p > Designed and implemented dynamic visualizations, including bar charts, line charts, and map visualizations, providing clear insights into sales performance across different regions and product categories.</p>
        <p> Streamlined data preparation and transformation processes, leveraging Excel and SQL for efficient data extraction, cleaning, and integration with Tableau.</p>
        <p> Technology Used: Microsoft Excel, Tableau, SQL</p>
       </div>
      </div>
    </div>
  );
};

export default Projects;