import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Aisha Verma',
    review: 'This service completely changed the way I shop. Highly recommended!',
    photo: 'https://via.placeholder.com/80'
  },
  {
    name: 'Ravi Kumar',
    review: 'Excellent experience and top-notch support throughout.',
    photo: 'https://via.placeholder.com/80'
  },
  {
    name: 'Sara Khan',
    review: 'The interface is clean and super easy to use!',
    photo: 'https://via.placeholder.com/80'
  },
  {
    name: 'Rahul Joshi',
    review: 'One of the most reliable platforms I’ve used.',
    photo: 'https://via.placeholder.com/80'
  },
  {
    name: 'Aisha Verma',
    review: 'This service completely changed the way I shop. Highly recommended!',
    photo: 'https://via.placeholder.com/80'
  },
  {
    name: 'Aisha Verma',
    review: 'This service completely changed the way I shop. Highly recommended!',
    photo: 'https://via.placeholder.com/80'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-carousel">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            {t.photo && <img src={t.photo} alt={t.name} />}
            <p className="testimonial-text">"{t.review}"</p>
            <p className="testimonial-name">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
