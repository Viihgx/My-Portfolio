import React from 'react';
import './ButtonTec.css';

interface ButtonTecProps {
  icon: React.ReactNode;
  label: string;
}

const ButtonTec: React.FC<ButtonTecProps> = ({ icon, label }) => {
  return (
    <div className="button-tec">
      <span className="button-tec-blur"></span>
      {icon}
      <span className="button-tec-label">{label}</span>
    </div>
  );
};

export default ButtonTec;
