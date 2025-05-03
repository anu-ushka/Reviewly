import React from 'react';
import './FeaturedCarousel.css';

const featuredItems = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Modern and responsive web design services.',
    image: 'https://via.placeholder.com/200x150',
    link: '#'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'High-quality Android and iOS app development.',
    image: 'https://via.placeholder.com/200x150',
    link: '#'
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'Boost your website traffic and rankings.',
    image: 'https://via.placeholder.com/200x150',
    link: '#'
  },
  {
    id: 4,
    title: 'E-Commerce Solutions',
    description: 'Launch your online store in no time.',
    image: 'https://via.placeholder.com/200x150',
    link: '#'
  },
  {
    id: 5,
    title: 'Custom Software',
    description: 'Tailor-made software for your business.',
    image: 'https://via.placeholder.com/200x150',
    link: '#'
  }
];

const FeaturedCarousel = () => {
  return (
    <div className="carousel-section">
      <h2 className="carousel-heading">Featured Services</h2>
      <div className="carousel-container">
        {featuredItems.map(item => (
          <div className="carousel-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="carousel-btn">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
