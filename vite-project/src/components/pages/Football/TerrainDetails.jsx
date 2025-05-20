import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaFootballBall, FaShower, FaParking, FaLightbulb } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import Terrain1 from './Terrain1.jpg';
import Terrain2 from './Terrain2.jpg';
import Terrain3 from './Terrain3.jpg';
import Terrain4 from './Terrain4.jpg';

const TerrainDetails = () => {
  const { id } = useParams();
  
  // This would normally come from an API or context
  const terrains = [
    {
      id: 1,
      images: [
        Terrain1
      ],
      name: "Stade Salam",
      location: "Hay Salam",
      rating: 4.8,
      capacity: "6v6",
      price: "150 dh/hr",
      description: "Professional-grade football stadium with FIFA-certified artificial turf. Perfect for official matches and serious training sessions. The field is well-maintained with proper markings and high-quality goals.",
      size: "105m x 68m (Standard)",
      surface: "Artificial Turf (FIFA Quality Pro)",
      amenities: [
        "Locker Rooms",
        "Showers",
        "Ample Parking",
        "Floodlights",
        "Grandstand Seating",
        "Refreshment Stand",
        "First Aid Room"
      ],
      rules: [
        "No metal cleats allowed - only turf shoes or flats",
        "Minimum booking of 2 hours for weekend matches",
        "50% deposit required for groups larger than 15",
        "No smoking anywhere on premises",
        "Alcohol prohibited"
      ],
      reviews: [
        {
          user: "Ahmed K.",
          rating: 5,
          comment: "The best field in the region! Perfect for our league matches. The surface is always in excellent condition."
        },
        {
          user: "Karim M.",
          rating: 4,
          comment: "Great facilities but parking can be challenging on match days. Arrive early!"
        },
        {
          user: "Youssef B.",
          rating: 5,
          comment: "Professional-level field at an affordable price. The floodlights are excellent for night games."
        }
      ]
    },
    {
      id: 2,
      images: [
        Terrain2
      ],
      name: "Tilila Arena",
      location: "Hay Tilila",
      rating: 4.5,
      capacity: "7v7",
      price: "100 dh/hr",
      description: "Modern 7-a-side football arena with high-quality artificial surface. Ideal for small-sided games and youth training. Features a fenced perimeter to keep balls in play.",
      size: "60m x 40m (7-a-side)",
      surface: "Artificial Turf (3rd Generation)",
      amenities: [
        "Changing Rooms",
        "Basic Showers",
        "Parking Area",
        "Floodlights",
        "Benches",
        "Water Dispenser"
      ],
      rules: [
        "Maximum 14 players per booking",
        "No food or drinks on the field",
        "Children under 12 must be supervised",
        "Cancellation policy: 24 hours notice"
      ],
      reviews: [
        {
          user: "Mehdi A.",
          rating: 4,
          comment: "Perfect for our weekly 7v7 games. The surface has good cushioning."
        },
        {
          user: "Samir R.",
          rating: 5,
          comment: "Great value for money. The owner is very accommodating with scheduling."
        }
      ]
    },
    {
      id: 3,
      images: [
        Terrain3
      ],
      name: "Ait Melloul Complex",
      location: "Ait Melloul",
      rating: 4.9,
      capacity: "8v8",
      price: "200 dh/hr",
      description: "Premium 5-a-side football complex with state-of-the-art facilities. Features a covered playing area making it perfect for all weather conditions. Popular for corporate tournaments.",
      size: "40m x 20m (5-a-side)",
      surface: "Hybrid Artificial Turf",
      amenities: [
        "Air-conditioned Changing Rooms",
        "Luxury Showers",
        "Secure Parking",
        "LED Lighting",
        "VIP Lounge",
        "Cafeteria",
        "Equipment Rental"
      ],
      rules: [
        "Strictly no street shoes on the field",
        "Mandatory shin guards for all players",
        "Premium booking requires 50% deposit",
        "No refunds for cancellations within 6 hours"
      ],
      reviews: [
        {
          user: "Nabil C.",
          rating: 5,
          comment: "Absolutely top-notch facilities. Worth every dirham for our company tournaments."
        },
        {
          user: "Hassan F.",
          rating: 5,
          comment: "The covered pitch is a game-changer. We play here rain or shine!"
        },
        {
          user: "Amine K.",
          rating: 4,
          comment: "Excellent but pricey. Best for special occasions rather than regular play."
        }
      ]
    },
    {
      id: 4,
      images: [
        Terrain4
      ],
      name: "Tikiouin Stadium",
      location: "Tikiouin",
      rating: 4.7,
      capacity: "9v9",
      price: "100 dh/hr",
      description: "Versatile 9v9 football field with natural grass surface. Ideal for intermediate players and youth academies. The field has proper drainage for year-round play.",
      size: "80m x 50m (9v9)",
      surface: "Natural Grass (Hybrid Bermuda)",
      amenities: [
        "Basic Changing Areas",
        "Parking",
        "Floodlights",
        "Bleacher Seating",
        "Water Fountain"
      ],
      rules: [
        "No play within 24 hours of heavy rain",
        "Mandatory rotation for large groups",
        "No pets allowed",
        "Respect scheduled maintenance times"
      ],
      reviews: [
        {
          user: "Omar S.",
          rating: 4,
          comment: "Best natural grass field in the area. Well maintained and perfect bounce."
        },
        {
          user: "Khalid M.",
          rating: 5,
          comment: "Our youth team trains here weekly. The grass is always in great condition."
        },
        {
          user: "Yassin A.",
          rating: 3,
          comment: "Good field but lighting could be better for night games."
        }
      ]
    }
  ];

  const terrain = terrains.find(t => t.id === parseInt(id));

  if (!terrain) {
    return <div className="terrain-not-found">Terrain not found</div>;
  }

  return (
    <div className="terrain-details-container">
      <div className="terrain-gallery">
        <div className="main-image">
          <img src={terrain.images[0]} alt={terrain.name} />
        </div>
        {/* <div className="thumbnail-container">
          {terrain.images.slice(0, 3).map((img, index) => (
            <div key={index} className="thumbnail">
              <img src={img} alt={`${terrain.name} ${index + 1}`} />
            </div>
          ))}
        </div> */}
      </div>

      <div className="terrain-content">
        <div className="terrain-header">
          <h1>{terrain.name}</h1>
          <div className="location-rating">
            <span className="location">
              <FaMapMarkerAlt /> {terrain.location}
            </span>
            <span className="rating">
              <FaStar /> {terrain.rating}
            </span>
          </div>
        </div>

        <div className="terrain-highlights">
          <div className="highlight-card">
            <FaFootballBall className="highlight-icon" />
            <div>
              <h4>Field Size</h4>
              <p>{terrain.size}</p>
            </div>
          </div>
          <div className="highlight-card">
            <MdOutlineSportsSoccer className="highlight-icon" />
            <div>
              <h4>Surface</h4>
              <p>{terrain.surface}</p>
            </div>
          </div>
          <div className="highlight-card">
            <IoIosPeople className="highlight-icon" />
            <div>
              <h4>Capacity</h4>
              <p>{terrain.capacity}</p>
            </div>
          </div>
          <div className="highlight-card price">
            <h4>Price</h4>
            <p className="price-value">{terrain.price}</p>
          </div>
        </div>

        <div className="section">
          <h2>About This Field</h2>
          <p>{terrain.description}</p>
        </div>

        <div className="section amenities-section">
          <h2>Facilities & Amenities</h2>
          <div className="amenities-grid">
            {terrain.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                {amenity === "Showers" && <FaShower className="amenity-icon" />}
                {amenity === "Parking" && <FaParking className="amenity-icon" />}
                {amenity === "Floodlights" && <FaLightbulb className="amenity-icon" />}
                {amenity === "Changing Rooms" && <FaUsers className="amenity-icon" />}
                {amenity === "Seating Area" && <IoIosPeople className="amenity-icon" />}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section rules-section">
          <h2>Rules & Policies</h2>
          <ul>
            {terrain.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="section reviews-section">
          <h2>Reviews</h2>
          <div className="reviews-container">
            {terrain.reviews.map((review, index) => (
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
          <Link to={`/book/Football/${terrain.id}`} className="book-now-button">
            <FaCalendarAlt /> Book Now
          </Link>
          <Link to="/footbalPage" className="back-button">
            Back to Fields
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TerrainDetails;