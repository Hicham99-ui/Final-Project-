import React from 'react';


const Services = () => {
  return (
    <div className="services-container">
      <div className="services-hero">
        <div className="services-overlay">
          <h1 className="services-title">OUR SERVICES</h1>
          <p className="services-subtitle">Premium sports facilities at your fingertips</p>
        </div>
      </div>

      <div className="services-content">
        <div className="services-intro">
          <h2>Stadium Reservation Services</h2>
          <p className="services-text">
            At SOUSS PARK, we provide a seamless digital booking experience for all our premium sports facilities. 
            Our online reservation system allows you to easily book football fields, tennis courts, basketball courts, 
            and swimming pools with just a few clicks.
          </p>
        </div>

        <div className="services-features">
          <div className="feature-card">
            <div className="feature-icon1">⏱️</div>
            <h3>Real-Time Booking</h3>
            <p>Check availability and reserve instantly with our live scheduling system</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon1">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Book from anywhere using any device with our responsive platform</p>
          </div>
        </div>

        <div className="services-details">
          <div className="service-type">
            <h3>Football Fields</h3>
            <ul>
              <li>Full-size professional pitches</li>
              <li>5-a-side and 7-a-side options</li>
              <li>Floodlit evening sessions</li>
            </ul>
          </div>
          <div className="service-type">
            <h3>Tennis Courts</h3>
            <ul>
              <li>Clay, grass, and hard court surfaces</li>
              <li>Professional lighting systems</li>
              <li>Equipment rental available</li>
            </ul>
          </div>
          <div className="service-type">
            <h3>Basketball Courts</h3>
            <ul>
              <li>Indoor and outdoor facilities</li>
              <li>NBA-standard flooring</li>
              <li>Team booking discounts</li>
            </ul>
          </div>
          <div className="service-type">
            <h3>Swimming Pools</h3>
            <ul>
              <li>Olympic-sized lanes</li>
              <li>Heated indoor pools</li>
              <li>Family swimming sessions</li>
            </ul>
          </div>
        </div>

        <div className="services-benefits">
          <h2>Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>24/7 Access</h3>
              <p>Book anytime from anywhere with our online platform</p>
            </div>
            <div className="benefit-item">
              <h3>Fair Pricing</h3>
              <p>Competitive rates with discounts for regular users</p>
            </div>
            <div className="benefit-item">
              <h3>Professional Maintenance</h3>
              <p>Facilities kept in tournament-ready condition</p>
            </div>
            <div className="benefit-item">
              <h3>Customer Support</h3>
              <p>Dedicated team to assist with all your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;