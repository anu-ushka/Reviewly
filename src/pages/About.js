import React from 'react';
import AboutHero from '../AboutComponents/AboutHero';
import MissionVision from '../AboutComponents/MissionVision';
import TeamSection from '../AboutComponents/TeamSection';

import Footer from '../components/Footer';

function About() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <TeamSection/>
      <Footer />
    </>
  );
}

export default About;
