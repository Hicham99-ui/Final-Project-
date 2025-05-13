import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope } from 'react-icons/fa';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  if (!state?.booking || !state?.court) {
    navigate('/');
    return null;
  }

  const { booking, court, total } = state;

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-header">
          <FaCheckCircle className="success-icon" />
          <h2>Booking Confirmed!</h2>
          <p>Your reservation at {court.name} has been confirmed</p>
        </div>

        <div className="booking-details">
          <h3>Booking Summary</h3>
          
          <div className="detail-item">
            <FaCalendarAlt />
            <span>
              <strong>Date:</strong> {booking.date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          <div className="detail-item">
            <FaClock />
            <span><strong>Time:</strong> {booking.time} ({booking.duration} hour{booking.duration > 1 ? 's' : ''})</span>
          </div>

          <div className="detail-item">
            <span><strong>Court:</strong> {court.name}</span>
          </div>

          <div className="detail-item">
            <span><strong>Total:</strong> {total} dh</span>
          </div>

          <div className="detail-item">
            <FaUser />
            <span><strong>Name:</strong> {booking.fullName}</span>
          </div>

          <div className="detail-item">
            <FaPhone />
            <span><strong>Phone:</strong> {booking.phone}</span>
          </div>

          <div className="detail-item">
            <FaCity />
            <span><strong>City:</strong> {booking.city}</span>
          </div>

          <div className="detail-item">
            <FaEnvelope />
            <span><strong>Email:</strong> {booking.email}</span>
          </div>
        </div>

        <button onClick={() => navigate('/')} className="home-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;