import React, { useState } from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'goals', label: 'Goals' },
    { id: 'experience', label: 'IT Experience' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'feedback', label: 'Feedback' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">MyPortfolio</a>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id} className="navbar-item">
              <a
                href={`#${item.id}`}
                className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;