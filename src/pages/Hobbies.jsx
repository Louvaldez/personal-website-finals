import React from 'react';
import Card from '../components/Card';

const Hobbies = () => {
  const hobbiesData = [
    {
      id: 1,
      title: 'Technology Content',
      icon: '💻',
      description: 'I enjoy reading articles, watching videos, and staying updated with the latest technology trends and advancements. This helps me expand my knowledge and stay current in the field.'
    },
    {
      id: 2,
      title: 'Video Games',
      icon: '🎮',
      description: 'Gaming is not just entertainment for me but also a way to explore creative worlds, problem-solving scenarios, and connect with friends. I enjoy both casual and competitive gaming.'
    },
    {
      id: 3,
      title: 'Basketball',
      icon: '🏀',
      description: 'Basketball is my favorite sport to play. I enjoy the physical activity, team dynamics, and competitive nature of the game. It helps me stay active and develop teamwork skills.'
    },
    {
      id: 4,
      title: 'Working Out',
      icon: '💪',
      description: 'Fitness is an important part of my routine. Regular workouts help me maintain physical health, reduce stress, and improve my overall well-being and productivity.'
    },
    {
      id: 5,
      title: 'Coding Projects',
      icon: '👨‍💻',
      description: 'I enjoy working on personal coding projects to apply what I\'ve learned and experiment with new technologies. It\'s a great way to build my portfolio while having fun creating.'
    },
    {
      id: 6,
      title: 'Learning New Skills',
      icon: '📚',
      description: 'I\'m constantly seeking to learn new skills related to technology and programming. The process of learning and mastering new concepts is rewarding and helps me grow professionally.'
    }
  ];

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">Hobbies</h2>
        
        <div className="hobbies-grid">
          {hobbiesData.map(hobby => (
            <div key={hobby.id} className="hobby-card">
              <div className="hobby-icon">{hobby.icon}</div>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;