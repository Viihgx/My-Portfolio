import React from 'react';
import './Carousel.css';

import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaBootstrap, FaSass, FaPhp, FaNodeJs, FaDatabase, FaFigma, FaWordpress, FaGit } from 'react-icons/fa';

const techIcons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaReact />,
  <FaJsSquare />,
  <FaBootstrap />,
  <FaSass />,
  <FaPhp />,
  <FaNodeJs />,
  <FaDatabase />,
  <FaFigma />,
  <FaWordpress />,
  <FaGit />,
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {techIcons.map((icon, index) => (
          <div key={index} className="carousel-item">
            {icon}
          </div>
        ))}
        {techIcons.map((icon, index) => (
          <div key={index + techIcons.length} className="carousel-item">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
