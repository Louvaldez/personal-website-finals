import React from 'react';

const Card = ({ title, content, imageUrl, imageAlt, className = '', children }) => {
  if (children) {
    return <div className={`card ${className}`}>{children}</div>;
  }
  
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <img src={imageUrl} alt={imageAlt || title} className="card-image" />
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {content && <div className="card-content">{content}</div>}
    </div>
  );
};

export default Card;