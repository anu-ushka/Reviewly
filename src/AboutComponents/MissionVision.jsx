import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <div className="mission-box">
          <h2>Project Mission</h2>
          <p>
            To empower users with trustworthy reviews that help them make informed purchasing decisions.
          </p>
        </div>
        <div className="vision-box">
          <h2>Project Vision</h2>
          <p>
            To become the most reliable platform for authentic feedback, creating a community built on trust and transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
