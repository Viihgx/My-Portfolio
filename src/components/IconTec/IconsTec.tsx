import React from 'react';
import './IconsTec.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaPython, FaGit, FaDocker } from 'react-icons/fa';

const techIcons = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaGit />, label: "Git" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaGit />, label: "Git" },
  { icon: <FaDocker />, label: "Docker" },
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
