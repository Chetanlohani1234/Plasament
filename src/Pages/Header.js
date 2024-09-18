import React from 'react'

const Header = () => {
  return (
    <>

       {/* HEADER SECTION START */}
  <header  className="bg-edblue ed-header--2 relative z-[2] px-[7.9%] xxxxl:px-[6.5%] xxxl:px-[1%] lg:px-[15px] py-[25px] xxs:py-[16px] flex items-center justify-between to-be-fixed" style={{height:'70px'}}>
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
            <a href='/course-filter' role="button">Explore Courses</a>
          </li>
          <li>
            <a href="/collegeDetail">Top Colleges</a>
          </li>
          <li className="has-sub-menu relative">
            <a role="button">More</a>
            <ul className="ed-header-submenu" style={{textAlign:"left"}}>
              <li>
                <a href="/collegeDetail">Tie Up/Partner</a>
              </li>
              <li>
                <a href="/collegeDetail">Jobs & Placement</a>
              </li>
              <li>
                <a href="/collegeDetail">Add Your College/University</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/collegeDetail">Blogs</a>
              </li>
              <li>
                <a href="/collegeDetail">Q&As</a>
              </li>
              <li>
                <a href="/collegeDetail">Free Resources</a>
              </li>
              <li>
                <a href="/collegeDetail">Best Course for You(AI-Powered)</a>
              </li>
              <li>
                <a href="/collegeDetail">Profile Sync with Placement.com</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/collegeDetail">Login</a>
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
                <a href="course-filter.html">Course Details</a>
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
      
    </>
  )
}

export default Header;
