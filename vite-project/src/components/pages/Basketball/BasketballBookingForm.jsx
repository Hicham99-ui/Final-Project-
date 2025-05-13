import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BasketballBookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const courts = [
    {
      id: 1,
      name: "Salam Court",
      price: "50 dh/hr"
    },
    {
      id: 2,
      name: "Tilila Court",
      price: "80 dh/hr"
    }
  ];

  const court = courts.find(c => c.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    email: '',
    date: null,
    time: '',
    duration: '1',
    notes: ''
  });

  const [unavailableSlots, setUnavailableSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00', '20:00', '21:00'
  ];

  useEffect(() => {
    if (formData.date) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockUnavailable = {
          1: { '2023-11-15': ['10:00', '14:00'] },
          2: { '2023-11-15': ['09:00', '15:00'] }
        };
        const dateStr = formData.date.toISOString().split('T')[0];
        setUnavailableSlots(mockUnavailable[id][dateStr] || []);
        setIsLoading(false);
      }, 500);
    }
  }, [formData.date, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (unavailableSlots.includes(formData.time)) {
      alert('This time slot is already booked');
      return;
    }
    navigate('/booking-confirmation', { 
      state: { 
        booking: formData, 
        court,
        total: parseInt(court.price) * parseInt(formData.duration)
      } 
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <h2>Book {court.name}</h2>
        <p className="price">{court.price}</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-section">
          <h3><FaCalendarAlt /> Select Date & Time</h3>
          <div className="date-picker-container">
            <label>Date</label>
            <DatePicker
              selected={formData.date}
              onChange={(date) => setFormData({ ...formData, date, time: '' })}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select a date"
              required
            />
          </div>

          {formData.date && (
            <div className="time-selection">
              <label>Time Slot {isLoading && '(Checking availability...)'}</label>
              <div className="time-slots">
                {timeSlots.map(slot => {
                  const isUnavailable = unavailableSlots.includes(slot);
                  return (
                    <button
                      type="button"
                      key={slot}
                      className={`time-slot ${formData.time === slot ? 'selected' : ''} ${isUnavailable ? 'unavailable' : ''}`}
                      onClick={() => !isUnavailable && setFormData({ ...formData, time: slot })}
                      disabled={isUnavailable}
                    >
                      {slot}
                      {isUnavailable && <span className="unavailable-badge">Booked</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {formData.time && (
            <div className="duration-selection">
              <label>Duration (hours)</label>
              <select name="duration" value={formData.duration} onChange={handleInputChange} required>
                {[1, 2, 3].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="form-section">
          <h3>Your Information</h3>
          <div className="form-group">
            <label><FaUser /> Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label><FaPhone /> Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label><FaCity /> City</label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label><FaEnvelope /> Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Additional Notes</label>
            <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows="3" />
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={!formData.time || isLoading}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BasketballBookingForm;