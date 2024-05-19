import React from 'react';

//import './ImageWithText.css'; // Import your CSS file for styling

const Services = ({ n1, text }) => {
  return (
    <div className="image-container">
      <img src={n1} alt="background" className="background-image" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

export default Services;
