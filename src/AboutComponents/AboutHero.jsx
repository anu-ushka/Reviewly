import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-overlay">
        <div className="about-hero-container">
          <div className="about-hero-text">
            <h1>Empowering Trust Through Reviews</h1>
            <p>Your go-to platform for authentic product & service insights.</p>
          </div>

          <div className="about-history">
            <h2>Our History</h2>
            <hr className="history-line" />
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">January 2020</div>
                <div className="timeline-content">Company founded with a mission to bring review transparency.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">June 2021</div>
                <div className="timeline-content">Launched our first public beta version.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">March 2022</div>
                <div className="timeline-content">Reached 10,000+ active users.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">October 2023</div>
                <div className="timeline-content">Expanded to service-based reviews.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
