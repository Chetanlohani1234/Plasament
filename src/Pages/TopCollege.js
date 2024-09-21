import React,{useState} from 'react';
import './TopCollege.css';

const CollegePage = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

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

      <div className="faq-container">
      <h1>Let's Clear Up Some Doubts</h1>

      <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
        <div className="faq-question" onClick={() => toggleFAQ(0)}>
        What is the procedure for seeking admission to postgraduate programs in University?
        </div>
        {activeIndex === 0 && (
          <div className="faq-answer">
            For the academic year 2024-25, admission to all PG programs of University of Delhi (UoD) will be done through Common University Entrance Test (Postgraduate)- 2024 (CUET(PG)-2024) only. For admissions, candidate must
          </div>
        )}
      </div>

      <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
        What is the procedure for seeking admission to postgraduate programs in University?
          
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            For the academic year 2024-25, admission to all PG programs of University of Delhi (UoD) will be done through Common University Entrance Test (Postgraduate)- 2024 (CUET(PG)-2024) only. For admissions, candidate must
          </div>
        )}
      </div>

      <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
        What is the procedure for seeking admission to postgraduate programs in University?
          
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            For the academic year 2024-25, admission to all PG programs of University of Delhi (UoD) will be done through Common University Entrance Test (Postgraduate)- 2024 (CUET(PG)-2024) only. For admissions, candidate must:
          </div>
        )}
      </div>

      <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}>
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
        What is the procedure for seeking admission to postgraduate programs in University?
          
        </div>
        {activeIndex === 3 && (
          <div className="faq-answer">
            For the academic year 2024-25, admission to all PG programs of University of Delhi (UoD) will be done through Common University Entrance Test (Postgraduate)- 2024 (CUET(PG)-2024) only. For admissions, candidate must.
          </div>
        )}
      </div>

      {/* Add more questions and answers here as needed */}
    </div>


    </div>
  );
};

export default CollegePage;
