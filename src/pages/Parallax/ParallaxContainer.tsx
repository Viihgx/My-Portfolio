import React from 'react';
import Hero from '../Home/sections/Hero/Hero';
import About from '../Home/sections/About/About';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../Home/sections/Projects/Projects';
import Particles from '../../components/Particles/Particles';
import './ParallaxContainer.css';
import Footer from '../../components/Footer/Footer';
import Contact from '../Home/sections/Contact/Contact';

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
      <div className="section-contact">
      <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ParallaxContainer;
