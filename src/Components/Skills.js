// src/components/Skills.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact,faPython,faPhp } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Use faCode or other suitable icon
import './Skills.css'; // Import the CSS file

const skills = [
    { name: 'HTML', icon: faHtml5, percentage: 90 },
    { name: 'CSS', icon: faCss3Alt, percentage: 90 },
    { name: 'JavaScript', icon: faJsSquare, percentage: 70 },
    { name: 'ReactJS', icon: faReact, percentage: 70 },
    { name: 'Python', icon: faPython, percentage: 80 },
    { name: 'PHP', icon: faPhp, percentage: 90 },
    { name: 'C++', icon: faCode, percentage: 85 },
    { name: 'Data Structures', icon: faCode , percentage: 75 }, // Using a generic icon
    { name: 'OOP', icon: faCode , percentage: 95 }, // Using a generic icon
    { name: 'C', icon: faCode , percentage: 60 } // Using a generic icon
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`skill-item ${selectedSkill.name === skill.name ? 'active' : ''}`}
            onClick={() => setSelectedSkill(skill)}
          >
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="skill-progress-bar-container">
        <div className="skill-progress-bar">
          <div
            className="skill-progress"
            style={{ width: `${selectedSkill.percentage}%` }}
          />
        </div>
        <span className="skill-percentage">{`${selectedSkill.percentage}%`}</span>
      </div>
    </div>
  );
};

export default Skills;
