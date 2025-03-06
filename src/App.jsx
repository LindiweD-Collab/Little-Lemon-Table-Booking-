import React, { useState } from 'react';
import './App.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    if (!formData.date) errors.date = 'Date is required.';
    if (!formData.time) errors.time = 'Time is required.';
    if (formData.guests <= 0) errors.guests = 'Guests must be at least 1.';
    return errors;
  };

  return (
    <div className="booking-form-container">
      <h1>Book a Table at Little Lemon</h1>
      {submitted ? (
        <div className="success-message">
          <h2>Booking Confirmed!</h2>
          <p>Thank you, {formData.name}. We’ve reserved your table.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              aria-label="Booking Date"
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-label="Booking Time"
            />
            {errors.time && <span className="error">{errors.time}</span>}
          </div>
          <div>
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              aria-label="Number of Guests"
            />
            {errors.guests && <span className="error">{errors.guests}</span>}
          </div>
          <button type="submit">Reserve Table</button>
        </form>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BookingForm />
    </div>
  );
}

export default App;