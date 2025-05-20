import React from 'react';
import { Link } from 'react-router-dom';
import Terrain1 from './Terrain1.jpg';
import Terrain2 from './Terrain2.webp';
import Terrain3 from './Terrain3.webp';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';


const TennisPage = () => {
  const courts = [
    {
      id: 1,
      image: Terrain1,
      name: "Grand Slam Center",
      location: "Inzegan",
      rating: 4.8,
      type: "Clay Court",
      price: "100 dh/hr",
      lights: true
    },
    {
      id: 2,
      image: Terrain2,
      name: "Riverside Tennis Club",
      location: "Hay Batoir",
      rating: 4.6,
      type: "Hard Court",
      price: "150 dh/hr",
      lights: true
    },
    {
      id: 3,
      image: Terrain3,
      name: "Azrou Tennis Park",
      location: "Azrou ,Ait Melloul ",
      rating: 4.5,
      type: "Grass Court",
      price: "150 dh/hr",
      lights: false
    }
  ];

  return (
    <div className="tennis-page-container">
      <header className="page-header">
        <h1>Tennis Courts</h1>
        <p className="subtitle">Book premium tennis courts in your area</p>
      </header>

    

      <div className="courts-grid">
        {courts.map((court) => (
          <div className="court-card" key={court.id}>
            <div className="court-image-container">
              <img src={court.image} alt={court.name} />
              <div className="price-badge">{court.price}</div>
              {court.lights && <div className="feature-badge">Lighting Available</div>}
            </div>
            <div className="court-info">
              <div className="court-header">
                <h3>{court.name}</h3>
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span>{court.rating}</span>
                </div>
              </div>
              <div className="court-details">
                <p className="location">
                  <FaMapMarkerAlt className="detail-icon" />
                  {court.location}
                </p>
                <p className="type">
                  {court.type}
                </p>
              </div>
              <div className="court-actions">
                <Link to={`/book/tennis/${court.id}`} className="book-button">
                  <FaCalendarAlt className="button-icon" />
                  Book (Réservez)
                </Link>
                <Link to={`/details/tennis/${court.id}`} className="details-button">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TennisPage;
