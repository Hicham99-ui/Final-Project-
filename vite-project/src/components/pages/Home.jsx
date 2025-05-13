
import React from 'react';
import { Link } from 'react-router-dom';
import Football from '../../assets/FootballImg.jpg';
import Tennis from '../../assets/TennisImg.jpg';
import Basket from '../../assets/BasketImg.jpg';
import Swim from '../../assets/SwimImg.jpg';
import { FaStar, FaCalendarAlt, FaUsers, FaRegClock } from 'react-icons/fa';

const Home = () => {
  const facilities = [
    {
      id: 1,
      image: Football,
      title: "Football Stadium 6/6",
      description: "Modern field with high-quality synthetic grass, perfect for matches or tournaments. Available day and night with lighting and changing rooms.",
      features: [
        { icon: <FaStar />, text: "Professional Grade" },
        { icon: <FaCalendarAlt />, text: "Easy Booking" },
        { icon: <FaUsers />, text: "Up to 22 players" }
      ],
      link: "/FootbalPage"
    },
    {
      id: 2,
      image: Basket,
      title: "Basketball Court",
      description: "Well-maintained court with standard hoops and safe playing surface. Great for pickup games and local leagues.",
      features: [
        { icon: <FaStar />, text: "Premium Surface" },
        { icon: <FaRegClock />, text: "Extended Hours" },
        { icon: <FaUsers />, text: "5v5 Games" }
      ],
      link: "/Basket"
    },
    {
      id: 3,
      image: Tennis,
      title: "Tennis Court",
      description: "Professional-grade court with all necessary equipment. Ideal for casual games and training sessions.",
      features: [
        { icon: <FaStar />, text: "Tournament Ready" },
        { icon: <FaCalendarAlt />, text: "Flexible Booking" },
        { icon: <FaUsers />, text: "Singles/Doubles" }
      ],
      link: "/Tennis"
    },
    {
      id: 4,
      image: Swim,
      title: "Swimming Pool",
      description: "Clean and safe pool suitable for free swimming or training. Supervised with changing rooms.",
      features: [
        { icon: <FaStar />, text: "Olympic Size" },
        { icon: <FaRegClock />, text: "Lane Reservations" },
        { icon: <FaUsers />, text: "All Skill Levels" }
      ],
      link: "/Swim"
    }
  ];

  return (
    <div className='home-container'>
      <div className="hero-section">
        <h1>Welcome to SOUSS PARK</h1>
        <p>Premium sports facilities for athletes of all levels</p>
        <Link to="/Services" className="cta-button">Explore Our services</Link>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility) => (
          <div className="facility-card" key={facility.id}>
            <div className="card-image">
              <img src={facility.image} alt={facility.title} />
              <div className="image-overlay"></div>
            </div>
            <div className="card-content">
              <h2>{facility.title}</h2>
              <p>{facility.description}</p>
              
              <div className="facility-features">
                {facility.features.map((feature, index) => (
                  <div className="feature" key={index}>
                    <span className="feature-icon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to={facility.link} className="show-more-btn">
                Show More <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"The best facilities in town! The booking process is so easy and the fields are always in perfect condition."</p>
            <div className="author">- Youssef Oukni</div>
          </div>
          <div className="testimonial">
            <p>"I train here weekly with my team. The lighting at night is excellent and the staff are very helpful."</p>
            <div className="author">- Med Amalki</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;

