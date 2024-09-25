import React from 'react';
import './JobsPlacement.css'; // Ensure this CSS file exists

const JobsPlacement = () => {
    return (
        <div className="jobs-placement-container">
          <br/><br/><br/><br/>
            <div className="intro-text">
                <h1 className="classJobs">Pure Professional Job Portal</h1>
                <p>
                    At Pure Professional, we believe that your career journey should be as dynamic and rewarding as the skills you’ve acquired. That’s why we’ve created our exclusive job portal, a dedicated platform designed to connect talented individuals like you with top employers across various industries. Whether you’re a recent graduate looking for your first job or an experienced professional seeking new challenges, our job portal is your gateway to discovering career opportunities tailored to your unique skills and aspirations.
                </p>
                <h1 className='classJobs'>Why Choose Pure Professional’s Job Portal?</h1>
            </div>
            <div className="content-container">
               
                <div className="screenshot-container">
                <a href='https://plasament.com/'> 
                    <img
                        src="assets/img/ss1.png" // Replace with the actual screenshot URL
                        alt="Job Portal Screenshot"
                        className="screenshot"
                    /></a>
                </div>
               
                <div className="text-container">
                  <h1 className='classJobs'>Discover Trending Jobs</h1>
                 <p className='classJobsPara'>Discover the latest and most sought-after job
                     opportunities with Pure Professional’s job portal.
                      Choose your dream job from trending categories and
                       pave the way to a bright future. Start your journey
                        with Pure Professional today!
                 </p>       
                </div>
            </div>

            <div className="content-container">

                <div className="text-container">
                  <h1 className='classJobs'>Application Management</h1>
                 <p className='classJobsPara'>Effortlessly track and manage your
                     job applications with Pure Professional’s Job Portal. Our platform 
                     allows you to save job listings, monitor your application status, 
                     and receive notifications for updates. Stay organized and streamline 
                     your job search process with ease.

                 </p>       
                </div>
                <div className="screenshot-container">
                <a href='https://plasament.com/'>  
                    <img
                        src="assets/img/ss2.png" // Replace with the actual screenshot URL
                        alt="Job Portal Screenshot"
                        className="screenshot"
                    />
                 </a>   
                </div>

            </div>

            <div className="content-container">
                <div className="screenshot-container">
                <a href='https://plasament.com/'>  
                    <img
                        src="assets/img/ss3.png" // Replace with the actual screenshot URL
                        alt="Job Portal Screenshot"
                        className="screenshot"
                    />
                 </a>    
                </div>
                <div className="text-container">
                  <h1 className='classJobs'>Top Recruiters</h1>
                 <p className='classJobsPara'>Connect with leading employers through 
                    Pure Professional’s job portal. Our platform features 
                    top recruiters from various industries, offering you 
                    exclusive access to premier job opportunities. Elevate 
                    your career with Pure Professional.
                 </p>       
                </div>
            </div>

            <div className="content-container">

                <div className="text-container">
                <h1 className='classJobs'>Make your Resume</h1>
                <p className='classJobsPara'>Create a standout resume with Pure 
                    Professional’s job portal. Our easy-to-use tools help you craft 
                    a professional resume that highlights your skills and experiences. 
                    Start building your professional resume today!
                </p>       
                </div>
                <div className="screenshot-container">
                <a href='https://plasament.com/'>    
                    <img
                        src="assets/img/ss1.png" // Replace with the actual screenshot URL
                        alt="Job Portal Screenshot"
                        className="screenshot"
                    />
                </a>    
                </div>

          </div>


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

        
    );
};

export default JobsPlacement;
