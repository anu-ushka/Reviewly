import React from 'react';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FeaturedCarousel from '../components/FeaturedCarousel';
import KeySellingPoints from '../components/KeySellingPoints';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <HeroSection />
      <FeaturedCarousel />
      <KeySellingPoints />
    </div>
  );
};

export default Home;
