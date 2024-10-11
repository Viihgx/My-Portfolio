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
                Sou desenvolvedora de Software com um sólido conjunto de habilidades em tecnologias como HTML, CSS, JavaScript, TypeScript e React, além de experiência prática com linguagens back-end como PHP, Java e Node.js. Tenho um histórico comprovado na criação de interfaces responsivas e atraentes, utilizando frameworks e bibliotecas como Bootstrap, Sass e Material-UI (MUI), sempre garantindo uma experiência de usuário superior. Também possuo conhecimentos em MySQL e integração de APIs, o que me permite atuar em projetos full-stack.                </p>

                <p className="about-text">
                Durante minha jornada acadêmica e experiência profissional, participei ativamente em diversos projetos web, desde a concepção até a implementação, com designs elaborados no Figma e Photoshop, garantindo que as entregas fossem funcionais e fiéis ao protótipo. Minha experiência com WordPress (Elementor) permitiu-me criar sites dinâmicos e intuitivos, adaptando soluções para diferentes tipos de negócios.              </p>
                
                <p className="about-text">
                Atualmente, no último período da faculdade, estou preparada para transformar ideias inovadoras em soluções práticas que realmente façam a diferença. Tenho um forte compromisso em entregar resultados que não apenas atendam, mas superem as expectativas de clientes e usuários. Sou uma profissional colaborativa, que valoriza a comunicação e a troca de ideias para otimizar o trabalho em equipe.             </p>
                
                <p className="about-text">
                Sou detalhista e dedicada ao aprimoramento contínuo, sempre acompanhando as tendências tecnológicas e melhores práticas de desenvolvimento de Software. Minha capacidade de gerenciar prazos apertados e entregar projetos no prazo reforça minha determinação em enfrentar novos desafios e contribuir para o sucesso de cada projeto em que estou envolvida.             </p>

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
