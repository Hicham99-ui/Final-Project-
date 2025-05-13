import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='ContactPage'>
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <p className="subtitle">Get in touch with our team</p>
        
        <div className="contact-info">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>hichamwahbi0111@gmail.com</p>
          </div>
          
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+212 634 51 33 66</p>
          </div>
          
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>Hay Tilila , Agadir , Souss, Morocco</p>
          </div>
          
          <div className="contact-card">
            <FaClock className="contact-icon" />
            <h3>Opening Hours</h3>
            <p>Lundi-Vendredi: 8AM - 12PM</p>
            <p>Weekends: 10AM - 12PM</p>
          </div>
        </div>
        
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
