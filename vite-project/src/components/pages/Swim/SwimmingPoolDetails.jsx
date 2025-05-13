import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaSwimmingPool, FaWater, FaUsers, FaClock, 
         FaParking, FaCalendarAlt, FaUmbrellaBeach, FaShower } from 'react-icons/fa';
import terrain from './Pool.jpg'

const SwimmingPoolDetails = () => {
  const { id } = useParams();
  
  const pools = [
    {
      id: 1,
      name: "Agadir Swim Center",
      location: "Agadir",
      image: terrain,
      rating: 4.9,
      capacity: "8 lanes",
      price: "40 dh/hr",
      type: "Olympic Size",
      description: "Professional Olympic-sized pool with international competition standards. Perfect for serious swimmers and training sessions.",
      size: "50m x 25m",
      depth: "2m-3m",
      temperature: "26-28°C",
      amenities: [
        "Changing Rooms",
        "Showers",
        "Ample Parking",
        "Spectator Seating",
        "Pro Shop",
        "Sauna"
      ],
      rules: [
        "Proper swimwear required",
        "Shower before entering",
        "No diving in shallow areas",
        "Children must be supervised"
      ],
      reviews: [
        {
          user: "Hassan K.",
          rating: 5,
          comment: "Best swimming facility in Agadir! Perfect for lap swimming."
        }
      ]
    },
    // Add other pools similarly
  ];

  const pool = pools.find(p => p.id === parseInt(id));

  if (!pool) {
    return <div className="pool-not-found">Pool not found</div>;
  }

  return (
    <div className="pool-details-container">
      <div className="pool-gallery">
        <div className="main-image">
          <img src={pool.image} alt={pool.name} />
        </div>
      </div>

      <div className="pool-content">
        <div className="pool-header">
          <h1>{pool.name}</h1>
          <div className="location-rating">
            <span className="location">
              <FaMapMarkerAlt /> {pool.location}
            </span>
            <span className="rating">
              <FaStar /> {pool.rating}
            </span>
          </div>
        </div>

        <div className="pool-highlights">
          <div className="highlight-card">
            <FaSwimmingPool />
            <div>
              <h4>Pool Type</h4>
              <p>{pool.type}</p>
            </div>
          </div>
          <div className="highlight-card">
            <FaWater />
            <div>
              <h4>Dimensions</h4>
              <p>{pool.size}</p>
            </div>
          </div>
          <div className="highlight-card">
            <FaUsers />
            <div>
              <h4>Capacity</h4>
              <p>{pool.capacity}</p>
            </div>
          </div>
          <div className="highlight-card price">
            <h4>Price</h4>
            <p className="price-value">{pool.price}</p>
          </div>
        </div>

        <div className="section">
          <h2>About This Pool</h2>
          <p>{pool.description}</p>
          <div className="specs-grid">
            <div>
              <strong>Depth:</strong> {pool.depth}
            </div>
            {pool.temperature && (
              <div>
                <strong>Water Temperature:</strong> {pool.temperature}
              </div>
            )}
          </div>
        </div>

        {/* Other sections (Amenities, Rules, Reviews) similar to tennis */}
        
        <div className="action-buttons">
          <Link to={`/book/swimming/${pool.id}`} className="book-now-button">
            <FaCalendarAlt /> Book Now
          </Link>
          <Link to="/swim" className="back-button">
            Back to Pools
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolDetails;