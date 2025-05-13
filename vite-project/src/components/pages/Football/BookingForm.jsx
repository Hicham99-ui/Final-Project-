

// export default BookingForm;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope, FaArrowLeft, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // All terrains data
  const terrains = [
    {
      id: 1,
      name: "Stade Salam",
      price: "150 dh/hr",
      location: "Hay Salam",
      capacity: "11v11",
      image: "../../assets/FootImg/Terrain5.jpg",
      description: "Professional football field with high-quality turf and excellent facilities"
    },
    {
      id: 2,
      name: "Tilila Arena",
      price: "100 dh/hr",
      location: "Hay Tilila",
      capacity: "7v7",
      image: "../../assets/FootImg/Terrain2.jpeg",
      description: "Modern 7-a-side arena perfect for small matches"
    },
    {
      id: 3,
      name: "Ait Melloul Complex",
      price: "200 dh/hr",
      location: "Ait Melloul",
      capacity: "5v5",
      image: "../../assets/FootImg/Terrain3.jpg",
      description: "Premium covered 5-a-side complex with luxury facilities"
    },
    {
      id: 4,
      name: "Tikiouin Stadium",
      price: "100 dh/hr",
      location: "Tikiouin",
      capacity: "9v9",
      image: "../../assets/FootImg/Terrain4.jpg",
      description: "Versatile 9v9 field with natural grass surface"
    }
  ];

  // Find the terrain by ID
  const terrain = terrains.find(t => t.id === parseInt(id));

  if (!terrain) {
    return <div className="terrain-not-found">Terrain not found</div>;
  }

  // State for form data
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

  // Available time slots
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', 
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00'
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, terrain });
    navigate('/confirmation', { state: { booking: formData, terrain } });
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <h2>Book {terrain.name}</h2>
        <div className="terrain-meta">
          <p className="price">{terrain.price}</p>
          <p className="location">
            <FaMapMarkerAlt /> {terrain.location}
          </p>
          <p className="capacity">
            <FaUsers /> {terrain.capacity}
          </p>
        </div>
        {terrain.description && (
          <p className="terrain-description">{terrain.description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-section">
          <h3><FaCalendarAlt /> Select Date & Time</h3>
          
          <div className="date-time-selection">
            <div className="date-picker-container">
              <label>Date</label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
                className="date-picker"
                required
              />
            </div>

            {formData.date && (
              <div className="time-selection">
                <label>Time Slot</label>
                <div className="time-slots">
                  {timeSlots.map(slot => (
                    <button
                      type="button"
                      key={slot}
                      className={`time-slot ${formData.time === slot ? 'selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                    >
                      {slot}
                    </button>
                  ))}
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
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="form-section">
          <h3><FaUser /> Your Information</h3>
          
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
          <button type="submit" className="submit-button" disabled={!formData.time}>
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;