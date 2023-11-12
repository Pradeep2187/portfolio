import React from 'react';
import './Skills.css';

const SkillCategory = ({ category, skills }) => (
  <div className='skill-category'>
    <h3>{category}</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          {skill.name}
          <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.progress}%` }}></div>
            <div className="progress-label">{skill.progress}%</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const programmingLanguages = [
    { name: 'C', progress: 90 },
    { name: 'Python', progress: 80 },
    { name: 'Java', progress: 75 },
    { name: 'JavaScript', progress: 70 },
  ];

  const frontend = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 80 },
    { name: 'React', progress: 70 },
  ];
  const backend = [
    { name: 'SpringBoot', progress: 75 },
    { name: 'Django', progress: 70 },
  ];
  const cloudtech = [
    { name: 'AWS', progress: 80 },
  ];
  const databases = [
    { name: 'MySQL', progress: 90 },
    { name: 'Amazon RDS', progress: 85 },
    { name: 'Amazon DynamoDB', progress: 85 },
  ];
  const tools = [
    { name: 'Git', progress: 90 },
    { name: 'Agile Methodologies', progress: 85 },
    { name: 'Docker', progress: 70 },
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <SkillCategory category="Programming Languages" skills={programmingLanguages} />
      <SkillCategory category="Frontend Technologies" skills={frontend} />
      <SkillCategory category="Backend Technologies" skills={backend} />
      <SkillCategory category="Databases" skills={databases} />
      <SkillCategory category="Cloud Technologies" skills={cloudtech} />
      <SkillCategory category="Tools - Methodologies, Frameworks" skills={tools} />
      
    </div>
  );
};

export default Skills;






