import React from 'react';
import './HeroSection.css';
import img3 from './img3.png';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={img3} alt="Hero" className="hero-image" />
    </div>
  );
};

export default HeroSection;

