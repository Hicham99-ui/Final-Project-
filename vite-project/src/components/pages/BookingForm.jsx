import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const { sport, id } = useParams();
  const navigate = useNavigate();
  
  // Mock data - replace with your actual data fetching
  const facilities = {
    Football: [
      { id: 1, name: "Stade Salam", price: "150 dh/hr" },
      { id: 2, name: "Tilila Arena", price: "100 dh/hr" },
      { id: 3, name: "Ait Melloul Complex", price: "200 dh/hr" },
      { id: 4, name: "Tikiouin Stadium", price: "100 dh/hr" }
    ],
    basketball: [
      { id: 1, name: "Salam Court", price: "50 dh/hr" },
      { id: 2, name: "Tilila Court", price: "80 dh/hr" }
    ],
    swimming: [
      { id: 1, name: "Agadir Swim Center", price: "40 dh/hr" }
    ],
    tennis: [
      { id: 1, name: "Grand Slam Center", price: "100 dh/hr" },
      { id: 2, name: "Riverside Tennis Club", price: "150 dh/hr" },
      { id: 3, name: "Azrou Tennis Park", price: "150 dh/hr" }
    ]
  };

  const facility = facilities[sport]?.find(f => f.id === parseInt(id));

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

  // Time slots available for booking
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00'
  ];

  // Fetch unavailable slots when date is selected
  useEffect(() => {
    if (formData.date) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        // Mock data - replace with actual API call
        const mockUnavailable = {
          football: { 1: ['10:00', '14:00'], 2: ['09:00', '15:00'] },
          basketball: { 1: ['11:00', '16:00'], 2: ['13:00', '18:00'] },
          swimming: { 1: ['09:00', '12:00'] },
          tennis: { 1: ['10:00', '15:00'], 2: ['11:00', '16:00'], 3: ['09:00', '14:00'] }
        };
        
        
        const slots = mockUnavailable[sport]?.[id] || [];
        setUnavailableSlots(slots);
        setIsLoading(false);
      }, 500);
    }
  }, [formData.date, sport, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (unavailableSlots.includes(formData.time)) {
    alert('This time slot is already booked. Please choose another.');
    return;
  }

  const bookingData = {
    ...formData,
    facility,
    sport,
    total: parseInt(facility.price) * parseInt(formData.duration)
  };

  try {
    const response = await fetch('http://localhost:5000/save-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });

    if (response.ok) {
      navigate('/booking-confirmation', {
        state: {
          booking: formData,
          facility,
          sport,
          total: parseInt(facility.price) * parseInt(formData.duration)
        }
      });
    } else {
      alert('خطأ أثناء تسجيل الحجز. حاول مرة أخرى.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('تعذر الاتصال بالسيرفر. تأكد أنه شغال.');
  }
};


  if (!facility) {
    return <div className="facility-not-found">Facility not found</div>;
  }

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <h2>Book {facility.name}</h2>
        <p className="price">{facility.price}</p>
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
              className="date-picker"
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
              <select
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
              >
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
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={!formData.time || isLoading}>
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;