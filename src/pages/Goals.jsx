import React from 'react';
import Card from '../components/Card';

const Goals = () => {
  const professionalGoals = [
    {
      id: 1,
      title: 'Master Web Development',
      description: 'Become proficient in both frontend and backend technologies to build complete web applications.',
      progress: 85,
      complete: false
    },
    {
      id: 2,
      title: 'Expand Database Knowledge',
      description: 'Deepen understanding of database management systems and data structures for efficient application development.',
      progress: 80,
      complete: false
    },
    {
      id: 3,
      title: 'Learn Advanced JavaScript',
      description: 'Master advanced JavaScript concepts and frameworks to create more dynamic and interactive web applications.',
      progress: 90,
      complete: true
    },
    {
      id: 4,
      title: 'Build a Professional Portfolio',
      description: 'Create a comprehensive portfolio showcasing my skills and projects to potential employers.',
      progress: 75,
      complete: false
    }
  ];

  const personalGoals = [
    {
      id: 5,
      title: 'Achieve Mental Stability',
      description: 'Develop mindfulness practices and stress management techniques for better mental health and clarity.',
      progress: 75,
      complete: false
    },
    {
      id: 6,
      title: 'Attain Financial Stability',
      description: 'Build savings, create multiple income streams, and develop financial literacy for long-term security.',
      progress: 60,
      complete: false
    },
    {
      id: 7,
      title: 'Improve Physical Fitness',
      description: 'Maintain a consistent workout routine and healthy lifestyle for overall physical well-being.',
      progress: 85,
      complete: false
    },
    {
      id: 8,
      title: 'Balance Work and Personal Life',
      description: 'Create a sustainable balance between professional growth and personal enjoyment for a fulfilling life.',
      progress: 70,
      complete: false
    }
  ];

  const calculateProgress = (goals) => {
    const totalProgress = goals.reduce((acc, goal) => acc + goal.progress, 0);
    return Math.round(totalProgress / goals.length);
  };

  const professionalProgress = calculateProgress(professionalGoals);
  const personalProgress = calculateProgress(personalGoals);

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">Goals</h2>
        
        <div className="goals-summary">
          <Card>
            <div className="goals-stats">
              <div className="stat-item">
                <h4>Professional Goals</h4>
                <div 
                  className="progress-circle"
                  style={{ '--progress': `${professionalProgress}%` }}
                >
                  <div className="progress-value">{professionalProgress}%</div>
                </div>
                <p>Overall Progress</p>
              </div>
              <div className="stat-item">
                <h4>Personal Goals</h4>
                <div 
                  className="progress-circle"
                  style={{ '--progress': `${personalProgress}%` }}
                >
                  <div className="progress-value">{personalProgress}%</div>
                </div>
                <p>Overall Progress</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="goals-container">
          <div className="goals-category">
            <h3 className="goals-category-title">Professional Goals</h3>
            {professionalGoals.map(goal => (
              <div 
                key={goal.id} 
                className={`goal-item ${goal.complete ? 'goal-complete' : ''}`}
              >
                <div className="goal-checkmark">
                  {goal.complete && '✓'}
                </div>
                <div className="goal-content">
                  <h4 className="goal-title">{goal.title}</h4>
                  <p className="goal-description">{goal.description}</p>
                  <div className="goal-progress">
                    <div 
                      className="goal-progress-bar" 
                      style={{ width: `${goal.progress}%` }}
                    >
                      <span className="progress-text">{goal.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="goals-category">
            <h3 className="goals-category-title">Personal Goals</h3>
            {personalGoals.map(goal => (
              <div 
                key={goal.id} 
                className={`goal-item ${goal.complete ? 'goal-complete' : ''}`}
              >
                <div className="goal-checkmark">
                  {goal.complete && '✓'}
                </div>
                <div className="goal-content">
                  <h4 className="goal-title">{goal.title}</h4>
                  <p className="goal-description">{goal.description}</p>
                  <div className="goal-progress">
                    <div 
                      className="goal-progress-bar" 
                      style={{ width: `${goal.progress}%` }}
                    >
                      <span className="progress-text">{goal.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;