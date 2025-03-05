import React from 'react';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Basketball Court",
      imageUrl: gallery1,
      description: "Our school's basketball court where I practice regularly"
    },
    {
      id: 2,
      title: "Kobe Bryant",
      imageUrl: gallery2,
      description: "My basketball idol - Kobe Bryant showing his famous 'silence' gesture"
    },
    {
      id: 3,
      title: "Basketball Team",
      imageUrl: gallery3,
      description: "Group photo with my basketball teammates at a tournament"
    },
    {
      id: 4,
      title: "Derrick Rose",
      imageUrl: gallery4,
      description: "Derrick Rose in his Chicago Bulls warm-up jacket before a game"
    },
    {
      id: 5,
      title: "School Tournament",
      imageUrl: gallery5,
      description: "Our school basketball tournament with the scoreboard showing"
    },
    {
      id: 6,
      title: "Team Photo",
      imageUrl: gallery6,
      description: "Another team photo after our basketball practice session"
    }
  ];

  return (
    <section className="section fade-in">
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item card">
              <div className="gallery-image-container">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
