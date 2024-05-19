import React from 'react';

//import './ImageWithText.css'; // Import your CSS file for styling

const About = ({ pic, text }) => {
  return (
    <div className="image-container">
      <img src={pic} alt="background" className="background-image" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

export default About;
