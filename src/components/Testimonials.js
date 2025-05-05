import React from 'react';
import './Testimonials.css';
import customerImages from '../assets/images';

const testimonials = [
  {
    name: 'Aisha Verma',
    review: 'This service completely changed the way I shop. Highly recommended!',
    photo: customerImages[0]
  },
  {
    name: 'Ravi Kumar',
    review: 'Excellent experience and top-notch support throughout.',
    photo: customerImages[1]
  },
  {
    name: 'Sara Khan',
    review: 'The interface is clean and super easy to use!',
    photo: customerImages[2]
  },
  {
    name: 'Rahul Joshi',
    review: 'One of the most reliable platforms I’ve used.',
    photo: customerImages[3]
  },
  {
    name: 'Aisha Verma',
    review: 'This service completely changed the way I shop. Highly recommended!',
    photo: customerImages[4]
  },
  {
    name: 'Aisha Verma',
    review: 'This service completely changed the way I shop. Highly recommended!',
    photo: customerImages[5]
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
