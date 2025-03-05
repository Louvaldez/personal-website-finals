import React from 'react';
import Card from '../components/Card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Asia Pacific College",
      position: "Student",
      period: "2023 - Present",
      description: "Currently studying and developing skills in web development and programming.",
      achievements: [
        "Certificate of Recognition - Honor Student (2023-2024)",
        "Learning web development technologies and programming languages",
        "Working on academic projects and assignments",
        "Developing skills in HTML, CSS, JavaScript, and other technologies"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Java", "PHP", "Laravel"]
    }
  ];

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">Technical Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item slide-in">
              <div className="timeline-marker"></div>
              <Card>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="company-name">{exp.company}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h4 className="position-title">{exp.position}</h4>
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h5 className="achievements-title">Key Achievements:</h5>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
