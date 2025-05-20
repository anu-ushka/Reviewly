import React from 'react';
import './KeySellingPoints.css';
import review_img1 from '../assets/review_img1.png';
import review_img2 from '../assets/review_img2.png';

const KeySellingPoints = () => {
  return (
    <section className="key-sell-outer-wrapper">
      <div className="key-sell-container">
        <div className="key-box">
          <div className="key-text">
            <h3>Honest Reviews from Real Users</h3>
            <p>
              Gain insights from genuine user experiences to make confident buying decisions—no fake or paid reviews.
            </p>
          </div>
          <div className="key-image">
            <img src={review_img1} alt="Review Illustration 1" />
          </div>
        </div>

        <div className="key-box">
          <div className="key-text">
            <h3>Rate, Review & Be Heard</h3>
            <p>
              Your opinion matters! Share your thoughts on products and help others choose smarter, just like you.
            </p>
          </div>
          <div className="key-image">
            <img src={review_img2} alt="Review Illustration 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySellingPoints;
