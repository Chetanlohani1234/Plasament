import React,{useState} from 'react'

const CourseDetail = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
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
                The Complete Graphic Design for Beginners
              </h4>
              {/* course meta */}
              <div className="border-b border-[#E5E5E5] pb-[25px] flex xs:flex-wrap items-center gap-[60px] lg:gap-[40px] xs:gap-[20px] mb-[34px]">
                {/* single info */}
                <div className="flex items-center gap-[10px] border-l border-[#CDCDCD] first:border-none pl-[10px] first:pl-0">
                  <img
                    src="assets/img/teacher-2.jpg"
                    alt="Course Instructor"
                    className="w-[52px] aspect-square rounded-full object-cover"
                  />
                  <div>
                    <h6 className="font-medium text-edblue leading-[1.2]">
                      Jane Cooper
                    </h6>
                    <span className="font-medium text-[14px] text-edgray leading-[1]">
                      Teacher
                    </span>
                  </div>
                </div>
                {/* single info */}
                <div className="flex items-center gap-[10px] border-l border-[#CDCDCD] first:border-none pl-[10px] first:pl-0">
                  <div>
                    <h6 className="font-medium text-edblue leading-[1.2]">
                      Categories
                    </h6>
                    <span className="font-medium text-[14px] text-edgray leading-[1]">
                      Online Teaching
                    </span>
                  </div>
                </div>
                {/* single info */}
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
                  {/* <button className="tab-nav active" data-tab="overview">
                    Overview
                  </button> */}
                        <button
                            className="hover:bg-edpurple hover:text-white"
                            onClick={() => handleFilterClick('overview')}
                            //data-filter="all"
                        >
                            Overview
                        </button>
                        <button
                            className="hover:bg-edpurple hover:text-white"
                            
                            onClick={() =>{
                                console.log('Button clicked');
                                handleFilterClick('curriculum')}
                            } 
                            //data-filter="all"
                        >
                            Curriculum
                        </button>
                        <button
                            className="hover:bg-edpurple hover:text-white"
                            onClick={() => handleFilterClick('instructor')}
                            //data-filter="all"
                        >
                            Instructor
                        </button>
                        <button
                            className="hover:bg-edpurple hover:text-white"
                            onClick={() => handleFilterClick('reviews')}
                            //data-filter="all"
                        >
                            Reviews
                        </button>
                </div>
                {/* tabs */}
                <div className="ed-course-details-tabs">
                  {/* tab 01 */}
                  {(activeFilter === 'all' || activeFilter === 'overview') && (
                  <div id="overview" className="ed-tab duration-[400ms] active">
                    <div>
                      <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-edblue mt-[28px] mb-[15px]">
                        Course Descriptions
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
                        <p className="text-edgray">
                          The is ipsum dolor sit amet consectetur adipiscing
                          elit. Fusce eleifend porta arcu In hac augu ehabitasse
                          the is platea augue thelorem turpoi dictumst. In lacus
                          libero faucibus at malesuada sagittis placerat eros
                          sed istincidunt augue ac ante rutrum sed the is
                          sodales augue consequat.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[30px] lg:text-[27px] xs:text-[25px] xxs:text-[23px] text-edblue mt-[28px] mb-[15px]">
                        Requirements for The Course
                      </h4>
                      <div className="space-y-[10px]">
                        <p className="text-edgray">
                          Nulla facilisi. Vestibulum tristique sem in eros
                          eleifend imperdiet. Donec quis convallis neque. In id
                          lacus pulvinar lacus, eget vulputate lectus. Ut
                          viverra bibendum lorem, at tempus nibh mattis in. Sed
                          a massa eget lacus consequat auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                  )}
                  {/* tab 02 */}
                  {(activeFilter === 'curriculum') && (
                  <div id="curriculum" className="ed-tab duration-[400ms] active">
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
                  {(activeFilter === 'instructor') && (
                  <div id="instructor" className="ed-tab duration-[400ms] active">
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
                  {(activeFilter === 'reviews') && (
                  <div id="reviews" className="ed-tab duration-[400ms] active">
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
                  )}
                </div>
              </div>
              {/* Review Form BLOCK */}
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
            </div>
          </div>
          {/* right sidebar */}
          <div className="right h-full sticky top-[120px] max-w-full w-[370px] lg:w-[300px] shrink-0 space-y-[30px]">
            {/* COURSE INFORMATION */}
            <div className="border border-[#e5e5e5] rounded-[10px] px-[30px] lg:px-[20px] xxs:px-[15px] py-[35px] lg:py-[25px] xxs:py-[25px]">
              <h5 className="font-semibold text-[24px] text-edblue mb-[20px]">
                Course includes:
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
                    <span>Level:</span>
                  </span>
                  <span className="text-[15px] text-edgray">Beginner</span>
                </li>
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img src="assets/img/icon/clock-purple.svg" alt="icon" />
                    </span>
                    <span>Duration:</span>
                  </span>
                  <span className="text-[15px] text-edgray">6 Months</span>
                </li>
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img src="assets/img/icon/lesson-purple.svg" alt="icon" />
                    </span>
                    <span>Lessons:</span>
                  </span>
                  <span className="text-[15px] text-edgray">12</span>
                </li>
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img
                        src="assets/img/icon/user-group-purple.svg"
                        alt="icon"
                      />
                    </span>
                    <span>Students:</span>
                  </span>
                  <span className="text-[15px] text-edgray">120</span>
                </li>
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img src="assets/img/icon/medal.svg" alt="icon" />
                    </span>
                    <span>Certifications:</span>
                  </span>
                  <span className="text-[15px] text-edgray">Yes</span>
                </li>
                <li className="py-[15px] flex flex-wrap gap-[10px] items-center justify-between border-t border-[#e5e5e5] last:border-b">
                  <span className="flex items-center gap-[8px] font-semibold text-edblue">
                    <span className="icon">
                      <img src="assets/img/icon/globe.svg" alt="icon" />
                    </span>
                    <span>Language:</span>
                  </span>
                  <span className="text-[15px] text-edgray">English</span>
                </li>
              </ul>
              <div className="space-y-[12px]">
                <button className="ed-btn !h-[56px] !rounded-[8px] w-full !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white">
                  Add to cart
                </button>
                <a
                  href="#"
                  className="ed-btn gap-[10px] !h-[56px] !rounded-[8px] w-full"
                >
                  Join this Course{" "}
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

        {/* CTA SECTION START */}
        <section className="ed-2-cta overflow-hidden bg-edpurple pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(../assets/img/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]" style={{marginBottom:'50px',height:'20%'}}>
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

  </main>
</>

  )
}

export default CourseDetail;
