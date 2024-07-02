import React from 'react';
import Hero from '../Home/sections/Hero/Hero';
import About from '../Home/sections/About/About';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../Home/sections/Projects/Projects';
import Particles from '../../components/Particles/Particles';
import './ParallaxContainer.css';

const ParallaxContainer: React.FC = () => {
  return (
    <div className="parallax-container">
      <Navbar />
      <Hero />
      <About />
      <div className="section-projects">
        <Particles />
        <Projects />
      </div>
      <div className="parallax-section">Section 3</div>
    </div>
  );
};

export default ParallaxContainer;
