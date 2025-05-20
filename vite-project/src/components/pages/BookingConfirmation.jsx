import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope, FaPrint } from 'react-icons/fa';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!state?.booking || !state?.facility) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state?.booking || !state?.facility) {
    return null; 
  }

  const { booking, facility, sport, total } = state;
  const sportNames = {
    football: 'Football Field',
    basketball: 'Basketball Court',
    swimming: 'Swimming Pool',
    tennis: 'Tennis Court'
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-header">
          <FaCheckCircle className="success-icon" />
          <h2>Booking Confirmed!</h2>
          <p>Your reservation at {facility.name} has been confirmed</p>
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
            <span><strong>Facility:</strong> {sportNames[sport]} - {facility.name}</span>
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

        <div className="button-group">
          <button onClick={() => navigate('/')} className="home-button">
            Back to Home
          </button>
          <button onClick={handlePrint} className="print-button">
            <FaPrint /> Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;