import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Check Out my</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-section">
        <h3>Contact me</h3>
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="icon email" />
          <span>Patilomkar2820@gmail.com</span>
          <br></br><br></br>
          <FontAwesomeIcon icon={faEnvelope} className="icon email" />
          <span>Omkarpatil2023.it@mmcoe.edu.in</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
