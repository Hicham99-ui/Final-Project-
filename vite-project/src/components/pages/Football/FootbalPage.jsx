
import React from 'react';
import { Link } from 'react-router-dom';
import Terrain1 from './Terrain1.jpg';
import Terrain2 from './Terrain2.jpg';
import Terrain3 from './/Terrain3.jpg';
import Terrain4 from './Terrain4.jpg';
import { FaStar, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const FootbalPage = () => {
  const terrains = [
    {
      id: 1,
      image: Terrain1,
      name: "Stade Salam",
      location: "Hay Salam",
      rating: 4.8,
      capacity: "6v6",
      price: "150 dh/hr"
    },
    {
      id: 2,
      image: Terrain2,
      name: "Tilila Arena",
      location: "Hay Tilila",
      rating: 4.5,
      capacity: "7v7",
      price: "100 dh/hr"
    },
    {
      id: 3,
      image: Terrain3,
      name: "Ait Melloul Complex",
      location: "Ait Melloul",
      rating: 4.9,
      capacity: "8v8",
      price: "200 dh/hr"
    },
    {
      id: 4,
      image: Terrain4,
      name: "Tikiouin Stadium",
      location: "Tikiouin",
      rating: 4.7,
      capacity: "6v6",
      price: "100 dh/hr"
    }
  ];

  return (
    <div className="football-page-container">
      <header className="page-header">
        <h1>Football Fields</h1>
        <p className="subtitle">Find and book premium football fields in your area</p>
      </header>

     
          

      <div className="terrains-grid">
        {terrains.map((terrain) => (
          <div className="terrain-card" key={terrain.id}>
            <div className="terrain-image-container">
              <img src={terrain.image} alt={terrain.name} />
              <div className="price-badge">{terrain.price}</div>
            </div>
            <div className="terrain-info">
              <div className="terrain-header">
                <h3>{terrain.name}</h3>
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span>{terrain.rating}</span>
                </div>
              </div>
              <div className="terrain-details">
                <p className="location">
                  <FaMapMarkerAlt className="detail-icon" />
                  {terrain.location}
                </p>
                <p className="capacity">
                  <FaUsers className="detail-icon" />
                  {terrain.capacity}
                </p>
              </div>
              <div className="terrain-actions">
                <Link to={`/book/Football/${terrain.id}`} className="book-button">
                  <FaCalendarAlt className="button-icon" />
                  Book (Réservez)
                </Link>
                <Link to={`/details/Football/${terrain.id}`} className="details-button">
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

export default FootbalPage;


