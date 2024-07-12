import React from 'react';
import './IconsTec.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaBootstrap, FaSass, FaPhp, FaNodeJs, FaDatabase, FaFigma, FaWordpress, FaGit, FaDocker } from 'react-icons/fa';

const techIcons = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <FaSass />, label: "Sass" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaDatabase />, label: "MySQL" },
  { icon: <FaFigma />, label: "Figma" },
  { icon: <FaWordpress />, label: "WordPress" },
  { icon: <FaGit />, label: "Git" },
];

const IconsTec = () => {
  return (
    <div className="icons-grid">
      {techIcons.map((tech, index) => (
        <div key={index} className="icon-box">
          <span></span>
          {tech.icon}
          <span className="icon-label">{tech.label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconsTec;
