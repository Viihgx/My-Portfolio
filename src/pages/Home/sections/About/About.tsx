import React from 'react';
import './About.css';
import Carousel from '../../../../components/Carousel/Carousel';
import IconsTec from '../../../../components/IconTec/IconsTec';
// import Button from '../../../../components/Button/Button';

const About = () => {
  return (
    <div className='about-container'>
            <Carousel />
        <div className="about-section">
            <div className="about-content">
                <h1 className="about-title">Sobre Mim</h1>
                <p className="about-text">
                Sou desenvolvedora frontend com experiência nas tecnologias como HTML, CSS, JavaScript, Typescript, React, Material-UI (MUI), Bootstrap, MySQL, PHP e Node/Express. Ao longo da minha jornada acadêmica, trabalhei em diversos projetos web, desde a criação de páginas até a integração a partir do Figma. Atualmente, estou no último período da faculdade, e estou entusiasmado em aplicar meu conhecimento e habilidades em projetos desafiadores e inovadores. 
                </p>
                <p className="about-text">
                Meu foco é sempre entregar soluções de alta qualidade e contribuir para o sucesso das equipes em que trabalho.
                </p>
            </div>
            <div className='about-icon-button'>
              <div className="about-img">  
                <IconsTec />
              </div>
              {/* <div className='about-btn'>
                <Button className="sec">Baixar cv</Button>
              </div> */}
            </div>
        </div>
    </div>
  );
};

export default About;
