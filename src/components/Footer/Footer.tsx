import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import catImg from '../../assets/images/img-cat.png';
import LogoTipo from '../../assets/images/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-nav">
            <div className="footer-logo">
                <img className='logo' src={LogoTipo} alt="" />
            </div>       
            <div className="footer-nav">
                <a href="#about">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
            </div>
        </div>
        <div className="footer-social-container">
            <div className="footer-img">
                <img className='footer-img-cat' src={catImg} alt="gato astronauta" />
            </div>
            <div className="footer-social">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 VitoriaDev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
