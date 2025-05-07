import React from 'react';
import './KeySellingPoints.css';

const KeySellingPoints = () => {
  return (
    <section className="key-sell-wrapper">
      <div className="key-sell-section">
        <div className="key-sell-left">
          <h3>Honest Reviews from Real Users</h3>
          <p>
          Gain insights from genuine user experiences to make confident buying decisions—no fake or paid reviews.
          </p>
        </div>
        <div className="key-sell-right">
        <img src="" alt="Key Img 1" />
        </div>
      </div>

      <div className="key-sell-section reverse">
        <div className="key-sell-left">
          <h3>Rate, Review & Be Heard</h3>
          <p>
          Your opinion matters! Share your thoughts on products and help others choose smarter, just like you.
          </p>
        </div>
        <div className="key-sell-right">
          <img src="https://via.placeholder.com/400x300" alt="Key Img 2" />
        </div>
      </div>
    </section>
  );
};

export default KeySellingPoints;
