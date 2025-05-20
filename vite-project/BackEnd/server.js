const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to check availability
app.get('/api/bookings', async (req, res) => {
  try {
    const { facilityId, sport, date } = req.query;
    const dataPath = path.join(__dirname, 'data.json');
    const data = await fs.readFile(dataPath, 'utf8');
    const bookings = JSON.parse(data);

    const filtered = bookings.filter(booking => 
      booking.facility.id === parseInt(facilityId) &&
      booking.sport.toLowerCase() === sport.toLowerCase() &&
      new Date(booking.date).toISOString().split('T')[0] === date
    );

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
app.post('/save-booking', async (req, res) => {
  try {
    const newBooking = req.body;
    const dataPath = path.join(__dirname, 'data.json');

    // Check if file exists, else create it
    let bookings = [];
    try {
      const data = await fs.readFile(dataPath, 'utf8');
      bookings = JSON.parse(data);
    } catch (err) {
      // إذا الملف ما كاينش، نخليه فارغ
      console.log('No existing bookings, creating new file.');
    }

    bookings.push(newBooking);
    await fs.writeFile(dataPath, JSON.stringify(bookings, null, 2));

    res.status(201).json({ message: 'Booking saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});
