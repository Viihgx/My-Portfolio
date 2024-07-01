import React from 'react';
import './Button.css';

const Button = ({ children, className, ...props }) => {
  return (
    <div className={`button ${className}`} {...props}>
      <button>{children}</button>
      <span></span>
    </div>
  );
};

export default Button;
