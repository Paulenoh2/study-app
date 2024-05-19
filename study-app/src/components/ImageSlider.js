import React, { useState } from 'react';
//import './ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = ({ images, text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="slide"  className="slide-images"/> <br/>
      <div className="text-overlay">{text}</div>
      <div className='button-class'>
      <button onClick={prevSlide}>Previous</button> 
      <button onClick={nextSlide}>Next</button><br/>
    </div>
    </div>
  );
};

export default ImageSlider;
