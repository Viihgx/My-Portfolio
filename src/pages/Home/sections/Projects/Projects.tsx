import React from 'react';
import './Projects.css';
import Project1 from '../../../../assets/images/ImgProject1.png';
import ButtonTec from '../../../../components/ButtonTec/ButtonTec';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaBootstrap, FaFigma, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Suco Puro',
    description: 'Loja virtual de sucos naturais, desenvolvida com foco na experiência do usuário, responsividade, animações suaves e design moderno. A loja oferece funcionalidades de compra e navegação intuitiva entre as seções. A aplicação inclui uma homepage, uma seção "Sobre Nós", informações sobre os benefícios dos produtos, exibição dos produtos para compra, uma seção de contato com informações detalhadas, e um carrinho de compras funcional. ',
    description2: 'Tecnologias utilizadas: React, Bootstrap, Framer Motion, React Icons, JavaScript (ES6+), CSS, HTML.',
    images: {
      pc: Project1,
    },
    url: 'https://sucopuro.vercel.app/',
    github: 'https://github.com/Viihgx/juice-store',
    techs: [
      { icon: <FaReact />, label: 'React' },
      { icon: <FaBootstrap />, label: 'Bootstrap' },
      { icon: <FaFigma />, label: 'Framer Motion' },
      { icon: <FaJsSquare />, label: 'JavaScript (ES6+)' },
      { icon: <FaCss3Alt />, label: 'CSS' },
      { icon: <FaHtml5 />, label: 'HTML' },
    ],
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2.',
    images: {
      pc: Project1,
    },
    url: 'https://projeto2.com',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3.',
    images: {
      pc: Project1,
    },
    url: 'https://projeto3.com',
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do Projeto 4.',
    images: {
      pc: Project1,
    },
    url: 'https://projeto4.com',
  },
  // Adicione mais projetos conforme necessário
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="container-project-title">Meus Projetos</h1>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div className={`project-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`} key={index}>
            <div className="project-description">
              <h2 className='project-title'>{project.title}</h2>
              <p className='project-text'>{project.description}</p>
              <p className='project-text-description2'>{project.description2}</p>
              {project.techs && (
                <div className="tech-icons">
                  {project.techs.map((tech, index) => (
                    <ButtonTec key={index} icon={tech.icon} label={tech.label} />
                  ))}
                </div>
              )}
              <div className="project-buttons">
                <CustomButton className="variant-secondary" onClick={() => window.open(project.github, '_blank')}>
                  <FaGithub /> GitHub
                </CustomButton>
                <CustomButton className="variant-secondary" onClick={() => window.open(project.url, '_blank')}>
                  Acessar Página
                </CustomButton>
              </div>
            </div>
            <div className="project-image">
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-buttons">
                    <div className="browser-button close"></div>
                    <div className="browser-button minimize"></div>
                    <div className="browser-button maximize"></div>
                  </div>
                  <div className='header-url'> 
                    <div className="browser-url">{project.url}</div>
                  </div>
                </div>
                <img src={project.images.pc} alt={`${project.title} - PC`} className="screen-img-project" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
