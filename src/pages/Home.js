import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoBox from '../components/InfoBox';
import FeaturedCarousel from '../components/FeaturedCarousel';
import KeySellingPoints from '../components/KeySellingPoints';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import FeedbackSection from '../components/FeedbackSection';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <InfoBox />
      <FeaturedCarousel />
      <KeySellingPoints />
      <Testimonials />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Home;


// import React from 'react';
// import HeroSection from './HeroSection';
// import KeySellingPoints from './KeySellingPoints';
// import TestimonialsSection from './TestimonialsSection';
// import Footer from './Footer';

// const Home = () => {
//   return (
//     <>
//       <HeroSection />
//       <KeySellingPoints />
//       <TestimonialsSection />
//       <Footer />
//     </>
//   );
// };

// export default Home;
