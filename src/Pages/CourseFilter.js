import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import { Autoplay, Pagination } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
//import 'swiper/swiper-bundle.min.css';



//import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './Comparison.css'

const CourseFilter = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("Accounts and Taxation");
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
              <a href="/courseDetail" className="hover:text-edpurple">
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
              <a href="/courseDetail" className="hover:text-edpurple">
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
              <a href="/courseDetail" className="hover:text-edpurple">
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
          <a href="#">
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
  <div class="banner-container">
  <div class="banner-text">
    <h1>Take the RIGHT STEPS towards your GOAL with College Vidya!</h1>
    <p>We are Known for providing top-notch admission services</p>
  </div>
  <div class="banner-images">
    <img src="assets/img/youtube1.webp" alt="Student" />
    <a href="https://www.youtube.com/watch?v=your_video_id" target="_blank" class="youtube-link">Must Watch</a>

  </div>
</div>
<div class="footer-text">
  <p>The future depends on what you do today.</p>
</div>


        <div className="auto-scroll">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 1000, // Set a higher delay (3000ms = 3 seconds)
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
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
        </div>
    <div className="py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
          {/* left sidebar */}
          <div className="right sticky md:static top-[140px] h-full max-w-full w-[370px] lg:w-[300px] shrink-0 space-y-[30px] md:space-y-[25px] bg-white rounded-[10px] p-[30px] xxs:px-[20px] pt-[20px] xxs:pt-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
            {/* search widget */}
            <div>
              {/* <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Search
              </h4> */}
              {/* search form */}
              {/* <form
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
              </form> */}
            </div>
  
            {/* filter */}
            <div>
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Filter By Course
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
                    onChange={handleCategoryChange} // Event handler for selection
                    value={selectedCategory} // Bind selected value to state
                  >
                    <option value="Accounts and Taxation">Accounts and Taxation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Sales and Marketing">Sales and Marketing</option>
                    <option value="Web and Software Development">Web and Software Development</option>
                    <option value="Human Resource and Administration">Human Resource and Administration</option>
                    <option value="Graphic & Animation">Graphic & Animation</option>
                    

                  </select>
                </form>
              </div>
              {/* location filter */}
              {/* <div>
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
              </div> */}
            </div>
          </div>
          {/* right content */}
          <div className="left grow">
          
          <div className="text-center mb-[21px]">
            <h6 className="ed-section-sub-title">Our Courses</h6>
            
          </div>

          {/* Accounts and Taxation online Courses Section*/}
          {selectedCategory === "Accounts and Taxation" && (
           <div>
                <div className="text-center mb-[21px]">
                    <h2 className="ed-section-title">Accounts and Taxation Courses</h2>
                </div>
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
                  <a href="/courseDetail" className="hover:text-edpurple">
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
                  <a href="/courseDetail" className="hover:text-edpurple">
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
                  <a href="/courseDetail" className="hover:text-edpurple">
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
                  <a href="/courseDetail" className="hover:text-edpurple">
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
                  <a href="/courseDetail" className="hover:text-edpurple">
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  BBA in Accounts and Taxation with Job Assistance and Mentorship
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
                <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                </div>
              </div>
            </div>
            </div>

          )}
          
            {/* Digital Marketing Course Section */}
       
          {selectedCategory === "Digital Marketing" && (
            <div>
                <div className="text-center mb-[21px]">
                     <h2 className="ed-section-title">Digital Marketing Courses</h2>
                </div>
            <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cd1.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                   Bachelor of Vocational in Digital Marketing with job assistance and mentorship
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
                    src="assets/img/cd2.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  MBA in Digital Marketing with job assistance and mentorship
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
                    src="assets/img/cd3.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                   PG Diploma in Digital Marketing with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cd4.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Master Of Vocational in Digital Marketing  with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cd5.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Bachelor of Business Administration Digital Marketing with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cd6.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                   Zero Day Placement Diploma in Digital Marketing
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
                <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                </div>
              </div>
            </div>
            </div>
          )}

            {/* Sales and Marketing Courses Section */}

            {selectedCategory === "Sales and Marketing" && (
            <div>
                  <div className="text-center mb-[21px]">
                    <h2 className="ed-section-title">Sales and Marketing Courses</h2>
                  </div>  
            <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cs1.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Bachelor of Vocational in Marketing and Sales with job assistance and mentorship
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
                    src="assets/img/cs2.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                   Zero Day Placement Diploma in Marketing & Sales
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
                    src="assets/img/cs3.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                   PG Diploma in Marketing & Sales with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cs4.jpg"
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
                    Rs 75000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Master of Vocational in Marketing & Sales with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cs5.jpg"
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
                    Rs 75000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="/courseDetail" className="hover:text-edpurple">
                  MBA in Marketing & Sales with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cs6.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Bachelor of Business Administration in Marketing & Sales with Job Assistance and Mentorship
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
                <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                </div>
              </div>
            </div>
            </div>
            )}
            {/* Web and Software Development Courses Section */}

            {selectedCategory === "Web and Software Development" && (
            <div>
                    <div className="text-center mb-[21px]">
                      <h2 className="ed-section-title">Web and Software Development Courses</h2>
                    </div>
            <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cw1.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Zero day placement Diploma in Web Designing
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
                    src="assets/img/cw2.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Master of Vocational in Web Development with job assistance and mentorship
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
                    src="assets/img/cw3.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Bachelor of Vocational in Web Development with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cw4.jpg"
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
                    Rs 27000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="/courseDetail" className="hover:text-edpurple">
                   MERN Stack Internship Program
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cw5.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  PG Diploma in Web Development with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cw6.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Master of Vocational In Software Development with Job Assistance and Mentorship
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
                <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                </div>
              </div>
            </div>
            </div>
            )}

            {/* Human Resource and Administration Courses Section */}

            {selectedCategory === "Human Resource and Administration" && (
            <div>
                  <div className="text-center mb-[21px]">
                    <h2 className="ed-section-title">Human Resource and Administration Courses</h2>
                 </div>
            <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ch1.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Master of Vocational in Human Resource and Administration with job assistance and mentorship
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
                    src="assets/img/ch2.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Zero day placement MBA in Human Resource and Administration
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
                    src="assets/img/ch3.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                    PG Diploma in Human Resource and Administration with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ch4.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                    Zero Day Placement Diploma in Human Resource and Administration
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ch5.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                   Bachelor of Vocational in Human Resource And Administration with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/ch6.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Bachelor of Business Administration in Human Resource And Administration with Job Assistance and Mentorship
                  </a>
                </h5>
                {/* course stats */}
                {/* course footer */}
                <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                </div>
              </div>
            </div>
            </div>
            )}

            {/* Graphic & Animation Courses Section */}

            {selectedCategory === "Graphic & Animation" && (
             <div> 
               <div className="text-center mb-[21px]">
                <h2 className="ed-section-title">Graphic & Animation Courses</h2>
               </div>
             
            <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">              
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cg1.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                    Diploma in UI/UX Design with job assistance and mentorship
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
                    src="assets/img/cg2.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                  Bachelor of Vocational in Animation and Film Making with job assistance and mentorship
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
                    src="assets/img/cg3.jpg"
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
                    Rs 27000
                  </span>
                </div>
                {/* course title */}
                <h5 className="font-semibold text-[20px] text-edblue mb-[23px]">
                  <a href="/courseDetail" className="hover:text-edpurple">
                   Print & Publishing (Graphic Designing) with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
              {/* single course card */}
              <div className="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                {/* course image  */}
                <div className="relative overflow-hidden rounded-[10px] mb-[24px]">
                  <img
                    src="assets/img/cg4.jpg"
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
                  <a href="/courseDetail" className="hover:text-edpurple">
                    Diploma in Digital Advertising and Designing with job assistance and mentorship
                  </a>
                </h5>
                {/* course stats */}
              </div>
            </div>
            </div>
            )}

            {/* pagination */}
            {/* <div className="flex items-center gap-[20px] pt-[60px] justify-center text-[16px]">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>

    <div className="comparison-container">
      <div className="text-section">
        <h1>Why This College?</h1>
        <p>
          This college offers a unique blend of academic excellence and extracurricular opportunities. 
          Our experienced faculty, state-of-the-art facilities, and vibrant campus life create an ideal 
          environment for personal and professional growth.
        </p>
        <h1>Expert Conseling</h1>
        <p>
          This college offers a unique blend of academic excellence and extracurricular opportunities. 
          Our experienced faculty, state-of-the-art facilities, and vibrant campus life create an ideal 
          environment for personal and professional growth.
        </p>
        <h1>Placement Support</h1>
        <p>
          This college offers a unique blend of academic excellence and extracurricular opportunities. 
          Our experienced faculty, state-of-the-art facilities, and vibrant campus life create an ideal 
          environment for personal and professional growth.
        </p>
        <h1>Peer Interaction</h1>
        <p>
          This college offers a unique blend of academic excellence and extracurricular opportunities. 
          Our experienced faculty, state-of-the-art facilities, and vibrant campus life create an ideal 
          environment for personal and professional growth.
        </p>
      </div>
      <div className="image-section">
        <img src="assets/img/compare.webp" alt="College Comparison" />
      </div>
    </div>

    <div className="slider-container">
      <h1>WHAT STUDENTS SAY</h1>
      <h2>Student Reviews About Pure Professional</h2>
      <Swiper 
   spaceBetween={30}
   slidesPerView={4}
   loop={true}
   autoplay={{
     delay: 300,
     disableOnInteraction: false,
   }}
   //navigation
   //pagination={{ clickable: true }}
   //modules={[Autoplay, Pagination]}
>

     
        <SwiperSlide>
          <div className="review-box">
            <img src="assets/img/u2.webp" alt="College Logo" className="logo" />

            <h2>John Doe</h2>
            <h3>Tech Innovations</h3>
  
            <p>This college has a great environment for learning and the faculty is very supportive!</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="review-box">
            <img src="assets/img/u3.webp" alt="College Logo" className="logo" />

            <h2>Jane Smith</h2>
            <h3>Creative Solutions</h3>

            <p>I loved my experience here. The campus life is vibrant and full of opportunities.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review-box">
            <img src="assets/img/u4.webp" alt="College Logo" className="logo" />
   
            <h2>Alice Johnson</h2>
            <h3>Global Enterprises</h3>

            <p>The courses offered are very insightful, and the facilities are top-notch.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review-box">
            <img src="assets/img/u5.webp" alt="College Logo" className="logo" />

            <h2>Mark Wilson</h2>
            <h3>Future Tech</h3>

            <p>I had a fantastic time studying here, and I made lifelong friends.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review-box">
            <img src="assets/img/u5.webp" alt="College Logo" className="logo" />
            <h2>Mark Wilson</h2>
            <h3>Future Tech</h3>
            <p>I had a fantastic time studying here, and I made lifelong friends.</p>
          </div>
        </SwiperSlide>
      </Swiper>
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

  </main>
</>

  )
}

export default CourseFilter
