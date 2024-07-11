// Example structure for Home.jsx or Lessons.jsx
import React from 'react';
import HeroSection from '../components/Hero-Section/HeroSection'; // Example import
import AboutUs from '../components/About-us/AboutUs'; // Example import
import Courses from '../components/Course-Section/Courses'; // Example import
import Features from '../components/Feature-Section/Features'; // Example import

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <AboutUs />
      <Courses />
      <Features />
      {/* Additional components */}
    </div>
  );
};

export default Home;
