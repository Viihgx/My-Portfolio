import React, { useEffect } from 'react';
import initParticles from '../js/particles'; // Certifique-se de que o caminho esteja correto
import './Particles.css';

const Particles: React.FC = () => {
  useEffect(() => {
    initParticles('particles-background');
  }, []);

  return (
    <canvas id="particles-background"></canvas>
  );
};

export default Particles;
