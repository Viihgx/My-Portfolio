import React from 'react';
import './Projects.css';
import PcImage from '../../../../assets/images/pc-image.png';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1.',
    images: {
      pc: PcImage,
    },
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2.',
    images: {
      pc: PcImage,
    },
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3.',
    images: {
      pc: PcImage,
    },
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4.',
    images: {
      pc: PcImage,

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
          <div className={`project-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`} key={index}>
            <div className="project-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-image">
              <img src={project.images.pc} alt={`${project.title} - PC`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
