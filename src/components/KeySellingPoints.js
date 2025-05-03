import React from 'react';
import './KeySellingPoints.css';

const KeySellingPoints = () => {
  return (
    <div>
      <div className="key-sell-section">
        <div className="key-sell-left">
          <h3>Key Selling Point 1</h3>
          <p>
            Short description explaining the benefit or value proposition of the first key selling point. Focus on user benefits.
          </p>
        </div>
        <div className="key-sell-right">
          <img src="https://via.placeholder.com/400x300" alt="Key Point 1" />
        </div>
      </div>


      <div className="key-sell-section reverse">
        <div className="key-sell-left">
          <h3>Key Selling Point 2</h3>
          <p>
            Description of the second selling point, highlighting user benefits.
          </p>
        </div>
        <div className="key-sell-right">
          <img src="https://via.placeholder.com/400x300" alt="Key Point 2" />
        </div>
      </div>
    </div>
  );
};

export default KeySellingPoints;
