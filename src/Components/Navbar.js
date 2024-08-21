// src/components/Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolderOpen, faEnvelope, faBriefcase, faSun, faMoon,faFileAlt  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for custom styling

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faBriefcase} className="navbar-icon brand-icon" />
          <span className="brand-text">Portfolio</span>
        </Link>
      </div>
      <ul className="navbar-list">
  <li className="navbar-item">
    <Link to="/" className="navbar-link">
      <FontAwesomeIcon icon={faHome} className="navbar-icon" />
      <span className="navbar-text">Home</span>
    </Link>
  </li>
  <li className="navbar-item">
    <Link to="/about" className="navbar-link">
      <FontAwesomeIcon icon={faUser} className="navbar-icon" />
      <span className="navbar-text">About Me</span>
    </Link>
  </li>
  <li className="navbar-item">
    <Link to="/projects" className="navbar-link">
      <FontAwesomeIcon icon={faFolderOpen} className="navbar-icon" />
      <span className="navbar-text">Projects</span>
    </Link>
  </li>
 
  <li className="navbar-item">
    <Link to="/contact" className="navbar-link">
      <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
      <span className="navbar-text">Contact</span>
    </Link>
  </li>
</ul>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:your-email@gmail.com" className="social-icon">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <button className="theme-toggle" onClick={toggleTheme}  style={{padding:'10px 15px'}}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
