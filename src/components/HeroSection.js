import React from 'react';
import SearchBar from './SearchBar';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Just Bought It? Review It!</h1>
          <p>Real Reviews by Real People</p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
