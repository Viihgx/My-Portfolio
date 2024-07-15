import React from 'react';
import './About.css';
import IconsTec from '../../../../components/IconTec/IconsTec';
import CustomButton from '../../../../components/CustomButton/CustomButton';

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-section" id="about">
            <div className="about-content">
                <h1 className="about-title">Sobre Mim</h1>
                <p className="about-text">
    Sou desenvolvedora frontend com um forte conjunto de habilidades em tecnologias como HTML, CSS, JavaScript, Typescript, e React. Tenho experiência em criar interfaces responsivas e atraentes utilizando frameworks e bibliotecas como Bootstrap, Sass, e Material-UI (MUI). Além disso, possuo conhecimentos em PHP, Node.js, MySQL, e APIs. Durante minha jornada acadêmica e experiência profissional, participei de diversos projetos web, desde a concepção até a aplicação de designs criados no Figma, garantindo fidelidade e funcionalidade nas entregas. Também tenho experiência com ferramentas de design como Photoshop, e sou adepta do uso de Wordpress (Elementor) para criação de sites dinâmicos. Atualmente, estou no último período da faculdade e estou pronta para transformar ideias inovadoras em soluções práticas e funcionais que realmente façam a diferença. Meu objetivo é criar experiências de usuário excepcionais que impulsionem o sucesso dos projetos.
                </p>

                <p className="about-text">
    Meu foco é sempre entregar soluções de alta qualidade que não apenas atendam, mas superem as expectativas dos clientes e usuários. Gosto de trabalhar de maneira colaborativa, valorizando a comunicação e a troca de ideias dentro da equipe. Sou detalhista e comprometida com o aprimoramento contínuo, sempre buscando aprender novas técnicas e melhores práticas em desenvolvimento frontend. Durante minha experiência profissional, aprendi a lidar com prazos apertados e a entregar projetos dentro do prazo. Estou sempre pronta para enfrentar novos desafios e contribuir para o sucesso dos projetos em que estou envolvida, mantendo-me atualizada com as tendências e avanços tecnológicos.
              </p>

            </div>
            <div className='about-icon-button'>
              <div className="about-img">  
                <IconsTec />
              </div>
              <div className='about-btn'>
                <CustomButton>Baixar CV</CustomButton> 
              </div>
        
            </div>
        </div>
    </div>
  );
};

export default About;
