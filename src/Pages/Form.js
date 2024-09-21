import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css'; // Import Swiper core and required modules' styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    dob: '',
    state: '',
    city: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  const handleBack = () => {
    navigate('/next');
  };

  return (
    
    <div className="container">
      {/* First Div Section */}
      <div className="info-section">
        <h2 style={{fontSize:'20px'}}>Fill In Your Details Now to Access Your List</h2>
         <h1>29 Matches Found</h1>
        <div className="auto-scroll">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000, // Set a higher delay (3000ms = 3 seconds)
          //disableOnInteraction: false,
        }}
        //navigation // Enable navigation
        //pagination={{ clickable: true }} // Enable pagination
        //modules={[Autoplay, Navigation, Pagination]} // Register Swiper modules
      >
        <SwiperSlide>
          <img src="assets/img/df.webp" alt="Partner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/u2.webp" alt="Partner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/u3.webp" alt="Partner 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/u4.webp" alt="Partner 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/u5.webp" alt="Partner 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/u6.webp" alt="Partner 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/u7.webp" alt="Partner 7" />
        </SwiperSlide>
      </Swiper>

        {/* Add your GIF below the Swiper component */}
        <div className="gif-container">
            <img src="assets/img/global.gif" alt="Scrolling GIF" />
        </div>

    </div>   
 
      </div>

      {/* Second Div Section */}
      <div className="form-section">
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="tel" 
            name="mobile" 
            placeholder="Mobile Number" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
          />

          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            required 
          />

          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>

          <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
        </form>
      </div>

      {/* Buttons Outside of Form */}
      <div className="buttons">
        <button type="button" className="back-button" onClick={handleBack}>Back</button>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
