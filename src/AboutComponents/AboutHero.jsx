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
            <h2>Project Timeline</h2>
            <hr className="history-line" />
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">15 April, 2025</div>
                <div className="timeline-content">Project's theme and topic assigned</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1 May, 2025</div>
                <div className="timeline-content">Started committing on GitHub</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">7 May, 2025</div>
                <div className="timeline-content">Mid-evauluation (Progress checked by mentor).</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Currently</div>
                <div className="timeline-content">Project in progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
