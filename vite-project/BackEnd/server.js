const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// Create myData.json if it doesn't exist
const dataFilePath = path.join(__dirname, 'myData.json');
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '[]');
}

app.use(cors());
app.use(bodyParser.json());

// Save new booking
app.post('/save-booking', (req, res) => {
  try {
    const newBooking = {
      ...req.body,
      id: Date.now(), // Add unique ID
      bookedAt: new Date().toISOString()
    };

    const rawData = fs.readFileSync(dataFilePath);
    const bookings = JSON.parse(rawData);
    
    // Check for duplicate bookings
    const isAlreadyBooked = bookings.some(booking => 
      booking.sport === newBooking.sport &&
      booking.facilityId === newBooking.facilityId &&
      booking.date === newBooking.date &&
      booking.time === newBooking.time
    );

    if (isAlreadyBooked) {
      return res.status(400).json({ error: 'This time slot is already booked' });
    }

    bookings.push(newBooking);
    fs.writeFileSync(dataFilePath, JSON.stringify(bookings, null, 2));
    
    res.status(201).json({ message: 'Booking saved successfully!', booking: newBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Check available time slots
app.get('/check-availability', (req, res) => {
  try {
    const { sport, facilityId, date } = req.query;
    const rawData = fs.readFileSync(dataFilePath);
    const bookings = JSON.parse(rawData);

    const bookedSlots = bookings
      .filter(booking => 
        booking.sport === sport &&
        booking.facilityId === facilityId &&
        booking.date.split('T')[0] === date
      )
      .map(booking => booking.time);

    res.status(200).json({ bookedSlots });
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bookings (for admin view)
app.get('/bookings', (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath);
    const bookings = JSON.parse(rawData);
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});