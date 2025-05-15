import React from 'react';
import med from '../../assets/med.jpg'
import youssef from '../../assets/youssef.jpg'
import hicham from '../../assets/tech.jpg'
import ayman from '../../assets/ayman.jpeg'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-hero'>
        <div className='hero-overlay'>
          <h1 className='about-title'>ABOUT SOUSS PARK</h1>
          <p className='about-subtitle'>Where passion meets performance</p>
        </div>
      </div>

      <div className='about-content'>
        <div className='about-mission'>
          <h2>Our Mission</h2>
          <p className='mission-text'>
            At SOUSS PARK, we're passionate about providing top-quality sports facilities for athletes of all levels.
            Our modern football stadiums, tennis courts, basketball courts, and swimming pools are designed to meet professional standards while remaining accessible to the community.
          </p>
        </div>

        <div className='about-values'>
          <div className='value-card'>
            <div className='value-icon'>🏟️</div>
            <h3>World-Class Facilities</h3>
            <p>Professional-grade surfaces and equipment maintained to the highest standards</p>
          </div>
          <div className='value-card'>
            <div className='value-icon'>🤝</div>
            <h3>Community Focus</h3>
            <p>Inclusive programs for all ages and skill levels</p>
          </div>
          <div className='value-card'>
            <div className='value-icon'>🌟</div>
            <h3>Exceptional Service</h3>
            <p>Dedicated staff committed to your sporting experience</p>
          </div>
        </div>

        <div className='about-history'>
          <h2>Our Story</h2>
          <p>
            Founded in 2023, SOUSS PARK began with a vision to create a premier sports destination in the region. 
            What started as a single football pitch has grown into a comprehensive sports complex serving thousands of athletes annually.
          </p>
          <p>
            Today, we're proud to be more than just a sports facility - we're a community hub where friendships are forged, 
            skills are developed, and athletic dreams come to life.
          </p>
        </div>

        <div className='about-team'>
          <h2>Meet The Team</h2>
          <div className='team-grid'>
            <div className='team-member'>
              <div className='member-photo'><img  className='member-photo'src={hicham} alt="" srcset="" /></div>
              <h3>Hicham wahbi</h3>
              <p>Project Owner</p>
            </div>
            <div className='team-member'>
              <div className='member-photo'><img  className='member-photo'src={med} alt="" srcset="" /></div>
              <h3>Mohamed Amalki</h3>
              <p>Facility Director</p>
            </div>
            <div className='team-member'>
              <div className='member-photo'><img className='member-photo'src={youssef} alt="" srcset="" /></div>
              <h3>Youssef Oukni</h3>
              <p>Head of Operations</p>
            </div>
            <div className='team-member'>
              <div className='member-photo'><img  className='member-photo'src={ayman} alt="" srcset="" /></div>
              <h3>Ayman Cherqaoui</h3>
              <p>Sports Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;