import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      date: '2023 - 2024',
      title: 'Honor Student',
      institution: 'Asia Pacific College',
      description: 'Received Certificate of Recognition as an Honor Student for academic excellence and outstanding performance.'
    },
    {
      id: 2,
      date: '2022 - 2024',
      title: 'Senior High School',
      institution: 'Asia Pacific College',
      description: 'Completed Senior High School education with a focus on technology and computing. Developed strong foundational knowledge in programming and information technology.'
    },
    {
      id: 3,
      date: '2023',
      title: 'Web Development Course',
      institution: 'Online Learning Platform',
      description: 'Completed comprehensive web development course covering HTML, CSS, and JavaScript. Created various web projects to apply learned concepts.'
    },
    {
      id: 4,
      date: '2023',
      title: 'Database Management Workshop',
      institution: 'Tech Community Workshop',
      description: 'Participated in a hands-on workshop focused on database design, implementation, and management. Gained practical experience with SQL and database systems.'
    }
  ];

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className="timeline-item"
              style={{ '--i': index }}
            >
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;