import React from 'react';
import './TopCollege.css';

const CollegePage = () => {

          // Array of university items
  const universities = [
    { name: 'Amity University Online', courses: '50 Courses', link: '/university', logo: 'assets/img/df.webp' },
    { name: 'Manipal University Online', courses: '35 Courses', link: '/university', logo: 'assets/img/u2.webp' },
    { name: 'Jain University Online', courses: '40 Courses', link: '/university', logo: 'assets/img/u3.webp' },
    { name: 'Dy Patil University Online', courses: '45 Courses', link: '/university', logo: 'assets/img/u4.webp' },
    { name: 'Amrita University Online', courses: '25 Courses', link: '/university', logo: 'assets/img/u5.webp' },
    { name: 'Liverpool John Moores University Online', courses: '30 Courses', link: '/university', logo: 'assets/img/u6.webp' },
    { name: 'Golden Gate University Online', courses: '20 Courses', link: '/university', logo: 'assets/img/u7.webp' },
    { name: 'NMIMS University Online', courses: '50 Courses', link: '/university', logo: 'assets/img/u8.webp' },
    { name: 'Sanskriti University Online', courses: '35 Courses', link: '/university', logo: 'assets/img/u9.webp' },
    { name: 'LPU University Online', courses: '40 Courses', link: '/university', logo: 'assets/img/u10.webp' },
    { name: 'Deakin Business School Online', courses: '45 Courses', link: '/university', logo: 'assets/img/u11.webp' },
    { name: 'UPES University Online', courses: '25 Courses', link: '/university', logo: 'assets/img/u12.webp' },
    { name: 'Chandigarh University Online', courses: '30 Courses', link: '/university', logo: 'assets/img/u13.webp' },
    { name: 'BIMTECH University Online', courses: '20 Courses', link: '/university', logo: 'assets/img/u14.webp' },
    { name: 'Lingaya Vidyapeeth University Online', courses: '50 Courses', link: '/university', logo: 'assets/img/u15.webp' },
    { name: 'Shri Venkateshwara University Online', courses: '35 Courses', link: '/university', logo: 'assets/img/u16.webp' },
    { name: 'Vignan University Online', courses: '40 Courses', link: '/university', logo: 'assets/img/u20.webp' },
    { name: 'Upgrade Online', courses: '45 Courses', link: '/university', logo: 'assets/img/u17.webp' },
    { name: 'Chitkara University', courses: '25 Courses', link: '/university', logo: 'assets/img/u18.webp' },
    { name: 'Uttaranchal University Online', courses: '30 Courses', link: '/university', logo: 'assets/img/u19.webp' },
  ];

  return (
    <div className="college-container">
     <a href='/university'>  
      <h1 className="page-title">Top Colleges</h1>
      <div className="college-grid">
        {universities.map((college, index) => (
          <div className="college-item" key={index}>
            <img src={college.logo} alt={college.name} className="college-logo" />
            <h2 className="college-name">{college.name}</h2>
            <h2 className='college-course'>{college.courses}</h2>

          </div>
        ))}
      </div>
      </a>  
    </div>
  );
};

export default CollegePage;
