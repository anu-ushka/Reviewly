import React from 'react';
import './FeedbackSection.css';

const FeedbackSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <div className="feedback-section">
      <div className="feedback-left">
        <h1>We Value Your Feedback</h1>
        <p>Tell us what you think. We'd love to hear from you!</p>
      </div>
      <div className="feedback-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackSection;
