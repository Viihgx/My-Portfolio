import React from 'react';
import './Hero.css';
import Button from '../../../../components/Button/Button';
// import curriculo from '../../../../assets/pdf/VitoriaSamara-DevFrontend.pdf';
import Carousel from '../../../../components/Carousel/Carousel';

const Hero = () => {
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = curriculo;
  //   link.download = 'VitoriaSamara-DevFrontend.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleContact = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vitoriasamarag10@gmail.com', '_blank');
  };

  return (
    <div className="hero-section" id="hero">
      <div className="grid">
        <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z" fill="url(#paint0_radial_1_8)" />
          <defs>
            <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="blur"></div>
      </div>

      <div className="title">
        <p>Eu sou</p>
        <p>Desenvolvedora</p>
        <p>de Software</p>
      </div>

      <div className="buttons">
        {/* <Button className="first" onClick={handleDownload}>Baixar CV</Button> */}
        <Button className="third" onClick={handleContact}>Contato</Button>
      </div>

      <svg className="top-right" width="219" height="147" viewBox="0 0 219 147" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.18" x="10.4252" y="75.8326" width="7.50168" height="7.50168" transform="rotate(110.283 10.4252 75.8326)" fill="#686868" stroke="white" strokeWidth="1.22683" />
        <rect opacity="0.18" x="180.869" y="138.825" width="7.50168" height="7.50168" transform="rotate(110.283 180.869 138.825)" fill="#686868" stroke="white" strokeWidth="1.22683" />
        <rect x="69.4713" y="-91.84" width="180.485" height="180.485" transform="rotate(20.2832 69.4713 -91.84)" stroke="white" strokeOpacity="0.1" strokeWidth="1.22683" />
      </svg>

      <svg className="bottom-left" width="232" height="191" viewBox="0 0 232 191" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50.5685" cy="172.432" r="112.068" stroke="white" strokeOpacity="0.09" />
        <g opacity="0.1">
          <path d="M26.4932 5.20547L228.856 172.432" stroke="#D9D9D9" />
          <rect x="22.4384" y="0.5" width="6.15753" height="6.15753" fill="#686868" stroke="white" />
          <rect x="224.801" y="169.027" width="6.15753" height="6.15753" fill="#686868" stroke="white" />
          <circle cx="121.819" cy="83.613" r="1.7774" fill="#323232" stroke="white" />
        </g>
      </svg>
      <Carousel />
    </div>
  );
};

export default Hero;
