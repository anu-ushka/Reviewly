import React from 'react';
import ServicesHero from '../ServicesComponents/ServicesHero';
import FeaturedReviews from '../ServicesComponents/FeaturedReviews';
import FAQSection from '../ServicesComponents/FAQSection';
import Footer from '../components/Footer';

function Services() {
  return (
    <>
      <ServicesHero />
      <FeaturedReviews/>
      <FAQSection/>
      <Footer />
    </>
  );
}

export default Services;
