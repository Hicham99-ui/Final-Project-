import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaShower,  FaLightbulb, FaUsers,  FaParking, FaCalendarAlt } from 'react-icons/fa';
import { GiTennisBall } from "react-icons/gi";

import Court1 from './Terrain1.jpg';
import Court2 from './Terrain2.webp';
import Court3 from './Terrain3.webp';
import { IoIosPeople } from 'react-icons/io';

const TennisCourtDetails = () => {
  const { id } = useParams();
  
  const courts = [
    {
      id: 1,
      images: [Court1],
      name: "Grand Slam Center",
      location: "Inzegan",
      rating: 4.8,
      capacity: "Singles/Doubles",
      price: "100 dh/hr",
      type: "Clay Court",
      description: "Professional clay court with excellent maintenance. Perfect for players who enjoy the slower pace and higher bounce of clay surfaces.",
      size: "23.77m x 8.23m (Singles)",
      surface: "Red Clay (French Open Standard)",
      amenities: [
        "Changing Rooms",
        "Showers",
        "Parking",
        "Floodlights",
        "Spectator Seating",
        "Pro Shop"
      ],
      rules: [
        "Proper tennis shoes required (no running shoes)",
        "Minimum booking of 1 hour",
        "No food or drinks on the court",
        "Respect court reservation times"
      ],
      reviews: [
        {
          user: "Yassine A.",
          rating: 5,
          comment: "Best clay court in the region! Feels like playing at Roland Garros."
        },
        {
          user: "Fatima Z.",
          rating: 4,
          comment: "Excellent facilities but can get busy during weekends."
        }
      ]
    },
    {
      id: 2,
      images: [Court2],
      name: "Riverside Tennis Club",
      location: "Hay Batoir",
      rating: 4.6,
      capacity: "Singles/Doubles",
      price: "150 dh/hr",
      type: "Hard Court",
      description: "High-quality hard court with acrylic surface offering consistent bounce. Ideal for competitive matches and training.",
      size: "23.77m x 10.97m (Doubles)",
      surface: "Acrylic Hard Court (US Open Style)",
      amenities: [
        "Clubhouse",
        "Showers",
        "Ample Parking",
        "LED Lighting",
        "Cafeteria"
      ],
      rules: [
        "Only non-marking tennis shoes allowed",
        "Booking includes 10 min warm-up time",
        "Proper tennis attire required",
        "No coaching without permission"
      ],
      reviews: [
        {
          user: "Karim B.",
          rating: 5,
          comment: "Perfect hard court with true bounce. My regular training spot."
        }
      ]
    },
    {
      id: 3,
      images: [Court3],
      name: "Azrou Tennis Park",
      location: "Azrou, Ait Melloul",
      rating: 4.5,
      capacity: "Singles/Doubles",
      price: "150 dh/hr",
      type: "Grass Court",
      description: "Well-maintained grass court offering fast gameplay. One of the few grass courts available in the region.",
      size: "23.77m x 10.97m (Doubles)",
      surface: "Natural Grass (Wimbledon Style)",
      amenities: [
        "Parking Area",
        "Changing Rooms",
        "Water Fountain"
      ],
      rules: [
        "Special grass court shoes recommended",
        "No play during wet conditions",
        "Maintenance breaks every 2 hours",
        "Maximum 4 players per booking"
      ],
      reviews: [
        {
          user: "Amine K.",
          rating: 4,
          comment: "Unique experience to play on grass. Court is well kept."
        }
      ]
    }
  ];

  const court = courts.find(c => c.id === parseInt(id));

  if (!court) {
    return <div className="court-not-found">Court not found</div>;
  }

  return (
    <div className="court-details-container">
      <div className="court-gallery">
        <div className="main-image">
          <img src={court.images[0]} alt={court.name} />
        </div>
      </div>

      <div className="court-content">
        <div className="court-header">
          <h1>{court.name}</h1>
          <div className="location-rating">
            <span className="location">
              <FaMapMarkerAlt /> {court.location}
            </span>
            <span className="rating">
              <FaStar /> {court.rating}
            </span>
          </div>
        </div>

        <div className="court-highlights">
          <div className="highlight-card">
            <GiTennisBall className="highlight-icon" />
            <div>
              <h4>Court Type</h4>
              <p>{court.type}</p>
            </div>
          </div>
          <div className="highlight-card">
            <GiTennisBall className="highlight-icon" />
            <div>
              <h4>Surface</h4>
              <p>{court.surface}</p>
            </div>
          </div>
          <div className="highlight-card">
            <FaUsers className="highlight-icon" />
            <div>
              <h4>Capacity</h4>
              <p>{court.capacity}</p>
            </div>
          </div>
          <div className="highlight-card price">
            <h4>Price</h4>
            <p className="price-value">{court.price}</p>
          </div>
        </div>

        <div className="section">
          <h2>About This Court</h2>
          <p>{court.description}</p>
        </div>

        <div className="section amenities-section">
          <h2>Facilities & Amenities</h2>
          <div className="amenities-grid">
            {court.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                {amenity === "Floodlights" || amenity === "LED Lighting" ? <FaLightbulb className="amenity-icon" /> : null}
                {amenity === "Parking" || amenity === "Ample Parking" || amenity === "Parking Area" ? <FaParking className="amenity-icon" /> : null}
                {amenity === "Changing Rooms" || amenity === "Clubhouse" ? <FaUsers className="amenity-icon" /> : null}
                {amenity === "Showers" ? <FaShower className="amenity-icon" /> : null}
                {amenity === "Spectator Seating" ? <IoIosPeople className="amenity-icon" /> : null}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section rules-section">
          <h2>Rules & Policies</h2>
          <ul>
            {court.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="section reviews-section">
          <h2>Reviews</h2>
          <div className="reviews-container">
            {court.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <h4>{review.user}</h4>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? "star-filled" : "star-empty"} />
                    ))}
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <Link to={`/book/tennis/${court.id}`} className="book-now-button">
            <FaCalendarAlt /> Book Now
          </Link>
          <Link to="/tennis" className="back-button">
            Back to Courts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TennisCourtDetails;