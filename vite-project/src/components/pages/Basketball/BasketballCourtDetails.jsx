import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt,FaShower, FaBasketballBall, FaLightbulb, FaUsers, FaClock,FaParking, FaCalendarAlt } from 'react-icons/fa';
import Court1 from './Terrain1.jpg';
import Court2 from './Terrain2.jpg';
import { IoIosPeople } from 'react-icons/io';


const BasketballCourtDetails = () => {
  const { id } = useParams();
  
  const courts = [
    {
      id: 1,
      images: [Court1],
      name: "Salam Court",
      location: "Hay Salam",
      rating: 4.7,
      capacity: "Full Court (5v5)",
      price: "50 dh/hr",
      type: "Indoor",
      description: "Premium indoor basketball court with professional flooring and excellent lighting. Perfect for competitive games and training sessions.",
      size: "28m x 15m (Standard)",
      surface: "Wooden Floor (NBA Standard)",
      amenities: [
        "Changing Rooms",
        "Showers",
        "Ample Parking",
        "LED Lighting",
        "Bleacher Seating",
        "Refreshment Stand"
      ],
      rules: [
        "No street shoes allowed - only basketball shoes",
        "Minimum booking of 1 hour",
        "No food or drinks on the court",
        "No dunking on the rims"
      ],
      reviews: [
        {
          user: "Ahmed K.",
          rating: 5,
          comment: "The best indoor court in the city! Perfect for our league games."
        },
        {
          user: "Karim M.",
          rating: 4,
          comment: "Great facilities but can get crowded on weekends."
        }
      ]
    },
    {
      id: 2,
      images: [Court2],
      name: "Tilila Court",
      location: "Hay Tilila",
      rating: 4.5,
      capacity: "Half Court (3v3)",
      price: "80 dh/hr",
      type: "Outdoor",
      description: "Well-maintained outdoor court with high-quality asphalt surface. Great for casual games and practice.",
      size: "15m x 14m (Half Court)",
      surface: "Asphalt (Weather Resistant)",
      amenities: [
        "Parking Area",
        "Floodlights",
        "Benches",
        "Water Fountain"
      ],
      rules: [
        "Maximum 6 players per booking",
        "Proper basketball shoes required",
        "No hanging on the rims",
        "Respect other players' turns"
      ],
      reviews: [
        {
          user: "Mehdi A.",
          rating: 4,
          comment: "Good outdoor court with decent surface."
        },
        {
          user: "Samir R.",
          rating: 5,
          comment: "Great value for money. Open until late."
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
            <FaBasketballBall className="highlight-icon" />
            <div>
              <h4>Court Size</h4>
              <p>{court.size}</p>
            </div>
          </div>
          <div className="highlight-card">
            <FaBasketballBall className="highlight-icon" />
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
                {amenity === "Parking Area" || amenity === "Ample Parking" ? <FaParking className="amenity-icon" /> : null}
                {amenity === "Changing Rooms" ? <FaUsers className="amenity-icon" /> : null}
                {amenity === "Showers" ? <FaShower className="amenity-icon" /> : null}
                {amenity === "Bleacher Seating" ? <IoIosPeople className="amenity-icon" /> : null}
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
          <Link to={`/book/basketball/${court.id}`} className="book-now-button">
            <FaCalendarAlt /> Book Now
          </Link>
          <Link to="/basket" className="back-button">
            Back to Courts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketballCourtDetails;