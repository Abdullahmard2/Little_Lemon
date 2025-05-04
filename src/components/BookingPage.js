// src/pages/BookingPage.js
import React, { useReducer, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom';

// Mock fetchAPI function (for testing)
window.fetchAPI = (date) => {
  console.log('Fetching available times for date:', date);
  // Return mock times for the selected date
  return [
    '12:00 PM',
    '2:00 PM',
    '4:00 PM',
    '6:00 PM',
  ];
};

window.submitAPI = (formData) => {
  console.log('Form data submitted:', formData);
  // Simulate a successful submission
  return true;  // or false if you want to simulate a failure
};
// Reducer function for handling times state
function updateTimes(state, action) {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.times || [];
    case 'UPDATE_TIMES':
      return action.times || [];
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();  // Hook to handle navigation

  useEffect(() => {
    const today = new Date();
    const times = window.fetchAPI(today);
    dispatch({ type: 'INITIALIZE_TIMES', times });
  }, []);

  const handleDateChange = (date) => {
    const selectedDate = new Date(date);
    const times = window.fetchAPI(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', times });
  };

  // Function to handle form submission
  const submitForm = async (formData) => {
    console.log('Form data submitted:', formData);

    // Simulating form submission success
    const success = window.submitAPI(formData);

    if (success) {
      // Navigate to the booking confirmation page
      navigate('/confirmed');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatchDateChange={handleDateChange} submitForm={submitForm} />
    </main>
  );
}

export default BookingPage;
