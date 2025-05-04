// src/pages/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '', // Add message field to formData
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isValid = {
    firstName: /^[A-Za-z]+$/.test(formData.firstName),
    lastName: /^[A-Za-z]+$/.test(formData.lastName),
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    phone: /^[0-9]+$/.test(formData.phone),
    message: formData.message.length >= 25, // Validation for message length
  };

  const allValid = Object.values(isValid).every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h2>Contact Us</h2>

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {touched.firstName && !isValid.firstName && (
          <small style={{ color: 'red' }}>First name must contain only letters</small>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {touched.lastName && !isValid.lastName && (
          <small style={{ color: 'red' }}>Last name must contain only letters</small>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {touched.email && !isValid.email && (
          <small style={{ color: 'red' }}>Enter a valid email</small>
        )}

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {touched.phone && !isValid.phone && (
          <small style={{ color: 'red' }}>Phone number must be numeric</small>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={25}
          aria-required="true"
          aria-label="Message input"
        />
        {touched.message && formData.message.length < 25 && (
          <small style={{ color: 'red' }}>Message must be at least 25 characters</small>
        )}

        <button aria-label="On Click" type="submit" disabled={!allValid}>
          Submit
        </button>

        {submitted && <p style={{ color: 'green', marginTop: '1rem' }}>Thank you! Your message has been received.</p>}
      </form>
    </div>
  );
}

export default ContactUs;
