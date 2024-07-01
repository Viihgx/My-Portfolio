import React from 'react';
import './Carousel.css';

// Importar ícones das tecnologias (substitua pelos ícones reais que você usará)
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaPython, FaGit, FaDocker } from 'react-icons/fa';

const techIcons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaReact />,
  <FaJsSquare />,
  <FaNodeJs />,
  <FaPython />,
  <FaGit />,
  <FaDocker />,
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
