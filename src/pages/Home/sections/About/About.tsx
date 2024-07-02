import React from 'react';
import './About.css';
import Carousel from '../../../../components/Carousel/Carousel';
import IconsTec from '../../../../components/IconTec/IconsTec';

const About = () => {
  return (
    <div className='about-container'>
            <Carousel />
        <div className="about-section">
            <div className="about-content">
                <h1 className="about-title">Sobre Mim</h1>
                <p className="about-text">
                I am a passionate software developer with a strong background in creating
                innovative and efficient solutions. With a keen eye for detail and a
                dedication to delivering high-quality work, I strive to exceed expectations
                in every project I undertake.
                </p>
                <p className="about-text">
                My skills include a wide range of technologies and tools, enabling me to
                adapt to various project requirements and challenges. I am constantly
                learning and growing, always seeking new opportunities to expand my
                knowledge and improve my craft.
                </p>
            </div>
            <div className="about-img">  
              <IconsTec />
            </div>
        </div>
    </div>
  );
};

export default About;
