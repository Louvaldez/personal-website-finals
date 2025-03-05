import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = '', 
  className = '' 
}) => {
  const getButtonClass = () => {
    let btnClass = 'btn';
    
    if (variant === 'outline') {
      btnClass += ' btn-outline';
    } else if (variant === 'secondary') {
      btnClass += ' btn-secondary';
    } else if (variant === 'accent') {
      btnClass += ' btn-accent';
    }
    
    if (className) {
      btnClass += ` ${className}`;
    }
    
    return btnClass;
  };
  
  return (
    <button
      type={type}
      className={getButtonClass()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;