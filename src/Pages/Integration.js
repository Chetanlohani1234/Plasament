import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Integration.css'; // CSS for styling

// Image grid component
const Integration = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const images = [
    {src : 'assets/img/ai1.svg',name:'PG Courses'},
    {src : 'assets/img/ai2.svg',name:'UG Courses'},
    {src : 'assets/img/ai3.svg',name:'Executive Education'}, 
    {src : 'assets/img/ai4.svg',name:'Doctorate/Ph.D.'},
     {src : 'assets/img/ai5.svg',name:'Job Gurantee'},
      {src : 'assets/img/ai6.svg',name:'Study Abroad'},
    {src : 'assets/img/ai7.svg',name:'skilling Certificate'},
     {src : 'assets/img/ai8.svg',name:'Advanced Diploma'} 

  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleNext = () => {
    navigate('/next');
  };


  return (
    <div className="image-grid-container">
        <h1 className='gridh1'>Which Degree are you interested in?</h1>
      <div className="image-grid">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`image-item ${selectedImage === img.src ? 'selected' : ''}`}
            onClick={() => handleImageClick(img.src)}
          >
            <img src={img.src} alt={img.name} />
            <span className="image-label">{img.name}</span>
          </div>
        ))}
      </div>
 
        <button className="next-button" onClick={handleNext}>Next</button>
      
    </div>
  );
};

export default Integration;
