import React from 'react'

const About = () => {
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
    {/* BREADCRUMB SECTION START */}
    <section className="pt-[327px] xl:pt-[287px] lg:pt-[237px] sm:pt-[200px] xxs:pt-[180px] pb-[158px] xl:pb-[118px] lg:pb-[98px] sm:pb-[68px] xs:pb-[48px] text-center bg-[url('assets/img/breadcrumb-bg.jpg')] bg-no-repeat bg-cover bg-center relative z-[1] overflow-hidden before:absolute before:-z-[1] before:inset-0 before:bg-edblue/70 before:pointer-events-none">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <h1 className="font-semibold text-[clamp(35px,6vw,56px)] text-white">
          About us
        </h1>
        <ul className="flex items-center justify-center gap-[10px] text-white">
          <li>
            <a href="index-2.html" className="text-edyellow">
              Home
            </a>
          </li>
          <li>
            <span className="text-[12px]">
              <i className="fa-solid fa-angle-double-right" />
            </span>
          </li>
          <li>About us</li>
        </ul>
      </div>
      <div className="vectors">
        <img
          src="assets/img/breadcrumb-vector-1.svg"
          alt="vector"
          className="absolute -z-[1] pointer-events-none bottom-[34px] left-0 xl:left-auto xl:right-[90%]"
        />
        <img
          src="assets/img/breadcrumb-vector-2.svg"
          alt="vector"
          className="absolute -z-[1] pointer-events-none bottom-0 right-0 xl:right-auto xl:left-[60%]"
        />
      </div>
    </section>
    {/* BREADCRUMB SECTION END */}
    {/* ABOUT SECTION START */}
    <section className="py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <div className="flex sm:flex-col items-start justify-between gap-[15px]">
          <h2 className="ed-section-title">About the Pure Professional</h2>
          <div className="max-w-[50%] sm:max-w-full mb-[60px]">
            <p className="text-edgray2 mb-[25px]">
              lobortis. Nullam sollicitudin velit ut rhoncus cursus. Proin eu
              ligula non quam facilisis pellentesque eget in lorem. Ut pharetra
              velit arcu, eu blandit justo blandit eu. Vestibulum id consequat.
            </p>
            <a
              href="#"
              className="font-medium text-edpurple inline-flex items-center gap-[10px] border-b border-edpurple"
            >
              Overview{" "}
              <span className="icon">
                <img src="assets/img/icon/arrow-up-right.svg" alt="icon" />
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:w-[10%] xxs:w-[5%]">
            <img
              src="assets/img/about-inner-img.jpg"
              alt="About image"
              className="w-[633px] max-w-[633px] sm:max-w-[308px] aspect-[633/431px]"
            />
          </div>
          <div className="md:w-[90%] xxs:w-[95%]">
            <div className="bg-white p-[50px] lg:p-[30px] xxs:p-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)] -ml-[92px] xl:-ml-[134px] lg:-ml-[278px] md:ml-0">
              <h6 className="font-semibold uppercase text-edpurple relative z-[1] pl-[40px] mb-[10px] before:absolute before:left-0 before:top-[50%] before:-translate-y-[50%] before:h-[1px] before:w-[30px] before:bg-edpurple">
                About Edutics
              </h6>
              <h4 className="font-semibold text-[30px] md:text-[26px] xs:text-[22px] leading-[1.2] mb-[26px]">
                WE SUPPORT YOUR AMBITION
              </h4>
              <ul className="ed-inner-about-list font-medium text-[16px] text-edgray grid grid-cols-[repeat(2,max-content)] xs:grid-cols-1 gap-x-[30px] xxs:gap-x-[15px] gap-y-[9px] mb-[37px] *:pl-[25px] *:relative *:before:absolute *:before:left-0 *:before:top-[4px] *:before:w-[15px] *:before:aspect-square *:before:bg-[url(../assets/img/icon/checkmark.svg)] *:before:bg-no-repeat *:before:bg-[length:15px_13px] *:before:bg-center">
                <li>Request a prospectus</li>
                <li>Book an Open Day</li>
                <li>Our core Services</li>
                <li>Pro Bono</li>
              </ul>
              <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[20px]">
                <div className="flex gap-x-[8px]">
                  <div className="rounded-full overflow-hidden w-[58px] aspect-square shrink-0">
                    <img
                      src="assets/img/user.png"
                      alt="Principal"
                      className="w-[58px] aspect-square"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[18px] text-black mb-[4px]">
                      Ronald Richards
                    </h5>
                    <h6 className="text-edgray">
                      Principal <span className="text-edpurple">Edutics</span>
                    </h6>
                  </div>
                </div>
                <a href="contact.html" className="ed-btn gap-[10px]">
                  message principal{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ABOUT SECTION END */}
    {/* EMPLOYABILITY SECTION START */}
    <section className="bg-[#FAF9F6] relative z-[1] overflow-hidden">
      <div className="flex lg:flex-col items-end gap-[130px] xxxl:gap-[100px] xxl:gap-[60px] lg:gap-y-0 ml-[19.5%] xxxl:ml-[14.71%] xxl:ml-[9.71%] xl:ml-[5.71%] lg:mx-[5.71%] md:mx-[12px]">
        {/* left / text */}
        <div className="py-[120px] xl:py-[80px] md:py-[60px]">
          <h6 className="ed-section-sub-title">employability</h6>
          <h2 className="ed-section-title mb-[28px]">
            the next level of coaching education
          </h2>
          <p className="text-edgray mb-[11px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor.
          </p>
          <h6 className="font-semibold text-[18px] text-[#002147] mb-[23px] relative pl-[30px] before:absolute before:bg-edyellow before:w-[20px] before:h-[2px] before:left-0 before:top-[50%] before:-translate-y-[50%]">
            We provide the best success opportunities
          </h6>
          <ul className="ed-inner-about-list font-medium text-[16px] text-black grid grid-cols-2 xxs:grid-cols-1 gap-x-[30px] xxs:gap-x-[15px] gap-y-[9px] mb-[46px] *:pl-[25px] *:relative *:before:absolute *:before:left-0 *:before:top-[4px] *:before:w-[15px] *:before:aspect-square *:before:bg-[url(../assets/img/icon/checkmark.svg)] *:before:bg-no-repeat *:before:bg-[length:15px_13px] *:before:bg-center">
            <li>Our Employment Promise</li>
            <li>Our Programmers</li>
            <li>Expert mentors</li>
            <li>Lifetime Access</li>
          </ul>
          <a
            href="#"
            className="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white"
          >
            Apply Now
          </a>
        </div>
        {/* right / img / form */}
        <div className="relative shrink-0 xxxl:max-w-[55%] lg:max-w-full">
          <img
            src="assets/img/employability-img.jpg"
            alt="image"
            className="min-h-[280px]"
          />
          <div className="absolute bottom-0 text-white p-[40px] xs:p-[20px] bg-white/5 backdrop-blur-[13.5914px] w-full shadow-[0_12px_16px_-4px_rgba(30,41,59,0.04),0_4px_6px_-2px_rgba(30,41,59,0.1)]">
            <h4 className="font-semibold text-[30px] xs:text-[26px] xxs:text-[22px] mb-[12px]">
              Find A career that suits you
            </h4>
            <form action="#">
              <label
                htmlFor="career-interest"
                className="text-[15px] font-medium inline-block mb-[10px]"
              >
                Choose a Career Interest
              </label>
              <div className="flex xxs:flex-col gap-[15px]">
                <input
                  type="text"
                  name="career-interest"
                  id="career-interest"
                  placeholder="Select career interest"
                  className="bg-transparent border border-white rounded-[4px] p-[15px] w-full focus:outline-none placeholder:text-white/80"
                />
                <button
                  type="submit"
                  className="ed-btn !h-[56px] shrink-0 !rounded-[4px]"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* vector */}
      <img
        src="assets/img/employability-vector.svg"
        alt="vector"
        className="absolute -z-[1] bottom-[186px] left-[37px] pointer-events-none"
      />
    </section>
    {/* EMPLOYABILITY SECTION END */}
    {/* PROGRAMS SECTION START */}
    <section className="py-[120px] xl:py-[80px] md:py-[60px] ">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        {/* heading */}
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[15px] mb-[40px] xxs:mb-[30px]">
          <div className="left">
            <h6 className="ed-section-sub-title">programs</h6>
            <h2 className="ed-section-title">Graduate Programs</h2>
          </div>
          {/* nav */}
          <div className="ed-program-slider-nav flex gap-[15px] *:w-[56px] *:h-[56px] *:rounded-full *:border *:border-[#808080]/20 *:text-black *:text-[18px]">
            <button className="prev hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white">
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button className="next hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white">
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* slider */}
        <div className="ed-program-slider swiper">
          <div className="swiper-wrapper">
            {/* single program */}
            <div className="swiper-slide">
              {/* img */}
              <div className="mb-[30px]">
                <img src="assets/img/program-1.jpg" alt="image" />
              </div>
              {/* text */}
              <div>
                <span className="inline-flex items-center gap-[8px] px-[12px] py-[6px] border border-[#D4DCFF] rounded-[8px] text-[14px] font-medium text-edpurple mb-[11px]">
                  <span className="icon">
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3356 4.54352L11.3631 0.648906C10.6758 0.305264 9.50745 0.305264 8.82016 0.648906L0.664376 4.54352C0.0916381 4.81844 0 5.2079 0 5.41408C0 5.62027 0.0916381 5.98682 0.664376 6.28464L1.32875 6.60538V10.2709C0.91638 10.4313 0.618557 10.8436 0.618557 11.3018C0.618557 11.76 0.91638 12.1724 1.30584 12.3328L0.274914 15.6088H3.16151L2.13058 12.3328C2.54296 12.1724 2.81787 11.76 2.81787 11.3018C2.81787 10.8207 2.52005 10.4313 2.10767 10.2709V6.99484L3.32188 7.59049V12.3557C3.32188 12.4244 3.34479 12.4931 3.39061 12.5618C3.50515 12.6993 5.63574 15.6088 9.98854 15.6088C14.3414 15.6088 16.4719 12.6764 16.5636 12.5618C16.6094 12.4931 16.6323 12.4244 16.6323 12.3557V7.6134L19.3356 6.28464C19.9084 6.00973 20 5.62027 20 5.41408C19.9771 5.2079 19.9084 4.81844 19.3356 4.54352ZM15.8992 12.2411C15.5326 12.6993 13.5624 14.8986 9.98854 14.8986C6.41466 14.8986 4.44444 12.6993 4.07789 12.2411V7.91122L8.82016 10.1793C9.1638 10.3396 9.62199 10.4313 10.0802 10.4313C10.5613 10.4313 11.0195 10.3396 11.3631 10.1564L15.8992 7.93413V12.2411ZM19.0149 5.64318L16.2658 6.99484C16.1512 6.99484 16.0596 7.04066 16.0137 7.1323L11.0424 9.53779C10.5613 9.7898 9.62199 9.7898 9.11798 9.53779L3.00115 6.60538L10.0344 5.78064C10.2405 5.75773 10.378 5.57445 10.3551 5.39117C10.3322 5.18499 10.1489 5.04753 9.96564 5.07044L1.80985 6.03264L0.985109 5.64318C0.778923 5.55154 0.733104 5.43699 0.733104 5.43699C0.733104 5.41408 0.778923 5.32245 0.985109 5.23081L9.14089 1.31328C9.3929 1.19873 9.73654 1.13001 10.0802 1.13001C10.4467 1.13001 10.8133 1.19873 11.0424 1.31328L19.0149 5.2079C19.2211 5.29954 19.2669 5.39117 19.2669 5.43699C19.2669 5.43699 19.1982 5.55154 19.0149 5.64318Z"
                        className="fill-edpurple"
                      />
                    </svg>
                  </span>
                  <span>Business</span>
                </span>
                <h5 className="font-bold text-[22px] text-black mb-[7px]">
                  <a href="event-details.html" className="hover:text-edpurple">
                    Attentive was born in 2015 help
                  </a>
                </h5>
                <p className="text-edgray mb-[15px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <a
                  href="event-details.html"
                  className="inline-flex items-center gap-[10px] underline text-edpurple font-medium hover:text-edyellow"
                >
                  Read More{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>
            </div>
            {/* single program */}
            <div className="swiper-slide">
              {/* img */}
              <div className="mb-[30px]">
                <img src="assets/img/program-2.jpg" alt="image" />
              </div>
              {/* text */}
              <div>
                <span className="inline-flex items-center gap-[8px] px-[12px] py-[6px] border border-[#D4DCFF] rounded-[8px] text-[14px] font-medium text-edpurple mb-[11px]">
                  <span className="icon">
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3356 4.54352L11.3631 0.648906C10.6758 0.305264 9.50745 0.305264 8.82016 0.648906L0.664376 4.54352C0.0916381 4.81844 0 5.2079 0 5.41408C0 5.62027 0.0916381 5.98682 0.664376 6.28464L1.32875 6.60538V10.2709C0.91638 10.4313 0.618557 10.8436 0.618557 11.3018C0.618557 11.76 0.91638 12.1724 1.30584 12.3328L0.274914 15.6088H3.16151L2.13058 12.3328C2.54296 12.1724 2.81787 11.76 2.81787 11.3018C2.81787 10.8207 2.52005 10.4313 2.10767 10.2709V6.99484L3.32188 7.59049V12.3557C3.32188 12.4244 3.34479 12.4931 3.39061 12.5618C3.50515 12.6993 5.63574 15.6088 9.98854 15.6088C14.3414 15.6088 16.4719 12.6764 16.5636 12.5618C16.6094 12.4931 16.6323 12.4244 16.6323 12.3557V7.6134L19.3356 6.28464C19.9084 6.00973 20 5.62027 20 5.41408C19.9771 5.2079 19.9084 4.81844 19.3356 4.54352ZM15.8992 12.2411C15.5326 12.6993 13.5624 14.8986 9.98854 14.8986C6.41466 14.8986 4.44444 12.6993 4.07789 12.2411V7.91122L8.82016 10.1793C9.1638 10.3396 9.62199 10.4313 10.0802 10.4313C10.5613 10.4313 11.0195 10.3396 11.3631 10.1564L15.8992 7.93413V12.2411ZM19.0149 5.64318L16.2658 6.99484C16.1512 6.99484 16.0596 7.04066 16.0137 7.1323L11.0424 9.53779C10.5613 9.7898 9.62199 9.7898 9.11798 9.53779L3.00115 6.60538L10.0344 5.78064C10.2405 5.75773 10.378 5.57445 10.3551 5.39117C10.3322 5.18499 10.1489 5.04753 9.96564 5.07044L1.80985 6.03264L0.985109 5.64318C0.778923 5.55154 0.733104 5.43699 0.733104 5.43699C0.733104 5.41408 0.778923 5.32245 0.985109 5.23081L9.14089 1.31328C9.3929 1.19873 9.73654 1.13001 10.0802 1.13001C10.4467 1.13001 10.8133 1.19873 11.0424 1.31328L19.0149 5.2079C19.2211 5.29954 19.2669 5.39117 19.2669 5.43699C19.2669 5.43699 19.1982 5.55154 19.0149 5.64318Z"
                        className="fill-edpurple"
                      />
                    </svg>
                  </span>
                  <span>Sciences</span>
                </span>
                <h5 className="font-bold text-[22px] text-black mb-[7px]">
                  <a href="event-details.html" className="hover:text-edpurple">
                    Biotechnology
                  </a>
                </h5>
                <p className="text-edgray mb-[15px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <a
                  href="event-details.html"
                  className="inline-flex items-center gap-[10px] underline text-edpurple font-medium hover:text-edyellow"
                >
                  Read More{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>
            </div>
            {/* single program */}
            <div className="swiper-slide">
              {/* img */}
              <div className="mb-[30px]">
                <img src="assets/img/program-3.jpg" alt="image" />
              </div>
              {/* text */}
              <div>
                <span className="inline-flex items-center gap-[8px] px-[12px] py-[6px] border border-[#D4DCFF] rounded-[8px] text-[14px] font-medium text-edpurple mb-[11px]">
                  <span className="icon">
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3356 4.54352L11.3631 0.648906C10.6758 0.305264 9.50745 0.305264 8.82016 0.648906L0.664376 4.54352C0.0916381 4.81844 0 5.2079 0 5.41408C0 5.62027 0.0916381 5.98682 0.664376 6.28464L1.32875 6.60538V10.2709C0.91638 10.4313 0.618557 10.8436 0.618557 11.3018C0.618557 11.76 0.91638 12.1724 1.30584 12.3328L0.274914 15.6088H3.16151L2.13058 12.3328C2.54296 12.1724 2.81787 11.76 2.81787 11.3018C2.81787 10.8207 2.52005 10.4313 2.10767 10.2709V6.99484L3.32188 7.59049V12.3557C3.32188 12.4244 3.34479 12.4931 3.39061 12.5618C3.50515 12.6993 5.63574 15.6088 9.98854 15.6088C14.3414 15.6088 16.4719 12.6764 16.5636 12.5618C16.6094 12.4931 16.6323 12.4244 16.6323 12.3557V7.6134L19.3356 6.28464C19.9084 6.00973 20 5.62027 20 5.41408C19.9771 5.2079 19.9084 4.81844 19.3356 4.54352ZM15.8992 12.2411C15.5326 12.6993 13.5624 14.8986 9.98854 14.8986C6.41466 14.8986 4.44444 12.6993 4.07789 12.2411V7.91122L8.82016 10.1793C9.1638 10.3396 9.62199 10.4313 10.0802 10.4313C10.5613 10.4313 11.0195 10.3396 11.3631 10.1564L15.8992 7.93413V12.2411ZM19.0149 5.64318L16.2658 6.99484C16.1512 6.99484 16.0596 7.04066 16.0137 7.1323L11.0424 9.53779C10.5613 9.7898 9.62199 9.7898 9.11798 9.53779L3.00115 6.60538L10.0344 5.78064C10.2405 5.75773 10.378 5.57445 10.3551 5.39117C10.3322 5.18499 10.1489 5.04753 9.96564 5.07044L1.80985 6.03264L0.985109 5.64318C0.778923 5.55154 0.733104 5.43699 0.733104 5.43699C0.733104 5.41408 0.778923 5.32245 0.985109 5.23081L9.14089 1.31328C9.3929 1.19873 9.73654 1.13001 10.0802 1.13001C10.4467 1.13001 10.8133 1.19873 11.0424 1.31328L19.0149 5.2079C19.2211 5.29954 19.2669 5.39117 19.2669 5.43699C19.2669 5.43699 19.1982 5.55154 19.0149 5.64318Z"
                        className="fill-edpurple"
                      />
                    </svg>
                  </span>
                  <span>Managements</span>
                </span>
                <h5 className="font-bold text-[22px] text-black mb-[7px]">
                  <a href="event-details.html" className="hover:text-edpurple">
                    Public Administration
                  </a>
                </h5>
                <p className="text-edgray mb-[15px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <a
                  href="event-details.html"
                  className="inline-flex items-center gap-[10px] underline text-edpurple font-medium hover:text-edyellow"
                >
                  Read More{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>
            </div>
            {/* single program */}
            <div className="swiper-slide">
              {/* img */}
              <div className="mb-[30px]">
                <img src="assets/img/program-1.jpg" alt="image" />
              </div>
              {/* text */}
              <div>
                <span className="inline-flex items-center gap-[8px] px-[12px] py-[6px] border border-[#D4DCFF] rounded-[8px] text-[14px] font-medium text-edpurple mb-[11px]">
                  <span className="icon">
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3356 4.54352L11.3631 0.648906C10.6758 0.305264 9.50745 0.305264 8.82016 0.648906L0.664376 4.54352C0.0916381 4.81844 0 5.2079 0 5.41408C0 5.62027 0.0916381 5.98682 0.664376 6.28464L1.32875 6.60538V10.2709C0.91638 10.4313 0.618557 10.8436 0.618557 11.3018C0.618557 11.76 0.91638 12.1724 1.30584 12.3328L0.274914 15.6088H3.16151L2.13058 12.3328C2.54296 12.1724 2.81787 11.76 2.81787 11.3018C2.81787 10.8207 2.52005 10.4313 2.10767 10.2709V6.99484L3.32188 7.59049V12.3557C3.32188 12.4244 3.34479 12.4931 3.39061 12.5618C3.50515 12.6993 5.63574 15.6088 9.98854 15.6088C14.3414 15.6088 16.4719 12.6764 16.5636 12.5618C16.6094 12.4931 16.6323 12.4244 16.6323 12.3557V7.6134L19.3356 6.28464C19.9084 6.00973 20 5.62027 20 5.41408C19.9771 5.2079 19.9084 4.81844 19.3356 4.54352ZM15.8992 12.2411C15.5326 12.6993 13.5624 14.8986 9.98854 14.8986C6.41466 14.8986 4.44444 12.6993 4.07789 12.2411V7.91122L8.82016 10.1793C9.1638 10.3396 9.62199 10.4313 10.0802 10.4313C10.5613 10.4313 11.0195 10.3396 11.3631 10.1564L15.8992 7.93413V12.2411ZM19.0149 5.64318L16.2658 6.99484C16.1512 6.99484 16.0596 7.04066 16.0137 7.1323L11.0424 9.53779C10.5613 9.7898 9.62199 9.7898 9.11798 9.53779L3.00115 6.60538L10.0344 5.78064C10.2405 5.75773 10.378 5.57445 10.3551 5.39117C10.3322 5.18499 10.1489 5.04753 9.96564 5.07044L1.80985 6.03264L0.985109 5.64318C0.778923 5.55154 0.733104 5.43699 0.733104 5.43699C0.733104 5.41408 0.778923 5.32245 0.985109 5.23081L9.14089 1.31328C9.3929 1.19873 9.73654 1.13001 10.0802 1.13001C10.4467 1.13001 10.8133 1.19873 11.0424 1.31328L19.0149 5.2079C19.2211 5.29954 19.2669 5.39117 19.2669 5.43699C19.2669 5.43699 19.1982 5.55154 19.0149 5.64318Z"
                        className="fill-edpurple"
                      />
                    </svg>
                  </span>
                  <span>Business</span>
                </span>
                <h5 className="font-bold text-[22px] text-black mb-[7px]">
                  <a href="event-details.html" className="hover:text-edpurple">
                    Attentive was born in 2015 help
                  </a>
                </h5>
                <p className="text-edgray mb-[15px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <a
                  href="event-details.html"
                  className="inline-flex items-center gap-[10px] underline text-edpurple font-medium hover:text-edyellow"
                >
                  Read More{" "}
                  <span className="icon">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PROGRAMS SECTION END */}
    {/* CTA SECTION START */}
    <section className="bg-edpurple relative z-[1] overflow-hidden">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <div className="flex md:flex-col items-center gap-[60px] lg:gap-[40px] md:gap-y-[20px]">
          <div className="grow md:pt-[60px]">
            <h6 className="ed-section-sub-title ed-section-sub-title--white">
              ARE YOU READY FOR THIS OFFER
            </h6>
            <h2 className="ed-section-title !text-white mb-[36px]">
              50% Offer For Very First 60{" "}
              <span className="font-normal text-[40px] xxl:text-[35px] xl:text-[30px] xs:text-[28px] xxs:text-[25px]">
                Student’s &amp; Mentors
              </span>
            </h2>
            <div className="flex flex-wrap gap-[16px]">
              <a
                href="#"
                className="ed-btn !bg-edyellow !text-black hover:!bg-edblue hover:!text-white"
              >
                Become a student
              </a>
              <a
                href="#"
                className="ed-btn !bg-transparent !text-white border border-white hover:!bg-white hover:!text-edblue"
              >
                Become a teacher
              </a>
            </div>
          </div>
          {/* image */}
          <div className="shrink-0 relative z-[1] pr-[40px] lg:pr-0">
            <img src="assets/img/cta-img.png" alt="image" />
            <img
              src="assets/img/cta-img-vector.svg"
              alt="vector"
              className="absolute right-[0] lg:right-[-40px] top-[20px] -z-[1] max-w-[460px]"
            />
          </div>
        </div>
      </div>
      {/* vector */}
      <div>
        <img
          src="assets/img/cta-vector-1.png"
          alt="vector"
          className="absolute -z-[1] bottom-0 left-0 pointer-events-none"
        />
        <img
          src="assets/img/cta-vector-2.png"
          alt="vector"
          className="absolute -z-[1] top-0 right-0 pointer-events-none"
        />
      </div>
    </section>
    {/* CTA SECTION END */}
    {/* TESTIMONIAL SECTION START */}
    <section className="py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <div className="flex md:flex-col items-start gap-y-[40px]">
          {/* testimonial */}
          <div className="max-w-[50%] md:max-w-full">
            {/* heading */}
            <div className="pb-[40px] sm:pb-[20px] bg-[url('assets/img/testimonial-heading-vector.svg')] bg-no-repeat bg-left-bottom bg-[length:1000px] mb-[40px]  md:bg-none md:mb-0">
              <h6 className="ed-section-sub-title">Testimonials</h6>
              <h2 className="ed-section-title !text-[30px]">
                Students Feedback
              </h2>
            </div>
            <div className="flex xxs:flex-col gap-[15px] items-center relative pr-[35px]">
              <div className="ed-testimonial-slider swiper max-w-full">
                <div className="swiper-wrapper">
                  {/* single testimony */}
                  <div className="swiper-slide">
                    <div>
                      <div className="inline-flex gap-[6px] text-[14px] mb-[20px]">
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#BCBCBC]">
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                      <p className="text-edgray mb-[24px]">
                        Nullam dignissim ante scelerisque the is euismod
                        fermentum odio sem semper the is erat a feugiat leo urna
                        eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque.
                      </p>
                      <div>
                        <h6 className="font-semibold text-[18px] text-edblue mb-[4px]">
                          Ronald Richards
                        </h6>
                        <span className="text-edgray">Co, Founder</span>
                      </div>
                    </div>
                  </div>
                  {/* single testimony */}
                  <div className="swiper-slide">
                    <div>
                      <div className="inline-flex gap-[6px] text-[14px] mb-[20px]">
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#BCBCBC]">
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                      <p className="text-edgray mb-[24px]">
                        Nullam dignissim ante scelerisque the is euismod
                        fermentum odio sem semper the is erat a feugiat leo urna
                        eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque.
                      </p>
                      <div>
                        <h6 className="font-semibold text-[18px] text-edblue mb-[4px]">
                          Ronald Richards
                        </h6>
                        <span className="text-edgray">Co, Founder</span>
                      </div>
                    </div>
                  </div>
                  {/* single testimony */}
                  <div className="swiper-slide">
                    <div>
                      <div className="inline-flex gap-[6px] text-[14px] mb-[20px]">
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#F39F5F]">
                          <i className="fa-solid fa-star" />
                        </span>
                        <span className="text-[#BCBCBC]">
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                      <p className="text-edgray mb-[24px]">
                        Nullam dignissim ante scelerisque the is euismod
                        fermentum odio sem semper the is erat a feugiat leo urna
                        eget eros. Duis Aenean a imperdiet risus. Aliquam
                        pellentesque.
                      </p>
                      <div>
                        <h6 className="font-semibold text-[18px] text-edblue mb-[4px]">
                          Ronald Richards
                        </h6>
                        <span className="text-edgray">Co, Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[10px] items-center absolute z-[1] bottom-[10px] right-0 ed-testimonial-slider-controls">
                  <button className="prev hover:text-edpurple">
                    <i className="fa-solid fa-arrow-left-long" />
                  </button>
                  <div className="ed-testimonial-slider-pagination font-semibold text-[14px] text-edblue" />
                  <button className="next hover:text-edpurple">
                    <i className="fa-solid fa-arrow-right-long" />
                  </button>
                </div>
              </div>
              {/* slider dots */}
              <div className="flex items-start flex-col xxs:hidden shrink-0 space-y-[40px] relative z-[1] before:absolute before:top-[50%] before:-translate-y-[50%] before:right-[28px] before:w-[138px] before:h-[420px] before:bg-[url('assets/img/testimonial-img-slider-vector.svg')] before:bg-no-repeat before:bg-center before:bg-[length:100%_100%] before:-z-[1] before:opacity-10 before:pointer-events-none">
                <div className="rounded-full overflow-hidden inline-block border border-edpurple p-[5px] even:ml-[40px]">
                  <img
                    src="assets/img/user-2.png"
                    alt="user"
                    className="rounded-full w-[90px] aspect-square"
                  />
                </div>
                <div className="rounded-full overflow-hidden inline-block border border-edpurple p-[5px] even:ml-[40px]">
                  <img
                    src="assets/img/user-3.png"
                    alt="user"
                    className="rounded-full w-[90px] aspect-square"
                  />
                </div>
                <div className="rounded-full overflow-hidden inline-block border border-edpurple p-[5px] even:ml-[40px]">
                  <img
                    src="assets/img/user-4.png"
                    alt="user"
                    className="rounded-full w-[90px] aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* upcoming events */}
          <div>
            {/* heading */}
            <div className="pb-[40px] sm:pb-[20px] flex justify-end md:justify-start bg-[url('assets/img/testimonial-heading-vector.svg')] bg-no-repeat bg-right-bottom bg-[length:1000px] mb-[40px] md:bg-none md:mb-0">
              <div>
                <h6 className="ed-section-sub-title">Event</h6>
                <h2 className="ed-section-title !text-[30px]">
                  Upcoming Events
                </h2>
              </div>
            </div>
            <div className="grow space-y-[30px]">
              {/* single upcoming event */}
              <div className="bg-white flex lg:flex-col items-start gap-x-[20px] gap-y-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-[30px] xxs:p-[20px]">
                {/* date */}
                <div className="bg-edyellow rounded-[10px] font-medium text-[16px] text-black inline-block uppercase overflow-hidden text-center shrink-0">
                  <span className="bg-edpurple text-white text-[20px] block py-[7px] px-[30px] rounded-[10px]">
                    2024
                  </span>
                  <span className="px-[15px] p-[10px] block leading-[1.44] font-semibold">
                    20 <span className="block">Oct</span>
                  </span>
                </div>
                {/* text */}
                <div>
                  <h5 className="font-semibold text-[20px] mb-[7px]">
                    <a href="#" className="hover:text-edpurple">
                      SAT Implementation Workshops November 2026
                    </a>
                  </h5>
                  <h6 className="text-edpurple font-medium">11:00 - 13:30</h6>
                  <p className="border-t border-[#002147]/20 pt-[17px] mt-[10px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority
                  </p>
                </div>
              </div>
              {/* single upcoming event */}
              <div className="bg-white flex lg:flex-col items-start gap-x-[20px] gap-y-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-[30px] xxs:p-[20px]">
                {/* date */}
                <div className="bg-edyellow rounded-[10px] font-medium text-[16px] text-black inline-block uppercase overflow-hidden text-center shrink-0">
                  <span className="bg-edpurple text-white text-[20px] block py-[7px] px-[30px] rounded-[10px]">
                    2024
                  </span>
                  <span className="px-[15px] p-[10px] block leading-[1.44] font-semibold">
                    20 <span className="block">Oct</span>
                  </span>
                </div>
                {/* text */}
                <div>
                  <h5 className="font-semibold text-[20px] mb-[7px]">
                    <a href="#" className="hover:text-edpurple">
                      SAT Implementation Workshops November 2026
                    </a>
                  </h5>
                  <h6 className="text-edpurple font-medium">11:00 - 13:30</h6>
                  <p className="border-t border-[#002147]/20 pt-[17px] mt-[10px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TESTIMONIAL SECTION END */}
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

export default About
