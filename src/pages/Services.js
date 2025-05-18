import React from 'react';
import ServicesHero from '../ServicesComponents/ServicesHero';
import FeaturedReviews from '../ServicesComponents/FeaturedReviews';
// import ServicesFAQ from '../ServicesComponents/ServicesFAQ'; // coming later
import Footer from '../components/Footer';

function Services() {
  return (
    <>
      <ServicesHero />
      <FeaturedReviews/>
      {/* <ServicesFAQ /> */}
      <Footer />
    </>
  );
}

export default Services;
