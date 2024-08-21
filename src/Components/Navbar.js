import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolderOpen, faEnvelope, faBriefcase, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css'; // Optional: for custom styling

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        <a href="#home" className="navbar-brand">
          <FontAwesomeIcon icon={faBriefcase} className="navbar-icon brand-icon" />
          <span className="brand-text">Portfolio</span>
        </a>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link">
            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
            <span className="navbar-text">Home</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            <FontAwesomeIcon icon={faUser} className="navbar-icon" />
            <span className="navbar-text">About Me</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link">
            <FontAwesomeIcon icon={faFolderOpen} className="navbar-icon" />
            <span className="navbar-text">Projects</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
            <span className="navbar-text">Contact</span>
          </a>
        </li>
      </ul>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/omkar-patil-373303224/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Patilomkar282" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:Patilomkar28202gmail.com" className="social-icon">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <button className="theme-toggle" onClick={toggleTheme} style={{ padding: '10px 15px' }}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
