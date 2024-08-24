// src/components/Education.js

import React from 'react';
import './Education.css'; // Import the CSS file

const educationDetails = [
  { degree: 'Class X', institution: 'Shree Mahatma Basveshwar Vidyalaya,Omerga',percentage:'92.80%', year: '2018 - 2019' },
  { degree: 'Class XII', institution: 'Dayanand Science College,Latur',percentage:'96.66%', year: '2020 - 2021' },
  { degree: 'Diploma in Computer Science', institution: 'Puranmal Lahoti Government Polytechnic College,Latur',percentage:'88.11%', year: '2021 - 2023' },
  { degree: 'Engineering in Information Technology', institution: 'Marathwada Mitra Mandal College Of Enginnering,Karvenager,Pune', year: '2023' },
];

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-section">
        <h3 className="section-title">Education</h3>
        <ul className="education-list">
          {educationDetails.slice(0, 2).map((detail, index) => (
            <li key={index} className="education-item">
              <span className="star">★</span>
              <div className="education-info">
                <div className="degree">{detail.degree}</div>
                <div className="institution">{detail.institution}</div>
                <div className="Percentage">{detail.percentage}</div>
                <div className="year">{detail.year}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="education-section">
        <h3 className="section-title"><br></br></h3>
        <ul className="education-list">
          {educationDetails.slice(2).map((detail, index) => (
            <li key={index} className="education-item">
              <span className="star">★</span>
              <div className="education-info">
                <div className="degree">{detail.degree}</div>
                <div className="institution">{detail.institution}</div>
                <div className="Percentage">{detail.percentage}</div>
                <div className="year">{detail.year}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
                    