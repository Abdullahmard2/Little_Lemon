// src/components/BookingForm.js
import { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`);
  };

  return (
    <div className="booking-form-container">
      <h2>Reserve a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">--Select a time--</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" required />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value="">--Select--</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
