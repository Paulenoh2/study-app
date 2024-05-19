import React from 'react';

//import './ImageWithText.css'; // Import your CSS file for styling

const Services = ({ pic3, text }) => {
  return (
    <div className="image-container">
      <img src={pic3} alt="background" className="background-image" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

export default Services;
