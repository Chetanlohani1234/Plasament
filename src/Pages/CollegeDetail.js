import React, {useState} from 'react'

const CollegeDetail = () => {

      // State to track active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to change active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
<>
  <div className="ed-overlay group">
    <div className="fixed inset-0 z-[100] group-[.active]:bg-edblue/80 duration-[400ms] pointer-events-none group-[.active]:pointer-events-auto" />
  </div>
  {/* cart */}
  <div className="ed-cart-bar group">
    <div className="w-[420px] max-w-full fixed z-[100] right-0 top-0 h-full bg-white flex flex-col translate-x-[100%] duration-[400ms] group-[.active]:translate-x-0">
      {/* heading */}
      <div className="flex items-center justify-between px-[25px] border-b border-edgray/20 pb-[23px] pt-[22px]">
        <h5 className="text-[20px]">My Cart List</h5>
        <h6>(03 Items)</h6>
      </div>
      {/* cart items */}
      <div>
        {/* single cart item */}
        <div className="flex items-center gap-[20px] py-[30px] px-[25px] border-b border-edgray/20">
          <img
            src="assets/img/cart-item-1.jpg"
            alt="Cart Item Image"
            className="rounded-[10px] shrink-0"
          />
          <div className="grow">
            <h6 className="font-medium text-[18px] text-edblue">
              <a href="course-details.html" className="hover:text-edpurple">
                Web Development
              </a>
            </h6>
            <h6 className="font-medium text-edgray">$15.00</h6>
          </div>
          <button className="text-[20px] text-edgray shrink-0 hover:text-edpurple">
            x
          </button>
        </div>
        {/* single cart item */}
        <div className="flex items-center gap-[20px] py-[30px] px-[25px] border-b border-edgray/20">
          <img
            src="assets/img/cart-item-2.jpg"
            alt="Cart Item Image"
            className="rounded-[10px] shrink-0"
          />
          <div className="grow">
            <h6 className="font-medium text-[18px] text-edblue">
              <a href="course-details.html" className="hover:text-edpurple">
                Digital Marketing
              </a>
            </h6>
            <h6 className="font-medium text-edgray">$15.00</h6>
          </div>
          <button className="text-[20px] text-edgray shrink-0 hover:text-edpurple">
            x
          </button>
        </div>
        {/* single cart item */}
        <div className="flex items-center gap-[20px] py-[30px] px-[25px] border-b border-edgray/20">
          <img
            src="assets/img/cart-item-3.jpg"
            alt="Cart Item Image"
            className="rounded-[10px] shrink-0"
          />
          <div className="grow">
            <h6 className="font-medium text-[18px] text-edblue">
              <a href="course-details.html" className="hover:text-edpurple">
                WordPress Development
              </a>
            </h6>
            <h6 className="font-medium text-edgray">$15.00</h6>
          </div>
          <button className="text-[20px] text-edgray shrink-0 hover:text-edpurple">
            x
          </button>
        </div>
      </div>
      {/* cart bottom */}
      <div className="mt-auto px-[25px] mb-[30px]">
        <div className="flex items-center justify-between font-medium text-[18px] text-edblue mb-[33px]">
          <span>Total</span>
          <span>$999</span>
        </div>
        <div className="space-y-[15px]">
          <a
            href="#"
            className="ed-btn w-full !rounded-[10px] !bg-transparent border border-edblue !text-edblue hover:!bg-edblue hover:!text-white"
          >
            Proceed to checkout
          </a>
          <a href="#" className="ed-btn w-full !rounded-[10px]">
            Proceed to checkout
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* search */}
  <div className="ed-search group">
    <form
      action="#"
      className="bg-white fixed z-[100] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[100px] md:h-[70px] xxs:h-[50px] w-[1224px] max-w-[95%] flex gap-[10px] rounded-full overflow-hidden px-[40px] xxs:px-[20px] pointer-events-none opacity-0 group-[.active]:pointer-events-auto group-[.active]:opacity-100 duration-[400ms]"
    >
      <input
        type="search"
        name="ed-search"
        placeholder="Search Here..."
        className="bg-transparent w-full focus:outline-none"
      />
      <button className="text-[25px] md:text-[22px] xxs:text-[20px]">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  </div>
  {/* sidebar */}
  <div className="ed-sidebar">
    <div className="translate-x-[100%] transition-transform ease-linear duration-300 fixed right-0 w-full max-w-[25%] xl:max-w-[30%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[60%] xxs:max-w-full bg-white h-full z-[100] overflow-auto">
      {/* heading */}
      <div className="ed-sidebar-heading p-[20px] lg:p-[20px] border-b border-edgray/20">
        <div className="logo flex justify-between items-center">
          <a href="index-2.html">
            <img src="assets/img/logo.png" alt="logo" />
          </a>
          <button
            type="button"
            className="ed-sidebar-close-btn border border-edgray/20 w-[45px] aspect-square shrink-0 text-black text-[22px] rounded-full hover:text-edpurple"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div className="ed-header-nav-in-mobile" />
    </div>
  </div>
  {/* HEADER SECTION START */}
  <header className="bg-edblue ed-header--2 relative z-[2] px-[7.9%] xxxxl:px-[6.5%] xxxl:px-[1%] lg:px-[15px] py-[25px] xxs:py-[16px] flex items-center justify-between to-be-fixed">
    <div className="logo xxs:max-w-[40%]">
      <a href="index-2.html">
        <img src="assets/img/Plasaent Logo.png" style={{backgroundColor:'whitesmoke'}} alt="logo" className="logo" />
      </a>
    </div>
    <div className="flex lg:items-center lg:gap-[30px]">
      <div className="flex lg:flex-col items-center gap-[60px] xxl:gap-[25px] xl:gap-[30px] md:gap-y-[15px]">
        {/* search form */}
        <form
          action="#"
          className="to-go-to-sidebar-in-mobile max-w-[455px] xxl:max-w-[395px] lg:max-w-[95%] lg:mx-auto border border-white/20 lg:border-black/20 rounded-[6px] overflow-hidden h-[60px] flex xl:hidden lg:flex lg:my-[10px]"
        >
          <input
            type="text"
            name="search"
            id="ed-2-header-search"
            className="w-full bg-transparent px-[20px] text-white lg:text-black focus:outline-0 focus-visible:outline-none"
          />
          <button type="submit" className="text-white lg:text-black pr-[20px]">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
        {/* nav */}
        <ul className="to-go-to-sidebar-in-mobile ed-header-nav flex lg:flex-col gap-x-[43px] xxl:gap-x-[33px] font-kanit text-[17px] font-normal">
          <li className="has-sub-menu relative">
            <a role="button">Explore Courses</a>
          </li>
          <li>
            <a href="#">Top Colleges</a>
          </li>
          <li className="has-sub-menu relative">
            <a role="button">More</a>
            <ul className="ed-header-submenu" style={{textAlign:"left"}}>
              <li>
                <a href="#">Tie Up/Partner</a>
              </li>
              <li>
                <a href="#">Jobs & Placement</a>
              </li>
              <li>
                <a href="#">Add Your College/University</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Q&As</a>
              </li>
              <li>
                <a href="#">Free Resources</a>
              </li>
              <li>
                <a href="#">Best Course for You(AI-Powered)</a>
              </li>
              <li>
                <a href="#">Profile Sync with Placement.com</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          {/* <li className="has-sub-menu relative">
            <a role="button">Courses</a>
            <ul className="ed-header-submenu">
              <li>
                <a href="course-grid.html">Courses Grid</a>
              </li>
              <li>
                <a href="course-filter.html">Courses Filter</a>
              </li>
              <li>
                <a href="course-details.html">Course Details</a>
              </li>
            </ul>
          </li>
          <li className="has-sub-menu relative">
            <a role="button">Pages</a>
            <ul className="ed-header-submenu">
              <li>
                <a href="teachers.html">Teachers</a>
              </li>
              <li>
                <a href="teacher-details.html">Teacher Details</a>
              </li>
              <li>
                <a href="events.html">Events</a>
              </li>
              <li>
                <a href="events-2.html">Events V.2</a>
              </li>
              <li>
                <a href="event-details.html">Event Details</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon Page</a>
              </li>
              <li>
                <a href="404.html">Error 404</a>
              </li>
            </ul>
          </li>
          <li className="has-sub-menu relative">
            <a role="button">News</a>
            <ul className="ed-header-submenu">
              <li>
                <a href="news-grid.html">News Grid</a>
              </li>
              <li>
                <a href="news-list.html">News List</a>
              </li>
              <li>
                <a href="news-details.html">News Details</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact us</a>
          </li> */}
        </ul>
        {/* right actions */}
        <div className="flex items-center gap-x-[60px] xxl:gap-x-[25px] lg:gap-x-[20px]">

          {/* <button className="ed-cart-opener-btn group">
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M12.9894 13.6354H6.93871C6.06616 13.6354 5.2925 13.0682 5.05637 12.2557L3.01122 5.38995C2.93856 5.14134 2.69705 4.97072 2.42122 4.97072H0.818742C0.446713 4.97072 0.145996 4.67212 0.145996 4.30421C0.145996 3.93629 0.446713 3.6377 0.818742 3.6377H2.42122C3.29377 3.6377 4.06676 4.2049 4.30289 5.01737L4.68568 6.30374H14.9753C15.3951 6.30374 15.7934 6.50169 16.0403 6.83361C16.2852 7.16287 16.3558 7.57477 16.234 7.96402L14.8462 12.3283C14.5744 13.1161 13.8296 13.6354 12.9894 13.6354Z"
                  className="fill-white group-hover:fill-edyellow"
                />
                <path
                  d="M7.54617 16.9687C6.80414 16.9687 6.20068 16.3707 6.20068 15.6353C6.20068 14.9 6.80414 14.302 7.54617 14.302C8.28821 14.302 8.89167 14.9 8.89167 15.6353C8.89167 16.3707 8.28821 16.9687 7.54617 16.9687Z"
                  className="fill-white group-hover:fill-edyellow"
                />
                <path
                  d="M12.2556 16.9687C11.5136 16.9687 10.9102 16.3707 10.9102 15.6353C10.9102 14.9 11.5136 14.302 12.2556 14.302C12.9977 14.302 13.6011 14.9 13.6011 15.6353C13.6011 16.3707 12.9977 16.9687 12.2556 16.9687Z"
                  className="fill-white group-hover:fill-edyellow"
                />
              </g>
            </svg>
          </button>
          <a
            href="contact.html"
            className="ed-btn to-go-to-sidebar-in-mobile lg:m-[20px]"
          >
            apply now
          </a> */}
        </div>
      </div>
      {/* mobile menu button */}
      <button
        type="button"
        className="ed-mobile-menu-open-btn hidden lg:inline-block text-white text-[18px] hover:text-edyellow"
      >
        <i className="fa-solid fa-bars" />
      </button>
    </div>
  </header>
  {/* HEADER SECTION END */}
  <main>
    {/* main content */}
    <div className="py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        {/* cover */}
        {/* <div className="rounded-[8px] overflow-hidden relative z-[2] before:absolute before:inset-0 before:-z-[0] before:bg-edpurple/20 mb-[40px] md:mb-[25px] xs:mb-[15px]">
          <img
            src="assets/img/course-details-img.jpg"
            alt="Course Cover"
            className="rounded-[8px] w-full aspect-[1170/552]"
          />
          <a
            href="https://www.youtube.com/watch?v=ht7vYtWOazI&pp=ygUPY291cnNlIG92ZXJ2aWV3"
            data-fslightbox=""
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[75px] xs:w-[65px] xxs:w-[60px] aspect-square bg-white rounded-full flex items-center justify-center text-[28px] text-edpurple hover:text-black before:absolute before:animate-borderFade before:-inset-[12px] before:border before:border-white before:rounded-full after:absolute after:animate-borderFade after:-inset-[5px] after:border after:border-white after:rounded-full"
          >
            <i className="fa-solid fa-play" />
          </a>
        </div> */}
        {/* txt */}
        <div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
          <div className="left max-w-full grow">
            <div>
              <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-edblue mb-[23px]">
                Amity University Online
              </h4>
              {/* course meta */}
              <div className="border-b border-[#E5E5E5] pb-[25px] flex xs:flex-wrap items-center gap-[60px] lg:gap-[40px] xs:gap-[20px] mb-[34px]">
                <div className="flex items-center gap-[10px] border-l border-[#CDCDCD] first:border-none pl-[10px] first:pl-0">
                  <div>
                    <h6 className="font-medium text-edblue leading-[1.2]">
                      Reviews
                    </h6>
                    <div className="flex gap-[7px] text-[#FFA41B] text-[14px] mt-[6px]">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star-half-stroke" />
                    </div>
                  </div>
                </div>
              </div>
              {/* tabs container */}
              <div>
                {/* tab navs  */}
                <div className="ed-course-details-tab-navs border border-[#E5E5E5] rounded-[10px] p-[20px] lg:p-[15px] flex gap-[16px] *:h-[56px] sm:*:h-[46px] *:rounded-[8px] *:flex-auto *:bg-edpurple/[06%] *:px-[20px] lg:*:px-[15px] *:font-semibold overflow-auto">
                  <button
                    className={`tab-nav ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => handleTabClick('overview')}
                    //data-tab="overview"
                    >
                 Overview
                  </button>
                  {/* <button 
                    className={`tab-nav ${activeTab === 'curriculum' ? 'active' : ''}`}
                    onClick={() => handleTabClick('curriculum')}
                   >
                    Curriculum
                    </button> */}
                  {/*
                  <button
                    className={`tab-nav ${activeTab === 'instructor' ? 'active' : ''}`}
                    onClick={() => handleTabClick('instructor')}
                   >
                    Instructor
                  </button>
                  <button 
                    className={`tab-nav ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => handleTabClick('reviews')}
                  >
                    Reviews
                  </button> */}
                </div>
                {/* tabs */}
                <div className="ed-course-details-tabs">
                  {/* tab 01 */}
                  {activeTab === 'overview' && (
                  <div id="overview" className="ed-tab duration-[400ms] active">
                    <div>
                      <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-edblue mt-[28px] mb-[15px]">
                        About Amity University Online
                      </h4>
                      <div className="space-y-[10px]">
                        <p className="text-edgray">
                         At Amity we are passionate about grooming leaders 
                         who are not only thorough professionals but also good human beings with values and sanskars.
                        </p>
                        <p className="text-edgray">
                        At Amity we benchmark only against the best institutions around the world. Our faculty and senior team travel all over the globe to learn and imbibe the best practices so that we can give a solid foundation for learning.

                         As part of this endeavour, we have air-conditioned amphitheatre style classrooms that provide the most conducive atmosphere for dynamic and focused discussions, while the libraries at our campus are equipped with over 1,00,000 books, periodicals, national and international journals, CD-ROMS, covering all aspects of academic studies and research material. The hi-tech labs act as ideal training grounds for budding professionals that allow students to experiment and bring to practice what they have learnt in theory.
                         <h1 style={{fontSize:'52px',textAlign:"center"}}>Comming Soon</h1>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-edblue mt-[28px] mb-[15px]">
                       
                      </h4>
                      <div className="space-y-[10px]">
                        <p className="text-edgray">
                
                        </p>
                      </div>
                    </div>
                  </div>
                  )}
                  {/* tab 02 */}
                  {activeTab === 'curriculum' && (
                  <div id="curriculum" className="ed-tab duration-[400ms]">
                     <h1 Comming Soon/>
                    <div className="mb-[10px]">
                      <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-edblue mt-[28px] mb-[15px]">
                        Course Curriculum
                      </h4>
                      <div className="space-y-[10px]">
                        <p className="text-edgray">
                          Consectetur adipisicing elit, sed do eiusmod tempor is
                          incididunt ut labore et dolore of magna aliqua. Ut
                          enim ad minim veniam, made of owl the quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          dolor commodo consequat. Duis aute irure and dolor in
                          reprehenderit.
                        </p>
                      </div>
                    </div>
                    {/* curriculum #1 */}
                    <div className="mt-[32px]">
                      <h5 className="font-semibold text-[20px] text-edblue mb-[16px]">
                        Subjects/Courses
                      </h5>
                      <div className="space-y-[12px]">
                        {/* single curriculum */}
                        <div className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-edpurple/[6%] rounded-[8px]">
                          {/* left */}
                          <div className="flex items-center gap-[10px]">
                            <span>
                              <img
                                src="assets/img/icon/lesson-purple.svg"
                                alt="icon"
                              />
                            </span>
                            <span className="text-edblue">
                              Lessons 1: Introduction
                            </span>
                          </div>
                          {/* right */}
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[10px] bg-edpurple rounded-[2px] text-white px-[8px] py-[2.5px]">
                              Preview
                            </button>
                            <span className="icon">
                              <img src="assets/img/icon/checkmark.svg" alt="" />
                            </span>
                          </div>
                        </div>
                        {/* single curriculum */}
                        <div className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-edpurple/[6%] rounded-[8px]">
                          {/* left */}
                          <div className="flex items-center gap-[10px]">
                            <span>
                              <img
                                src="assets/img/icon/lesson-purple.svg"
                                alt="icon"
                              />
                            </span>
                            <span className="text-edblue">
                              Lessons 2: Basic Tool
                            </span>
                          </div>
                          {/* right */}
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[10px] bg-edyellow rounded-[2px] text-white px-[8px] py-[2.5px]">
                              7 Minutes
                            </button>
                            <span className="icon">
                              <img src="assets/img/icon/lock.svg" alt="" />
                            </span>
                          </div>
                        </div>
                        {/* single curriculum */}
                        <div className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-edpurple/[6%] rounded-[8px]">
                          {/* left */}
                          <div className="flex items-center gap-[10px]">
                            <span>
                              <img
                                src="assets/img/icon/lesson-purple.svg"
                                alt="icon"
                              />
                            </span>
                            <span className="text-edblue">
                              Lessons 3: Images optimizes
                            </span>
                          </div>
                          {/* right */}
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[10px] bg-edyellow rounded-[2px] text-white px-[8px] py-[2.5px]">
                              18 Minutes
                            </button>
                            <span className="icon">
                              <img src="assets/img/icon/lock.svg" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* curriculum #2 */}
                    <div className="mt-[32px]">
                      <h5 className="font-semibold text-[20px] text-edblue mb-[16px]">
                        Advanced Topic
                      </h5>
                      <div className="space-y-[12px]">
                        {/* single curriculum */}
                        <div className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-edpurple/[6%] rounded-[8px]">
                          {/* left */}
                          <div className="flex items-center gap-[10px]">
                            <span>
                              <img
                                src="assets/img/icon/lesson-purple.svg"
                                alt="icon"
                              />
                            </span>
                            <span className="text-edblue">
                              Lessons 4: Color Selection
                            </span>
                          </div>
                          {/* right */}
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[10px] bg-edyellow rounded-[2px] text-white px-[8px] py-[2.5px]">
                              7 Minutes
                            </button>
                            <span className="icon">
                              <img src="assets/img/icon/checkmark.svg" alt="" />
                            </span>
                          </div>
                        </div>
                        {/* single curriculum */}
                        <div className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-edpurple/[6%] rounded-[8px]">
                          {/* left */}
                          <div className="flex items-center gap-[10px]">
                            <span>
                              <img
                                src="assets/img/icon/lesson-purple.svg"
                                alt="icon"
                              />
                            </span>
                            <span className="text-edblue">
                              Lessons 5: Typography
                            </span>
                          </div>
                          {/* right */}
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[10px] bg-edyellow rounded-[2px] text-white px-[8px] py-[2.5px]">
                              7 Minutes
                            </button>
                            <span className="icon">
                              <img src="assets/img/icon/lock.svg" alt="" />
                            </span>
                          </div>
                        </div>
                        {/* single curriculum */}
                        <div className="px-[16px] py-[14px] flex flex-wrap gap-[10px] items-center justify-between bg-edpurple/[6%] rounded-[8px]">
                          {/* left */}
                          <div className="flex items-center gap-[10px]">
                            <span>
                              <img
                                src="assets/img/icon/lesson-purple.svg"
                                alt="icon"
                              />
                            </span>
                            <span className="text-edblue">
                              Lessons 6: Template Design
                            </span>
                          </div>
                          {/* right */}
                          <div className="flex items-center gap-[10px]">
                            <button className="text-[10px] bg-edyellow rounded-[2px] text-white px-[8px] py-[2.5px]">
                              18 Minutes
                            </button>
                            <span className="icon">
                              <img src="assets/img/icon/lock.svg" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}
                  {/* tab 03 */}
                  {activeTab === 'instructor' && (
                  <div id="instructor" className="ed-tab duration-[400ms]">
                    <div className="flex sm:flex-col items-center md:items-start gap-x-[30px] gap-y-[15px] mt-[40px]">
                      <div className="img shrink-0">
                        <img
                          src="assets/img/teacher-2.jpg"
                          alt="team member image"
                          className="w-[270px] xxs:max-w-full aspect-[74/75] rounded-[12px]"
                        />
                      </div>
                      {/* txt */}
                      <div className="txt">
                        <h3 className="text-[22px] xxs:text-[20px] font-semibold">
                          Savannah Nguyen
                        </h3>
                        <h6 className="text-edgray font-medium text-[16px]">
                          Maths Teacher
                        </h6>
                        <p className="font-normal text-[16px] text-edgray mt-[9px]">
                          Adipiscing elit. Mauris viverra nisl quis mollis
                          laoreet. Ut eget lacus a felis accumsan pharetra in
                          dignissim enim. In amet odio mollis urna aliquet
                          volutpat. Sed
                        </p>
                        <ul className="infos border-y border-[#E5E5E5] mt-[21px] lg:mt-[18px] mb-[20px] py-[18px] lg:py-[14px] xs:py-[11px] flex flex-wrap gap-x-[40px] xl:gap-x-[20px] gap-y-[10px] text-[16px] text-etBlack">
                          <li className="text-[16px]">
                            <span className="font-medium text-edpurple">
                              Experience:
                            </span>{" "}
                            10 Years
                          </li>
                          <li className="text-[16px]">
                            <span className="font-medium text-edpurple">
                              Position:
                            </span>{" "}
                            Maths Teacher
                          </li>
                        </ul>
                        {/* social links */}
                        <div className="flex items-center gap-[16px]">
                          <h6 className="text-edpurple font-medium">
                            Social Media
                          </h6>
                          <div className="flex gap-[20px] text-[16px] text-edpurple">
                            <a href="#" className="hover:text-edblue">
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a href="#" className="hover:text-edblue">
                              <i className="fa-brands fa-instagram" />
                            </a>
                            <a href="#" className="hover:text-edblue">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                            <a href="#" className="hover:text-edblue">
                              <i className="fa-brands fa-x-twitter" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}
                  {/* tab 04 */}
                  <div id="reviews" className="ed-tab duration-[400ms]">
                    <div className="ed-course-details-review mt-[40px]">
                      <div className="review-overview flex xxs:flex-col gap-[22px] gap-y-[10px] items-center mb-[42px]">
                        {/* average rating area */}
                        <div className="average-rating-area text-center shrink-0">
                          <h3 className="font-medium text-[50px] leading-[0.7] mb-[14px]">
                            4.3
                          </h3>
                          <div className="star text-[#FDA92B] text-[11px]">
                            <i className="fa-solid fa-sharp fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star-half-stroke" />
                          </div>
                          <span className="rating-amount text-edgray text-[13px]">
                            2.33K reviews
                          </span>
                        </div>
                        {/* review-breakdown by each star  */}
                        <div className="review-breakdown grow xxs:w-full">
                          <ul className="individual-star-breakdown flex items-center gap-[15px]">
                            <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                              5
                            </li>
                            <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                              <div className="filled bg-[#FDA92B] rounded-[18px] absolute top-0 left-0 h-full w-[80%]" />
                            </li>
                          </ul>
                          <ul className="individual-star-breakdown flex items-center gap-[15px]">
                            <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                              4
                            </li>
                            <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                              <div className="filled bg-[#FDA92B] rounded-[18px] absolute top-0 left-0 h-full w-[90%]" />
                            </li>
                          </ul>
                          <ul className="individual-star-breakdown flex items-center gap-[15px]">
                            <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                              3
                            </li>
                            <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                              <div className="filled bg-[#FDA92B] rounded-[18px] absolute top-0 left-0 h-full w-[40%]" />
                            </li>
                          </ul>
                          <ul className="individual-star-breakdown flex items-center gap-[15px]">
                            <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                              2
                            </li>
                            <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                              <div className="filled bg-[#FDA92B] rounded-[18px] absolute top-0 left-0 h-full w-[30%]" />
                            </li>
                          </ul>
                          <ul className="individual-star-breakdown flex items-center gap-[15px]">
                            <li className="star w-[11px] shrink-0 font-kanit text-edgray text-[16px]">
                              1
                            </li>
                            <li className="bar bg-[#E8EAED] max-w-full w-full h-[12px] rounded-full relative">
                              <div className="filled bg-[#FDA92B] rounded-[18px] absolute top-0 left-0 h-full w-[5%]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* reviews */}
                      <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] mb-[28px]">
                        Reviews
                      </h4>
                      <div className="user-reviews space-y-[30px]">
                        {/* single review */}
                        <div className="et-event-details-review flex xxs:flex-col items-start gap-[15px] pb-[30px] border-b border-[#e5e5e5] last:border-none last:pb-0">
                          <div className="user-img rounded-full overflow-hidden w-[60px] h-[60px] shrink-0">
                            <img
                              src="assets/img/instructor-2.jpg"
                              alt="user"
                              className="object-cover w-full max-w-full max-h-full"
                            />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-[9px]">
                              <div className="user-info">
                                <h5 className="user-name font-semibold text-[18px] mb-[4px]">
                                  Ronald Richards
                                </h5>
                                <h6 className="text-edgray">
                                  February 10, 2024 at 2:37 pm
                                </h6>
                              </div>
                              <div className="review-rating flex gap-[7px] text-[14px] text-[#FFA41B] shrink-0">
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                              </div>
                            </div>
                            <div className="review">
                              <p className="text-edgray leading-[1.8]">
                                Aenean blandit justo ac rutrum hendrerit.
                                Vivamus ultrices vulputate ante eget convallis.
                                Donec id ex ut tellus blandit aliquet. Morbi
                                varius
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* single review */}
                        <div className="et-event-details-review flex xxs:flex-col items-start gap-[15px] pb-[30px] border-b border-[#e5e5e5] last:border-none last:pb-0">
                          <div className="user-img rounded-full overflow-hidden w-[60px] h-[60px] shrink-0">
                            <img
                              src="assets/img/user-2.png"
                              alt="user"
                              className="object-cover w-full max-w-full max-h-full"
                            />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-[9px]">
                              <div className="user-info">
                                <h5 className="user-name font-semibold text-[18px] mb-[4px]">
                                  Eliza nolan
                                </h5>
                                <h6 className="text-edgray">
                                  February 10, 2024 at 2:37 pm
                                </h6>
                              </div>
                              <div className="review-rating flex gap-[7px] text-[14px] text-[#FFA41B] shrink-0">
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                                <i className="fa-solid fa-sharp fa-star" />
                              </div>
                            </div>
                            <div className="review">
                              <p className="text-edgray leading-[1.8]">
                                Aenean blandit justo ac rutrum hendrerit.
                                Vivamus ultrices vulputate ante eget convallis.
                                Donec id ex ut tellus blandit aliquet. Morbi
                                varius
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Review Form BLOCK */}
              {activeTab === 'reviews' && (
              <div className="mt-[50px]">
                <h5 className="font-semibold text-[22px] text-edblue mb-[17px]">
                  Write a Review
                </h5>
                <div className="flex gap-[7px] text-[14px] text-[#FFA319] mb-[14px]">
                  <button>
                    <i className="fa-regular fa-star" />
                  </button>
                  <button>
                    <i className="fa-regular fa-star" />
                  </button>
                  <button>
                    <i className="fa-regular fa-star" />
                  </button>
                  <button>
                    <i className="fa-regular fa-star" />
                  </button>
                  <button>
                    <i className="fa-regular fa-star" />
                  </button>
                </div>
                <form
                  action="#"
                  className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] xs:gap-[20px] text-[16px]"
                >
                  <div>
                    <label
                      htmlFor="ed-course-review-name"
                      className="font-lato font-semibold text-edblue block mb-[12px]"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="ed-course-review-name"
                      placeholder="Your Name"
                      className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ed-course-review-email"
                      className="font-lato font-semibold text-edblue block mb-[12px]"
                    >
                      Your Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="ed-course-review-email"
                      placeholder="Your Email"
                      className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2 xxs:col-span-1">
                    <label
                      htmlFor="ed-course-review-message"
                      className="font-lato font-semibold text-edblue block mb-[12px]"
                    >
                      Your Message*
                    </label>
                    <textarea
                      name="message"
                      id="ed-course-review-message"
                      placeholder="Your Message"
                      className="border border-[#ECECEC] h-[145px] p-[20px] rounded-[4px] w-full focus:outline-none"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-edpurple h-[55px] px-[24px] rounded-[10px] text-[16px] font-medium text-white hover:bg-edblue"
                    >
                      Post Review{" "}
                      <span className="icon pl-[10px]">
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              )}
            </div>

         <div className="rounded-[8px] overflow-hidden relative z-[2] before:absolute before:inset-0 before:-z-[0] before:bg-edpurple/20 mb-[40px] md:mb-[25px] xs:mb-[15px]">
          <img
            src="assets/img/course-details-img.jpg"
            alt="Course Cover"
            className="rounded-[8px] w-full aspect-[1170/552]"
          />
          <a
            href="https://www.youtube.com/watch?v=ht7vYtWOazI&pp=ygUPY291cnNlIG92ZXJ2aWV3"
            data-fslightbox=""
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[75px] xs:w-[65px] xxs:w-[60px] aspect-square bg-white rounded-full flex items-center justify-center text-[28px] text-edpurple hover:text-black before:absolute before:animate-borderFade before:-inset-[12px] before:border before:border-white before:rounded-full after:absolute after:animate-borderFade after:-inset-[5px] after:border after:border-white after:rounded-full"
          >
            <i className="fa-solid fa-play" />
          </a>
        </div>

          </div>
          {/* right sidebar */}
          <div className="right h-full sticky top-[120px] max-w-full w-[370px] lg:w-[300px] shrink-0 space-y-[30px]">
            {/* COURSE INFORMATION */}
            <div className="border border-[#e5e5e5] rounded-[10px] px-[30px] lg:px-[20px] xxs:px-[15px] py-[35px] lg:py-[25px] xxs:py-[25px]">
              <h5 className="font-semibold text-[24px] text-edblue mb-[20px]">
                About College
              </h5>
              <ul className="mb-[30px]">
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img
                        src="assets/img/icon/calender-purple.svg"
                        alt="icon"
                      />
                    </span>
                    <span>Rating:</span>
                  </span>
                  <span className="text-[15px] text-edgray">4 Out of 5</span>
                </li>
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img src="assets/img/icon/clock-purple.svg" alt="icon" />
                    </span>
                    <span>Ranking:</span>
                  </span>
                  <span className="text-[15px] text-edgray">6</span>
                </li>
              </ul>
              <div className="space-y-[12px]">
                <button className="ed-btn !h-[56px] !rounded-[8px] w-full !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white">
                  Talk to University
                </button>
                <a
                  href="#"
                  className="ed-btn gap-[10px] !h-[56px] !rounded-[8px] w-full"
                >
                  Apply to University{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>
              {/* social links */}
              <div className="flex gap-[28px] items-center justify-center mt-[22px]">
                <h6 className="font-semibold text-[16px] text-black">Share:</h6>
                <div className="flex gap-[15px] text-[16px]">
                  <a href="#" className="text-[#757277] hover:text-edpurple">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#" className="text-[#757277] hover:text-edpurple">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#" className="text-[#757277] hover:text-edpurple">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#" className="text-[#757277] hover:text-edpurple">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* FOOTER SECTION START */}
  <footer className="bg-edblue relative z-[1] before:absolute before:inset-0 before:-z-[1] before:bg-[url('assets/img/footer-bg.jpg')] before:opacity-[7%] before:bg-no-repeat before:bg-cover before:bg-center text-white">
    <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
      {/* footer top */}
      <div className="flex flex-wrap justify-between gap-[35px] pt-[100px] pb-[58px] border-b border-white/20">
        {/* footer about */}
        <div className="max-w-[370px] xxs:max-w-full">
          <a href="index-2.html" className="inline-block mb-[23px]">
            <img src="assets/img/Plasaent Logo.png" style={{backgroundColor:'whitesmoke'}} alt="logo" />
          </a>
          <p className="text-[#D9D9D9] mb-[19px]">
             GET THE RIGHT GUIDENCE WITH US
          </p>
          <ul className="space-y-[17px]">
            <li className="flex items-center gap-[8px]">
              <span className="icon">
                <img src="assets/img/call-icon-yellow.svg" alt="icon" />
              </span>
              <a href="tel:+6108-666-0112" className="hover:text-edyellow">
                +6108-666-0112
              </a>
            </li>
            <li className="flex items-center gap-[8px]">
              <span className="icon">
                <img src="assets/img/message-yellow.svg" alt="icon" />
              </span>
              <a href="mailto:info@gmail.com" className="hover:text-edyellow">
                info@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* footer widget */}
        <div>
          <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">
            Online & Distance MBA
          </h6>
          <div className="space-y-[18px]">
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Finance
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              HR
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Marketing
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              General
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Business Analytics
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Operations
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Information Technology
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Logistics And Supply Chain (Dual)
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Healthcare Management
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Production and Operation (Dual)
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Data Science and Analytics (Dual)
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Data Science
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Project Management
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Retail Management
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              View All
            </a>
          </div>
          <br/><br/>

          <div>
          <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">
            Online & Distance Best College for
          </h6>
          <div className="space-y-[18px]">
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for Online MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for Executive MBA for Working
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Professionals
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for Online Global MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for 1 Year MBA Online 
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              View All
            </a>
          </div>
        </div>
        </div>
        <div>
          <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">
            Online & Distance UG Courses
          </h6>
          <div className="space-y-[18px]">
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online BCA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online BBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online B.Com
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              B.Tech for Working Professionals
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online MBA after Diploma
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online BA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online B.Sc
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Distance BCA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Distance BBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online BBA Dual
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online B.Com Honours
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Distance B.Com
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              B.Tech After Diploma
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Part-Time B.Tech
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              View All
            </a>
          </div>
        
          <br/><br/>

          <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">
            Online & Distance PG Courses
          </h6>
          <div className="space-y-[18px]">
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Executive MBA for Working Professionals
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online Global MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              1 Year MBA Online
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Dual MBA Online
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online MCA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online MA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              M.Tech
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online M.Com
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online M.Sc
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online MBA Plus
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Distance MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online PG Diploma & Certificate
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Online PGDM
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              View All
            </a>
          </div>
 
        </div>
        {/* footer widget */}
        {/* <div>
          <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">
            Online & Distance Best College for
          </h6>
          <div className="space-y-[18px]">
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for Online MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for Executive MBA for Working
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Professionals
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for Online Global MBA
            </a>
            <a
              href="#"
              className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"
            >
              <span className="icon">
                <img src="assets/img/double-arrow.svg" alt="icon" />
              </span>{" "}
              Best Colleges for 1 Year MBA Online 
            </a>
          </div>
        </div> */}
        {/* footer widget */}
      </div>
      {/* footer bottom */}
      <div className="flex flex-wrap items-center justify-between gap-[15px] pt-[20px] pb-[50px] text-[#d9d9d9]">
        <p>© All Copyright 2024 by Vagonon</p>
        <div className="flex flex-wrap gap-[40px] xxs:gap-[15px]">
          <a href="#" className="hover:text-edyellow">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-edyellow">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
  {/* FOOTER SECTION END */}
</>



  )
}


export default CollegeDetail;
