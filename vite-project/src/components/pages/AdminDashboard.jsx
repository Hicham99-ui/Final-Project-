import React, { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, FaClock, FaUser, FaPhone, FaCity, 
  FaEnvelope, FaSearch, FaTrash, FaEye, FaTimes 
} from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, ] = useState(null);
  const [searchTerm, ] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/admin/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bookingId) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) {
      return;
    }
    
    try {
      setDeletingId(bookingId);
      const response = await fetch(`http://localhost:5000/api/admin/bookings/${bookingId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Refresh bookings after deletion
        await fetchBookings();
      } else {
        alert('Failed to delete booking');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Error deleting booking');
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
  };

  const filteredBookings = bookings.filter(booking => {
    const dateMatch = filterDate 
      ? new Date(booking.date).toDateString() === filterDate.toDateString()
      : true;
    
    const searchMatch = searchTerm === '' || 
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (booking.facility && booking.facility.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return dateMatch && searchMatch;
  });

  const generateBookingId = (booking) => {
    if (booking._id) return booking._id;
    if (booking.facility && booking.date && booking.time) {
      return `${booking.facility.id}-${booking.date}-${booking.time}`;
    }
    return Math.random().toString(36).substr(2, 9);
  };

  if (loading && bookings.length === 0) {
    return <div className="loading">Loading bookings...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Booking Management</h1>
      
      <div className="filters">
        
       
      </div>
      
      <div className="bookings-list">
        {filteredBookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Facility</th>
                <th>Sport</th>
                <th>Date</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => {
                const bookingId = generateBookingId(booking);
                return (
                  <tr key={bookingId}>
                    <td>{booking.facility?.name || 'N/A'}</td>
                    <td>{booking.sport}</td>
                    <td>
                      <FaCalendarAlt /> {new Date(booking.date).toLocaleDateString()}
                    </td>
                    <td>
                      <FaClock /> {booking.time}
                    </td>
                    <td>
                      <div className="customer-info">
                        <div><FaUser /> {booking.fullName}</div>
                        <div><FaPhone /> {booking.phone}</div>
                      </div>
                    </td>
                    <td className="actions">
                      <button 
                        onClick={() => handleViewDetails(booking)}
                        className="view-btn"
                      >
                        <FaEye /> View
                      </button>
                      <button 
                        onClick={() => handleDelete(bookingId)}
                        className="delete-btn"
                        disabled={deletingId === bookingId}
                      >
                        {deletingId === bookingId ? 'Deleting...' : <><FaTrash /> Delete</>}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Booking Details Modal */}
      {showModal && selectedBooking && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <h2>Booking Details</h2>
            
            <div className="detail-section">
              <h3>Facility Information</h3>
              <div className="detail-row">
                <span className="detail-label">Facility:</span>
                <span>{selectedBooking.facility?.name || 'N/A'}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Sport:</span>
                <span>{selectedBooking.sport}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Price:</span>
                <span>{selectedBooking.facility?.price || 'N/A'}</span>
              </div>
            </div>
            
            <div className="detail-section">
              <h3>Booking Time</h3>
              <div className="detail-row">
                <span className="detail-label">Date:</span>
                <span>{new Date(selectedBooking.date).toLocaleDateString()}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Time:</span>
                <span>{selectedBooking.time}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Duration:</span>
                <span>{selectedBooking.duration} hour(s)</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Total:</span>
                <span>{selectedBooking.total} dh</span>
              </div>
            </div>
            
            <div className="detail-section">
              <h3>Customer Information</h3>
              <div className="detail-row">
                <span className="detail-label">Full Name:</span>
                <span>{selectedBooking.fullName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span>{selectedBooking.phone}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span>{selectedBooking.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">City:</span>
                <span>{selectedBooking.city}</span>
              </div>
            </div>
            
            {selectedBooking.notes && (
              <div className="detail-section">
                <h3>Additional Notes</h3>
                <p>{selectedBooking.notes}</p>
              </div>
            )}
            
            <div className="modal-actions">
              <button onClick={closeModal} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;