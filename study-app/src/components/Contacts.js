import React from 'react';

//import './ImageWithText.css'; // Import your CSS file for styling

const Contacts = ({ can, text }) => {
  return (
    <div className="image-container">
      <img src={can} alt="background" className="background-image" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

export default Contacts;
