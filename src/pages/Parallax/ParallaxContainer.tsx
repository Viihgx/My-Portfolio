import React from 'react';
import Hero from '../Home/sections/Hero/Hero';
import './ParallaxContainer.css';
import About from '../Home/sections/About/About';
// import Teste from '../Home/sections/Hero2/Teste';

const ParallaxContainer = () => {
    return (
        <div className="parallax-container">
            <Hero />
            <About/>
            <div className="parallax-section">Section 3</div>
            <div className="parallax-section">
                
            </div>
           
            {/* Adicione mais seções conforme necessário */}
        </div>
    );
};

export default ParallaxContainer;
