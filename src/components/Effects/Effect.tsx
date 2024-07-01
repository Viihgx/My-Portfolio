import React from 'react';
import './Effect.css';

const Effect: React.FC = () => {
  return (
    <div className="starfield">
      {[...Array(50)].map((_, index) => (
        <div key={index} className="shooting-star" />
      ))}
    </div>
  );
};

export default Effect;
