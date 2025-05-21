import React from 'react';
import './ServicesHero.css';

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay">
        <div className="services-hero-content">
          <div className="services-hero-left">
            <h1 className="services-hero-title">Explore Honest Product Reviews</h1>
            <p className="services-hero-tagline">
              We help you discover the best products with real, unbiased feedback.
            </p>
            <button className="services-hero-button" type="button">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
