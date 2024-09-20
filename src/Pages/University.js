import React from 'react';
import './University.css';

const UniversityPage = () => {
  const courses = [
    {
      name: "B.Tech in Computer Science",
      duration: "4 Years",
      fees: "₹1,20,000",
    },
    {
      name: "MBA in Marketing",
      duration: "2 Years",
      fees: "₹1,50,000",
    },
    {
      name: "M.Sc in Data Science",
      duration: "2 Years",
      fees: "₹1,20,000",
    },
    // Add more courses as needed
  ];

  return (
    <div className="university-container">
      {/* <div className="sidebar">
        <h2 className="sidebar-title">College Rankings</h2>
        <ul className="ranking-list">
          <li><strong>1.</strong> Best Online University 2023</li>
          <li><strong>2.</strong> Top 10 in Distance Learning</li>
          <li><strong>3.</strong> Recognized for Excellence in Education</li>
        </ul>
      </div> */}

      <div className="main-content">
        <h1 className="university-title">University Online</h1>
        <div className="video-container">
          <iframe
            title="University Video"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/your_video_id" // Replace with actual video ID
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="about-title">About University</h2>
        <div className="about-description">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p><strong>Established:</strong> {2000}</p>
          {/* <p><strong>Accreditation:</strong> {aboutUniversity.accreditation}</p> */}
          <p><strong>Location:</strong> {"Dehradun"}</p>
        </div>

        <h2 className="course-title">Course Details</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <br/><br/>
            {/* CTA SECTION START */}
    <section className="ed-2-cta overflow-hidden bg-edpurple pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(../assets/img/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
      <div className="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
        <div className="flex md:flex-col gap-y-[15px] items-center justify-between">
          {/* text */}
          <div className="max-w-[600px] md:max-w-full shrink-0 relative">
            <h3 className="font-semibold text-[36px] sm:text-[32px] xxs:text-[28px] text-white leading-[1.4] mb-[41px] xxs:mb-[31px]">
              Download The App Pure Professional App
            </h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.isoftinc.pure_professional"
              className="ed-btn !h-[56px] !bg-white !text-black gap-[10px] hover:!bg-edyellow hover:!text-edblue"
            >
              Download{" "}
              <span className="icon">
                <i className="fa-solid fa-arrow-right-long" />
              </span>
            </a>
            {/* vector */}
            <img
              src="assets/img/cta-2-txt-vector.svg"
              alt="vector"
              className="absolute bottom-[10px] left-[37%] xs:left-[75%]"
            />
          </div>
          {/* image */}
          <div className="mr-[40px] lg:mr-0 relative z-[1] shrink-0">
          <a href='https://play.google.com/store/apps/details?id=com.isoftinc.pure_professional'>  
            <img  style={{marginTop:'10px',marginBottom:'30%'}}
            src = "assets/img/DownloadAppImage.jpg"
            //src="assets/img/cta-2-img.png" 
            alt="image" />
            {/* vector */}
            </a>  
            <div className="aspect-square w-[386px] border-[57px] border-edyellow rounded-full absolute bottom-0 right-[25%] translate-y-[50%] -z-[1]" />
          </div>
        </div>
      </div>
    </section>
    {/* CTA SECTION END */}

      </div>
    </div>
  );
};

export default UniversityPage;
