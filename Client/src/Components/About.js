import React from 'react';
import './About.css'; // Import the CSS for styling

import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';

const AboutMe = () => {
  return (
    <>
     <div className="about-container" id='about'>
      <div className="about-image">
        <img src="https://img.freepik.com/premium-photo/simple-3d-character-illustrations-depicting-different-jobs-careers-clean-white-background_655090-260406.jpg" alt="Profile" />
      </div>
      <div className="about-text">
        <h2>ABOUT ME</h2>
        
        <p>Hello everyone, I am Omkar Patil, a Web and App developer who loves to create and beautify websites. I love making new websites which are easy to use and can be accessed by anyone. I take pride in providing exceptional customer service while delivering a product that exceeds client's expectations every single time.</p>
        <button className="download-cv">Download CV</button>
       
      </div>
    </div>
          <Skills/>
          <Education/>
          <Projects/>
    
    
    </>
   

  );
};

export default AboutMe;
