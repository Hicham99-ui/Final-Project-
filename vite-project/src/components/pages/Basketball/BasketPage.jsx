import React from 'react';
import { Link } from 'react-router-dom';
import Terrain1 from './Terrain1.jpg';
import Terrain2 from './Terrain2.jpg';
import { FaStar, FaMapMarkerAlt, FaBasketballBall, FaCalendarAlt } from 'react-icons/fa';

const BasketPage = () => {
  const courts = [
    {
      id: 1,
      image: Terrain1,
      name: "Salam Court",
      location: "Hay Salam",
      rating: 4.7,
      type: "Indoor",
      price: "50 dh/hr",
      lights: true
    },
    {
      id: 2,
      image: Terrain2,
      name: "Tilila Court",
      location: "Hay Tilila",
      rating: 4.5,
      type: "Outdoor",
      price: "80 dh/hr",
      lights: false
    }
  ];

  return (
    <div className="basketball-page-container">
      <header className="page-header">
        <h1>Basketball Courts</h1>
        <p className="subtitle">Find and book premium basketball courts in your area</p>
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
                  <FaBasketballBall className="detail-icon" />
                  {court.type} Court
                </p>
              </div>
              <div className="court-actions">
                <Link to={`/book/basketball/${court.id}`} className="book-button">
                  <FaCalendarAlt className="button-icon" />
                  Book (Réservez)
                </Link>
                <Link to={`/details/basketball/${court.id}`} className="details-button">
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

export default BasketPage;
