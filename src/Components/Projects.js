import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './Contact';
import './Projects.css'; // CSS file for styling

const Projects = () => {
  const [majorProjects, setMajorProjects] = useState([
    {
      id: 1,
      title: 'SmartStock',
      description: 'An inventory management system for efficiently tracking IT department resources using QR codes, with a PHP-based backend.',
      imageUrl: '/Project1.jpg',
      githubLink: 'https://github.com/Patilomkar282/Inventory-Management-Project-main',
    },
    {
      id: 2,
      title: 'Attendance-Management-System',
      description: 'A DBMS project for the IT department that manages student attendance with a MySQL database, and a front-end built using HTML, CSS, and JavaScript.',
      imageUrl: '/Project21.jpg',
      githubLink: 'https://github.com/Patilomkar282/Attendance-Management-System',
    },
    {
      id: 3,
      title: 'ShopEasy',
      description: 'A diploma project that connects local vendors and smart markets like Dmart and Reliance Mart to a website. The front end is built with pure HTML, CSS, and some JavaScript, with Razorpay payment integration for seamless transactions.',
      imageUrl: '/shop.jpg',
      liveDemoLink: 'https://main--shopweasy.netlify.app/home',
      githubLink: 'https://github.com/Patilomkar282/ShopEasy',
    },
  ]);

  const [miniProjects, setMiniProjects] = useState([
    {
      id: 1,
      title: 'To Do Application',
      description: 'A dynamic To-Do application built with React and JavaScript. Users can efficiently manage their tasks with features to add, edit, toggle, and delete items. The application provides a clean, interactive interface for organizing daily activities and improving productivity.',
      imageUrl: './todo.jpg',
      liveDemoLink: 'https://main--actionsandtask.netlify.app/',
      githubLink: 'https://github.com/Patilomkar282/To-Do-Application',
    }
   
  ]);

  return (
    <div className="projects-container" id='projects'>
      <h2>Major Projects</h2>
      <div className="projects-section">
        {majorProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
            </a>
            {project.liveDemoLink && (
            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" style={{margin:"250px" }} className="live-demo-link">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="live-demo-icon" />
           </a>
               )}
        </div>
        ))}
      </div>

      <h2>Mini Projects</h2>
      <div className="projects-section">
        {miniProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
            </a>
            {project.liveDemoLink && (
            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" style={{margin:"250px" }} className="live-demo-link">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="live-demo-icon" />
           </a>
               )}
          </div>
        ))}
      </div>
      <ContactForm/>
    </div>
  );
};

export default Projects;
