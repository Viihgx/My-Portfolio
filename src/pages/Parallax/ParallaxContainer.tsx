import React, { useEffect } from 'react';
import Hero from '../Home/sections/Hero/Hero';
import About from '../Home/sections/About/About';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../Home/sections/Projects/Projects';
import initParticles from '../../components/js/particles';
import './ParallaxContainer.css';

const ParallaxContainer: React.FC = () => {
  useEffect(() => {
    initParticles('particles-background');
  }, []);

  return (
    <div className="parallax-container">
      <Navbar />
      <Hero />
      <About />
      <div className="section-projects">
        <canvas id="particles-background"></canvas>
        <Projects />
      </div>
      <div className="parallax-section">Section 3</div>
    </div>
  );
};

export default ParallaxContainer;
