import React from 'react';
import './Projects.css';

// Exemplo de dados do projeto
const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1.',
    images: {
      pc: 'path/to/pc-image.png',
      tablet: 'path/to/tablet-image.png',
      mobile: 'path/to/mobile-image.png',
    },
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2.',
    images: {
      pc: 'path/to/pc-image.png',
      tablet: 'path/to/tablet-image.png',
      mobile: 'path/to/mobile-image.png',
    },
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3.',
    images: {
      pc: 'path/to/pc-image.png',
      tablet: 'path/to/tablet-image.png',
      mobile: 'path/to/mobile-image.png',
    },
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4.',
    images: {
      pc: 'path/to/pc-image.png',
      tablet: 'path/to/tablet-image.png',
      mobile: 'path/to/mobile-image.png',
    },
  },
  // Adicione mais projetos conforme necessário
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="project-title">Meus Projetos</h1>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-images">
              <div className="device-frame pc">
                <img src={project.images.pc} alt={`${project.title} - PC`} />
              </div>
              <div className="device-frame tablet">
                <img src={project.images.tablet} alt={`${project.title} - Tablet`} />
              </div>
              <div className="device-frame mobile">
                <img src={project.images.mobile} alt={`${project.title} - Mobile`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
