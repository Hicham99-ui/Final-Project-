import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope, FaArrowLeft, FaSwimmingPool } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SwimmingBookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const pools = [
    {
      id: 1,
      name: "Agadir Swim Center",
      price: "40 dh/hr"
    },
    {
      id: 2,
      name: "Beachside Pool Club",
      price: "60 dh/hr"
    },
    {
      id: 3,
      name: "City Sports Complex",
      price: "50 dh/hr"
    }
  ];

  const pool = pools.find(p => p.id === parseInt(id));

  if (!pool) {
    return <div className="error-message">Pool not found</div>;
  }

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    email: '',
    date: null,
    time: '',
    duration: '1',
    swimmers: '1',
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
      // Simulate API call to check availability
      setTimeout(() => {
        const mockUnavailable = {
          1: { '2023-11-15': ['10:00', '14:00'] },
          2: { '2023-11-15': ['09:00', '15:00'] },
          3: { '2023-11-15': ['11:00', '16:00'] }
        };
        const dateStr = formData.date.toISOString().split('T')[0];
        setUnavailableSlots(mockUnavailable[id]?.[dateStr] || []);
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
    
    if (!formData.date || !formData.time) {
      alert('Please select both date and time');
      return;
    }

    if (unavailableSlots.includes(formData.time)) {
      alert('This time slot is already booked');
      return;
    }

    navigate('/booking-confirmation', { 
      state: { 
        booking: formData, 
        court: pool, // Using 'court' for consistency with your confirmation component
        total: parseInt(pool.price) * parseInt(formData.duration)
      } 
    });
  };

  return (
    <div className="booking-container swimming">
      <div className="booking-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <h2><FaSwimmingPool /> Book {pool.name}</h2>
        <p className="price">{pool.price}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3><FaCalendarAlt /> Select Date & Time</h3>
          <div className="form-group">
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
            <>
              <div className="form-group">
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

              <div className="form-group">
                <label>Duration (hours)</label>
                <select 
                  name="duration" 
                  value={formData.duration} 
                  onChange={handleInputChange} 
                  required
                >
                  {[1, 1.5, 2, 2.5, 3].map(num => (
                    <option key={num} value={num}>{num} hour{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Number of Swimmers</label>
                <select 
                  name="swimmers" 
                  value={formData.swimmers} 
                  onChange={handleInputChange}
                  required
                >
                  <option value="1">1 Swimmer</option>
                  <option value="2">2 Swimmers</option>
                  <option value="4">4 Swimmers</option>
                  <option value="group">Group (5+)</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="form-section">
          <h3>Your Information</h3>
          <div className="form-group">
            <label><FaUser /> Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label><FaPhone /> Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label><FaCity /> City</label>
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label><FaEnvelope /> Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Additional Notes</label>
            <textarea 
              name="notes" 
              value={formData.notes} 
              onChange={handleInputChange} 
              rows="3" 
              placeholder="Any special requests or requirements"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button swimming"
          disabled={!formData.time || isLoading}
        >
          {isLoading ? 'Processing...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
};

export default SwimmingBookingForm;