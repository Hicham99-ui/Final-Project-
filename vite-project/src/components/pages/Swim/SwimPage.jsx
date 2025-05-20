import React from 'react';
import { Link } from 'react-router-dom';
import Terrain from './Pool.jpg';
import { FaStar, FaMapMarkerAlt, FaSwimmingPool, FaCalendarAlt } from 'react-icons/fa';

const SwimPage = () => {
  const pools = [
    {
      id: 1,
      image: Terrain,
      name: "Agadir Swim Center",
      location: "Agadir",
      rating: 4.9,
      type: "Olympic Size",
      price: "40 dh/hr",
      lanes: 8,
      indoor: true
    }
    // Add more pools as needed
  ];

  return (
    <div className="swim-page-container">
      <header className="page-header">
        <h1>Swimming Pools</h1>
        <p className="subtitle">Book premium swimming pools in your area</p>
      </header>

      
      <div className="pools-grid">
        {pools.map((pool) => (
          <div className="pool-card" key={pool.id}>
            <div className="pool-image-container">
              <img src={pool.image} alt={pool.name} />
              <div className="price-badge">{pool.price}</div>
              
            </div>
            <div className="pool-info">
              <div className="pool-header">
                <h3>{pool.name}</h3>
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span>{pool.rating}</span>
                </div>
              </div>
              <div className="pool-details">
                <p className="location">
                  <FaMapMarkerAlt className="detail-icon" />
                  {pool.location}
                </p>
                <p className="type">
                  <FaSwimmingPool className="detail-icon" />
                  {pool.type} • {pool.lanes} lanes
                </p>
              </div>
              <div className="pool-actions">
                <Link to={`/book/swimming/${pool.id}`} className="book-button">
                  <FaCalendarAlt className="button-icon" />
                  Book (Réservez)
                </Link>
                <Link to={`/swimming/details/${pool.id}`} className="details-button">
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

export default SwimPage;