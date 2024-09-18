import React from 'react'

const CourseFilter = () => {
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
    <div className="py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
          {/* left sidebar */}
          <div className="right sticky md:static top-[140px] h-full max-w-full w-[370px] lg:w-[300px] shrink-0 space-y-[30px] md:space-y-[25px] bg-white rounded-[10px] p-[30px] xxs:px-[20px] pt-[20px] xxs:pt-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
            {/* search widget */}
            <div>
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Search
              </h4>
              {/* search form */}
              <form
                action="#"
                className="bg-[#f8f8f8] flex h-[50px] px-[15px] mt-[24px]"
              >
                <input
                  type="search"
                  name="search"
                  id="ed-news-search"
                  className="w-full bg-transparent text-[16px] focus:outline-none"
                  placeholder="Find Your Course"
                />
                <button
                  type="submit"
                  className="text-[16px] text-edpurple hover:text-edyellow"
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
            {/* filter */}
            <div>
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Filter By
              </h4>
              {/* field filter */}
              <div className="border-b border-[#E3E3E3] pb-[24px]">
                <span className="font-medium text-[14px] text-edblue block pt-[18px] pb-[15px]">
                  Field of Study
                </span>
                <form action="#" className="bg-[#f8f8f8] px-[15px]">
                  <select
                    name="course category"
                    className="bg-transparent w-full py-[12px] focus:outline-none"
                  >
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Seo Optimization">Seo Optimization</option>
                    <option value="Web Development">Web Development</option>
                  </select>
                </form>
              </div>
              {/* location filter */}
              <div>
                <span className="font-medium text-[16px] text-edblue block pt-[18px] pb-[15px]">
                  Location Type
                </span>
                <form action="#" className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" name="campus" id="campus" />
                    <label htmlFor="campus" className="text-[14px] text-edblue">
                      University Campus
                    </label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" name="online" id="online" />
                    <label htmlFor="online" className="text-[14px] text-edblue">
                      Online
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* right content */}
          <div className="left grow">
            <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/c1.jpg"
                    alt="Course Image"
                    className="aspect-[330/223] w-full object-cover group-hover:scale-110"
                  />
                </div>
                {/* course infos */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">
                    Price
                  </span>
                  <span className="text-edpurple font-semibold text-[20px]">
                    Rs 92000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="course-details.html" className="hover:text-edpurple">
                  Zero day placement Diploma in Accounts and Taxation
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ca1.jpg"
                    alt="Course Image"
                    className="aspect-[330/223] w-full object-cover group-hover:scale-110"
                  />
                </div>
                {/* course infos */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">
                    Price
                  </span>
                  <span className="text-edpurple font-semibold text-[20px]">
                    Rs 52000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="course-details.html" className="hover:text-edpurple">
                  Bachelor of Vocational in Accounts and Taxation with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ca2.jpg"
                    alt="Course Image"
                    className="aspect-[330/223] w-full object-cover group-hover:scale-110"
                  />
                </div>
                {/* course infos */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">
                    Price
                  </span>
                  <span className="text-edpurple font-semibold text-[20px]">
                    Rs 52000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="course-details.html" className="hover:text-edpurple">
                  Bachelor of Commerce in Accounts and Taxation with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ca4.jpg"
                    alt="Course Image"
                    className="aspect-[330/223] w-full object-cover group-hover:scale-110"
                  />
                </div>
                {/* course infos */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">
                    Price
                  </span>
                  <span className="text-edpurple font-semibold text-[20px]">
                    Rs 92000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="course-details.html" className="hover:text-edpurple">
                  PG Diploma in Accounts and Taxation with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ca5.jpg"
                    alt="Course Image"
                    className="aspect-[330/223] w-full object-cover group-hover:scale-110"
                  />
                </div>
                {/* course infos */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">
                    Price
                  </span>
                  <span className="text-edpurple font-semibold text-[20px]">
                    Rs 77000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="course-details.html" className="hover:text-edpurple">
                  M.Com in Accounts and Taxation with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ca6.jpg"
                    alt="Course Image"
                    className="aspect-[330/223] w-full object-cover group-hover:scale-110"
                  />
                </div>
                {/* course infos */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">
                    Price
                  </span>
                  <span className="text-edpurple font-semibold text-[20px]">
                    Rs 52000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="course-details.html" className="hover:text-edpurple">
                  BBA in Accounts and Taxation with Job Assistance and Mentorship
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
                <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                </div>
              </div>
            </div>
            {/* pagination */}
            <div className="flex items-center gap-[20px] pt-[60px] justify-center text-[16px]">
              <a href="#" className="hover:text-edpurple">
                <i className="fa-solid fa-arrow-left-long" />
              </a>
              <div className="ed-pagination flex gap-[10px] items-center">
                <a
                  href="#"
                  className="border border-[#d9d9d9] rounded-full w-[50px] h-[50px] flex items-center justify-center text-etBlack hover:bg-edpurple hover:border-edpurple hover:text-white active"
                >
                  01
                </a>
                <a
                  href="#"
                  className="border border-[#d9d9d9] rounded-full w-[50px] h-[50px] flex items-center justify-center text-etBlack hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  02
                </a>
                <a
                  href="#"
                  className="border border-[#d9d9d9] rounded-full w-[50px] h-[50px] flex items-center justify-center text-etBlack hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  03
                </a>
              </div>
              <a href="#" className="hover:text-edpurple">
                <i className="fa-solid fa-arrow-right-long" />
              </a>
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

export default CourseFilter
