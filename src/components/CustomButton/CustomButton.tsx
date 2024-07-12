import React from 'react';
import './CustomButton.css';

const CustomButton = ({ children, className = '', ...props }) => {
  return (
    <div className={`custom-button ${className}`} {...props}>
      <button>{children}</button>
      <span></span>
    </div>
  );
};

export default CustomButton;
