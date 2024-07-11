import React from 'react';
import './Projects.css';
import PcImage from '../../../../assets/images/pc-image.png';
import BrowserFrame from '../../../../assets/images/browser-frame.png';
import Project1 from '../../../../assets/images/ImgProject1.png';

const projects = [
  {
    title: 'Suco Puro',
    description: 'Desenvolvi uma loja virtual de sucos naturais, focada em proporcionar uma experiência de usuário agradável e responsiva. A aplicação inclui uma homepage interativa com animações, exibição de produtos, uma seção de benefícios dos produtos, informações de contato e um carrinho de compras.',
    images: {
      pc: Project1,
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
              <img src={BrowserFrame} alt="Browser Frame" className="browser-frame" />
              <div className='screen-img-project'>
                <img src={project.images.pc} alt={`${project.title} - PC`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
