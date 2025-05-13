import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope, FaTennisBall } from 'react-icons/fa';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  if (!state?.booking || !state?.court) {
    navigate('/');
    return null;
  }

  const { booking, court, total } = state;

  // Determine court type icon based on court type
  const getCourtTypeIcon = () => {
    switch(court.type) {
      case 'Clay Court':
        return <span className="court-type clay">Clay</span>;
      case 'Hard Court':
        return <span className="court-type hard">Hard</span>;
      case 'Grass Court':
        return <span className="court-type grass">Grass</span>;
      default:
        return <FaTennisBall />;
    }
  };

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

          {/* <div className="detail-item">
            <span><strong>Court:</strong> {court.name}</span>
          </div>

          <div className="detail-item">
            <FaTennisBall />
            <span><strong>Type:</strong> {getCourtTypeIcon()} {court.type}</span>
          </div> */}

          {booking.players && (
            <div className="detail-item">
              <span><strong>Players:</strong> {booking.players === '1' ? 'Training Session' : booking.players === '2' ? 'Singles' : 'Doubles'}</span>
            </div>
          )}

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

          {booking.notes && (
            <div className="detail-item notes">
              <span><strong>Notes:</strong> {booking.notes}</span>
            </div>
          )}
        </div>

        <div className="confirmation-actions">
          <button onClick={() => navigate('/tennis')} className="action-button">
            Book Another Court
          </button>
          <button onClick={() => navigate('/')} className="action-button home">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;