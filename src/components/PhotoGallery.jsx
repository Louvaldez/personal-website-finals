import React, { useState } from 'react';

const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % photos.length 
      : (currentIndex - 1 + photos.length) % photos.length;
    
    setSelectedPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Handle modal click events without closing the modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="gallery-item"
            onClick={() => openModal(photo, index)}
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="gallery-image" 
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div 
          className="modal-backdrop show" 
          onClick={closeModal}
        >
          <div className="modal-content" onClick={handleModalClick}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.caption} 
              className="modal-image" 
            />
            <button 
              className="modal-nav modal-prev" 
              onClick={() => navigatePhoto('prev')}
            >
              ‹
            </button>
            <button 
              className="modal-nav modal-next" 
              onClick={() => navigatePhoto('next')}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;