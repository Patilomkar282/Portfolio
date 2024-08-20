import React from 'react';
import './Home.css'; // Optional: for custom styling

const Home = () => {
  return (
    <>
      
    <div className="home-container">
      <div className="profile">
        <div className='profile-image'>
        <img src="https://img.freepik.com/premium-photo/3d-rendered-illustration-young-office-worker-with-laptop-computer_1057-40745.jpg?w=360"  />

        </div>
     
        <div className="profile-text">
          <h1>Hello, I’m Omkar Patil, 
            <br></br>an Engineer.</h1>
          <p>
          I am specialize in Development,transforming ideas into innovative solutions.
          Explore my work and let’s connect!<br></br>
          
          Here you'll find some of the projects I have worked on, 
          as well as information about me and how to get in touch.
          </p>
        </div>
      </div>
    </div>
    
    
    
    </>
  
  );
};

export default Home;
