import React from 'react';
import Button from '../components/Button';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-section">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Jasper Lou Valdez" 
              className="profile-image" 
              loading="lazy"
            />
          </div>
          
          <div className="about-content">
            <span className="about-greeting slide-in">Hello, I'm</span>
            <h1 className="about-name slide-in">Jasper Lou Valdez</h1>
            <p className="about-role slide-in">Technology Enthusiast & Web Developer</p>
            
            <p className="about-description slide-in">
              I'm passionate about technology and am constantly exploring new ways to grow and learn in the field.
              My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences.
              I enjoy tackling challenging problems and finding innovative solutions through code.
            </p>
            
            <p className="about-description slide-in">
              With a strong foundation in web development and database management, I strive to build
              applications that are both functional and user-friendly. I believe in continuous learning
              and staying updated with the latest technological advancements.
            </p>
            
            <p className="about-description slide-in">
              When I'm not coding, you'll find me reading and watching technology content, playing video games,
              shooting hoops on the basketball court, or working out to maintain a healthy lifestyle.
            </p>
            
            <div className="flex gap-md mt-lg slide-in">
              <Button variant="primary">Download Resume</Button>
              <Button variant="outline">Contact Me</Button>
            </div>
            
            <div className="about-stats slide-in">
              <div className="stat-item card">
                <div className="stat-value">Web</div>
                <div className="stat-label">Development</div>
              </div>
              <div className="stat-item card">
                <div className="stat-value">Database</div>
                <div className="stat-label">Management</div>
              </div>
              <div className="stat-item card">
                <div className="stat-value">Programming</div>
                <div className="stat-label">HTML, CSS, JavaScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;