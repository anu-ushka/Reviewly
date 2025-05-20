import React from 'react';
import './ServicesHero.css';

function ServicesHero() {
  const scrollToSection = () => {
    const carouselSection = document.getElementById('services-carousel');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-hero">
      <div className="services-hero-overlay">
        <div className="services-hero-content">
          <div className="services-hero-left">
            <h1 className="services-hero-title">Explore Honest Product Reviews</h1>
            <p className="services-hero-tagline">
              We help you discover the best products with real, unbiased feedback.
            </p>
            <button className="services-hero-button" onClick={scrollToSection}>
              Start Exploring
            </button>
          </div>
          <div className="services-hero-right">
            {('../assets/bg-hero-img.jpg')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
