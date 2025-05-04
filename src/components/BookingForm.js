// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatchDateChange, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (dispatchDateChange) {
      dispatchDateChange(newDate); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

   
    submitForm(formData);
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Reserve a Table</h2>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">--Select a time--</option>
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))
          ) : (
            <option>No available times</option>
          )}
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
