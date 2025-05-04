import React from 'react';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FeaturedCarousel from '../components/FeaturedCarousel';
import KeySellingPoints from '../components/KeySellingPoints';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <HeroSection />
      <FeaturedCarousel />
      <KeySellingPoints />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
