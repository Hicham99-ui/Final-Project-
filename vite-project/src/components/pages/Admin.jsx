import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrash, FaEdit, FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, FaEnvelope} from 'react-icons/fa';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch all bookings from the server
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Delete a booking
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        // In a real app, you would call your API to delete
        // For now, we'll just filter it out from the local state
        setBookings(bookings.filter(booking => booking.id !== id));
        
        // In a real implementation:
        const response = await fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Delete failed');
        // Then fetch updated bookings or update state
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // Filter bookings based on search term and filter option
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'today' && new Date(booking.date).toDateString() === new Date().toDateString()) ||
      (filter === 'upcoming' && new Date(booking.date) > new Date()) ||
      (filter === 'past' && new Date(booking.date) < new Date());
    
    return matchesSearch && matchesFilter;
  });

  if (loading) return <div className="loading">Loading bookings...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="admin-bookings-container">
      <h1>Bookings Management</h1>
      
      <div className="admin-controls">
        <div className="search-box">
          
          
            {(e) => setSearchTerm(e.target.value)}
          
        </div>
        
        <div className="filter-options">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Bookings</option>
            <option value="today">Today's Bookings</option>
            <option value="upcoming">Upcoming Bookings</option>
            <option value="past">Past Bookings</option>
          </select>
        </div>
      </div>
      
      <div className="bookings-table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Sport</th>
              <th>Facility</th>
              <th>Date & Time</th>
              <th>Contact</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map(booking => (
                <tr key={booking.id} onClick={() => setSelectedBooking(booking)}>
                  <td>{booking.id}</td>
                  <td>
                    <div className="customer-info">
                      <FaUser /> {booking.fullName}
                      <br />
                      <small>{booking.city}</small>
                    </div>
                  </td>
                  <td>
                    <div className="sport-info">
                       {booking.sport}
                    </div>
                  </td>
                  <td>
                    {booking.facility?.name || 'N/A'}
                    <br />
                    <small>{booking.facility?.price || ''}</small>
                  </td>
                  <td>
                    <div className="datetime-info">
                      <FaCalendarAlt /> {new Date(booking.date).toLocaleDateString()}
                      <br />
                      <FaClock /> {booking.time} ({booking.duration}hr)
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <FaPhone /> {booking.phone}
                      <br />
                      <FaEnvelope /> {booking.email}
                    </div>
                  </td>
                  <td>{booking.total} dh</td>
                  <td>
                    <div className="action-buttons">
                      
                
                        
                  
                      <button 
                        className="delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(booking.id);
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-results">
                  No bookings found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Booking Detail Modal */}
      {selectedBooking && (
        <div className="booking-detail-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedBooking(null)}
            >
              &times;
            </button>
            
            <h2>Booking Details</h2>
            
            <div className="detail-section">
              <h3>Customer Information</h3>
              <p><strong>Name:</strong> {selectedBooking.fullName}</p>
              <p><strong>Phone:</strong> {selectedBooking.phone}</p>
              <p><strong>Email:</strong> {selectedBooking.email}</p>
              <p><strong>City:</strong> {selectedBooking.city}</p>
            </div>
            
            <div className="detail-section">
              <h3>Booking Information</h3>
              <p><strong>Sport:</strong> {selectedBooking.sport}</p>
              <p><strong>Facility:</strong> {selectedBooking.facility?.name}</p>
              <p><strong>Date:</strong> {new Date(selectedBooking.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {selectedBooking.time} ({selectedBooking.duration} hours)</p>
              <p><strong>Price:</strong> {selectedBooking.total} dh</p>
              <p><strong>Booked At:</strong> {new Date(selectedBooking.bookedAt).toLocaleString()}</p>
            </div>
            
            <div className="detail-section">
              <h3>Additional Notes</h3>
              <p>{selectedBooking.notes || 'No additional notes'}</p>
            </div>
            
            <div className="modal-actions">
              <button className="close-btn" onClick={() => setSelectedBooking(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;