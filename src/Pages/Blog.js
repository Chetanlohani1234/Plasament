import React from 'react'

const Blog = () => {
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
              <a href="#" className="hover:text-edpurple">
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
              <a href="#" className="hover:text-edpurple">
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
              <a href="#" className="hover:text-edpurple">
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
    {/* MAIN CONTENT START */}
    <div className="ed-event-details-content py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
        <div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
          <div className="left grow space-y-[30px] md:space-y-[20px]">
            {/* single blog */}
            <div className="border border-[#D9D9D9] rounded-[8px] p-[24px] xxs:p-[18px]">
              <div className="img overflow-hidden rounded-[8px] mb-[30px] relative">
                <img
                  src="assets/img/news-details-img-1.jpg"
                  alt="blog-cover"
                  className="w-full"
                />
                <div className="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center absolute top-[20px] left-[20px]">
                  <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">
                    10
                  </span>
                  <span className="px-[11px] py-[2px] block">June</span>
                </div>
              </div>
              {/* txt */}
              <div>
                {/* infos */}
                <div className="flex items-center gap-[30px] mb-[7px]">
                  {/* single info */}
                  <div className="flex gap-[10px] items-center">
                    <span className="icon shrink-0">
                      <img src="assets/img/icon/user.svg" alt="icon" />
                    </span>
                    <span className="text-[14px] text-edgray">
                      by <a href="#">Admin</a>
                    </span>
                  </div>
                  {/* single info */}
                  <div className="flex gap-[10px] items-center">
                    <span className="icon shrink-0">
                      <img src="assets/img/icon/tag.svg" alt="icon" />
                    </span>
                    <span className="text-[14px] text-edgray">
                      <a href="#">Business</a>
                    </span>
                  </div>
                </div>
                <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-semibold text-black mb-[10px]">
                  <a href="#" className="hover:text-edpurple">
                    Make Your Expanding Contracting Content
                  </a>
                </h3>
                <p className="font-normal text-[16px] text-edgray mb-[16px]">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-edpurple text-[16px] hover:text-edyellow"
                  >
                    Read More{" "}
                    <span className="pl-[5px]">
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                  <button className="h-[50px] px-[22px] border border-edpurple rounded-[8px] flex gap-[8px] items-center justify-center group hover:text-white hover:bg-edpurple">
                    <span>Share</span>
                    <span className="icon">
                      <svg
                        width={20}
                        height={22}
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5471 14.7982C14.493 14.7982 13.5433 15.2534 12.8842 15.9775L6.95572 12.3057C7.11849 11.8896 7.20194 11.4467 7.20176 11C7.20197 10.5532 7.11852 10.1103 6.95572 9.69429L12.8842 6.02232C13.5434 6.74642 14.493 7.20181 15.5471 7.20181C17.5327 7.20181 19.1481 5.58644 19.1481 3.60082C19.1481 1.61519 17.5327 0 15.5471 0C13.5615 0 11.9461 1.61536 11.9461 3.60099C11.9461 4.04774 12.0295 4.49056 12.1922 4.90663L6.26384 8.57848C5.6047 7.85437 4.65505 7.39899 3.60099 7.39899C1.61536 7.39899 0 9.01453 0 11C0 12.9856 1.61536 14.601 3.60099 14.601C4.65501 14.601 5.60475 14.1458 6.26384 13.4215L12.1922 17.0933C12.0295 17.5094 11.9461 17.9523 11.9461 18.3991C11.9461 20.3846 13.5615 22 15.5471 22C17.5327 22 19.1481 20.3846 19.1481 18.3992C19.1481 16.4135 17.5327 14.7982 15.5471 14.7982ZM13.2592 3.60099C13.2592 2.33943 14.2856 1.31308 15.5471 1.31308C16.8086 1.31308 17.835 2.33943 17.835 3.60099C17.835 4.86255 16.8087 5.8889 15.5471 5.8889C14.2855 5.8889 13.2592 4.86251 13.2592 3.60099ZM3.60099 13.2879C2.33926 13.2879 1.31291 12.2615 1.31291 11C1.31291 9.73846 2.33926 8.71207 3.60099 8.71207C4.86255 8.71207 5.88873 9.73846 5.88873 11C5.88873 12.2615 4.86251 13.2879 3.60099 13.2879ZM13.2592 18.399C13.2592 17.1375 14.2856 16.1111 15.5471 16.1111C16.8086 16.1111 17.835 17.1375 17.835 18.399C17.835 19.6605 16.8087 20.6869 15.5471 20.6869C14.2855 20.6869 13.2592 19.6605 13.2592 18.399V18.399Z"
                          className="fill-edpurple group-hover:fill-white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* single blog */}
            <div className="border border-[#D9D9D9] rounded-[8px] p-[24px] xxs:p-[18px]">
              <div className="img overflow-hidden rounded-[8px] mb-[30px] relative">
                <img
                  src="assets/img/blog-inner-1.jpg"
                  alt="blog-cover"
                  className="w-full"
                />
                <div className="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center absolute top-[20px] left-[20px]">
                  <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">
                    10
                  </span>
                  <span className="px-[11px] py-[2px] block">June</span>
                </div>
              </div>
              {/* txt */}
              <div>
                {/* infos */}
                <div className="flex items-center gap-[30px] mb-[7px]">
                  {/* single info */}
                  <div className="flex gap-[10px] items-center">
                    <span className="icon shrink-0">
                      <img src="assets/img/icon/user.svg" alt="icon" />
                    </span>
                    <span className="text-[14px] text-edgray">
                      by <a href="#">Admin</a>
                    </span>
                  </div>
                  {/* single info */}
                  <div className="flex gap-[10px] items-center">
                    <span className="icon shrink-0">
                      <img src="assets/img/icon/tag.svg" alt="icon" />
                    </span>
                    <span className="text-[14px] text-edgray">
                      <a href="#">Business</a>
                    </span>
                  </div>
                </div>
                <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-semibold text-black mb-[10px]">
                  <a href="#" className="hover:text-edpurple">
                    Make Your Expanding Contracting Content
                  </a>
                </h3>
                <p className="font-normal text-[16px] text-edgray mb-[16px]">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-edpurple text-[16px] hover:text-edyellow"
                  >
                    Read More{" "}
                    <span className="pl-[5px]">
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                  <button className="h-[50px] px-[22px] border border-edpurple rounded-[8px] flex gap-[8px] items-center justify-center group hover:text-white hover:bg-edpurple">
                    <span>Share</span>
                    <span className="icon">
                      <svg
                        width={20}
                        height={22}
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5471 14.7982C14.493 14.7982 13.5433 15.2534 12.8842 15.9775L6.95572 12.3057C7.11849 11.8896 7.20194 11.4467 7.20176 11C7.20197 10.5532 7.11852 10.1103 6.95572 9.69429L12.8842 6.02232C13.5434 6.74642 14.493 7.20181 15.5471 7.20181C17.5327 7.20181 19.1481 5.58644 19.1481 3.60082C19.1481 1.61519 17.5327 0 15.5471 0C13.5615 0 11.9461 1.61536 11.9461 3.60099C11.9461 4.04774 12.0295 4.49056 12.1922 4.90663L6.26384 8.57848C5.6047 7.85437 4.65505 7.39899 3.60099 7.39899C1.61536 7.39899 0 9.01453 0 11C0 12.9856 1.61536 14.601 3.60099 14.601C4.65501 14.601 5.60475 14.1458 6.26384 13.4215L12.1922 17.0933C12.0295 17.5094 11.9461 17.9523 11.9461 18.3991C11.9461 20.3846 13.5615 22 15.5471 22C17.5327 22 19.1481 20.3846 19.1481 18.3992C19.1481 16.4135 17.5327 14.7982 15.5471 14.7982ZM13.2592 3.60099C13.2592 2.33943 14.2856 1.31308 15.5471 1.31308C16.8086 1.31308 17.835 2.33943 17.835 3.60099C17.835 4.86255 16.8087 5.8889 15.5471 5.8889C14.2855 5.8889 13.2592 4.86251 13.2592 3.60099ZM3.60099 13.2879C2.33926 13.2879 1.31291 12.2615 1.31291 11C1.31291 9.73846 2.33926 8.71207 3.60099 8.71207C4.86255 8.71207 5.88873 9.73846 5.88873 11C5.88873 12.2615 4.86251 13.2879 3.60099 13.2879ZM13.2592 18.399C13.2592 17.1375 14.2856 16.1111 15.5471 16.1111C16.8086 16.1111 17.835 17.1375 17.835 18.399C17.835 19.6605 16.8087 20.6869 15.5471 20.6869C14.2855 20.6869 13.2592 19.6605 13.2592 18.399V18.399Z"
                          className="fill-edpurple group-hover:fill-white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* single blog */}
            <div className="border border-[#D9D9D9] rounded-[8px] p-[24px] xxs:p-[18px]">
              <div className="img overflow-hidden rounded-[8px] mb-[30px] relative">
                <img
                  src="assets/img/blog-inner-2.jpg"
                  alt="blog-cover"
                  className="w-full"
                />
                <div className="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center absolute top-[20px] left-[20px]">
                  <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">
                    10
                  </span>
                  <span className="px-[11px] py-[2px] block">June</span>
                </div>
              </div>
              {/* txt */}
              <div>
                {/* infos */}
                <div className="flex items-center gap-[30px] mb-[7px]">
                  {/* single info */}
                  <div className="flex gap-[10px] items-center">
                    <span className="icon shrink-0">
                      <img src="assets/img/icon/user.svg" alt="icon" />
                    </span>
                    <span className="text-[14px] text-edgray">
                      by <a href="#">Admin</a>
                    </span>
                  </div>
                  {/* single info */}
                  <div className="flex gap-[10px] items-center">
                    <span className="icon shrink-0">
                      <img src="assets/img/icon/tag.svg" alt="icon" />
                    </span>
                    <span className="text-[14px] text-edgray">
                      <a href="#">Business</a>
                    </span>
                  </div>
                </div>
                <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-semibold text-black mb-[10px]">
                  <a href="#" className="hover:text-edpurple">
                    Make Your Expanding Contracting Content
                  </a>
                </h3>
                <p className="font-normal text-[16px] text-edgray mb-[16px]">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-edpurple text-[16px] hover:text-edyellow"
                  >
                    Read More{" "}
                    <span className="pl-[5px]">
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                  <button className="h-[50px] px-[22px] border border-edpurple rounded-[8px] flex gap-[8px] items-center justify-center group hover:text-white hover:bg-edpurple">
                    <span>Share</span>
                    <span className="icon">
                      <svg
                        width={20}
                        height={22}
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5471 14.7982C14.493 14.7982 13.5433 15.2534 12.8842 15.9775L6.95572 12.3057C7.11849 11.8896 7.20194 11.4467 7.20176 11C7.20197 10.5532 7.11852 10.1103 6.95572 9.69429L12.8842 6.02232C13.5434 6.74642 14.493 7.20181 15.5471 7.20181C17.5327 7.20181 19.1481 5.58644 19.1481 3.60082C19.1481 1.61519 17.5327 0 15.5471 0C13.5615 0 11.9461 1.61536 11.9461 3.60099C11.9461 4.04774 12.0295 4.49056 12.1922 4.90663L6.26384 8.57848C5.6047 7.85437 4.65505 7.39899 3.60099 7.39899C1.61536 7.39899 0 9.01453 0 11C0 12.9856 1.61536 14.601 3.60099 14.601C4.65501 14.601 5.60475 14.1458 6.26384 13.4215L12.1922 17.0933C12.0295 17.5094 11.9461 17.9523 11.9461 18.3991C11.9461 20.3846 13.5615 22 15.5471 22C17.5327 22 19.1481 20.3846 19.1481 18.3992C19.1481 16.4135 17.5327 14.7982 15.5471 14.7982ZM13.2592 3.60099C13.2592 2.33943 14.2856 1.31308 15.5471 1.31308C16.8086 1.31308 17.835 2.33943 17.835 3.60099C17.835 4.86255 16.8087 5.8889 15.5471 5.8889C14.2855 5.8889 13.2592 4.86251 13.2592 3.60099ZM3.60099 13.2879C2.33926 13.2879 1.31291 12.2615 1.31291 11C1.31291 9.73846 2.33926 8.71207 3.60099 8.71207C4.86255 8.71207 5.88873 9.73846 5.88873 11C5.88873 12.2615 4.86251 13.2879 3.60099 13.2879ZM13.2592 18.399C13.2592 17.1375 14.2856 16.1111 15.5471 16.1111C16.8086 16.1111 17.835 17.1375 17.835 18.399C17.835 19.6605 16.8087 20.6869 15.5471 20.6869C14.2855 20.6869 13.2592 19.6605 13.2592 18.399V18.399Z"
                          className="fill-edpurple group-hover:fill-white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* PAGINATION START */}
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
            {/* PAGINATION END */}
          </div>
          {/* right sidebar */}
          <div className="right max-w-full w-[370px] lg:w-[360px] shrink-0 space-y-[30px] md:space-y-[25px]">
            {/* search widget */}
            <div className="bg-edoffwhite rounded-[10px] p-[30px] xxs:px-[20px] pt-[20px] xxs:pt-[10px]">
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Search
              </h4>
              {/* search form */}
              <form
                action="#"
                className="border border-[#e5e5e5] rounded-[8px] flex h-[60px] px-[20px] mt-[30px]"
              >
                <input
                  type="search"
                  name="search"
                  id="ed-news-search"
                  className="w-full bg-transparent text-[16px] focus:outline-none"
                  placeholder="Search here.."
                />
                <button
                  type="submit"
                  className="text-[16px] hover:text-edpurple"
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
            {/* Categories widget */}
            <div className="bg-edoffwhite rounded-[10px] p-[30px] xxs:px-[20px] pt-[20px] xxs:pt-[10px]">
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Categories
              </h4>
              <ul className="mt-[30px] text-[16px]">
                <li className="text-black py-[16px] border-b border-t border-[#D9D9D9]">
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-edpurple"
                  >
                    <span>Art &amp; Design</span>
                    <span>(2)</span>
                  </a>
                </li>
                <li className="text-black py-[16px] border-b border-[#D9D9D9]">
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-edpurple"
                  >
                    <span>Development</span>
                    <span>(4)</span>
                  </a>
                </li>
                <li className="text-black py-[16px] border-b border-[#D9D9D9]">
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-edpurple"
                  >
                    <span>Data Science</span>
                    <span>(3)</span>
                  </a>
                </li>
                <li className="text-black py-[16px] border-b border-[#D9D9D9]">
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-edpurple"
                  >
                    <span>Marketing</span>
                    <span>(2)</span>
                  </a>
                </li>
                <li className="text-black py-[16px] border-b border-[#D9D9D9]">
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-edpurple"
                  >
                    <span>Finance</span>
                    <span>(5)</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Recent Post widget */}
            <div className="bg-edoffwhite rounded-[10px] p-[30px] xxs:px-[20px] pt-[20px] xxs:pt-[10px]">
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Recent Post
              </h4>
              <div className="posts mt-[30px] space-y-[24px]">
                {/* single post */}
                <div className="flex items-center gap-[16px]">
                  <div className="rounded-[6px] w-[78px] h-[79px] overflow-hidden shrink-0">
                    <img
                      src="assets/img/blog-1.png"
                      alt="Post Image"
                      className="h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="date text-[14px] text-edgray flex items-center gap-[12px] mb-[3px]">
                      <span className="icon">
                        <svg
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6756 4.42875C15.5769 2.78656 14.2056 1.5 12.5541 1.5H11.75V0.875C11.75 0.70924 11.6842 0.550268 11.5669 0.433058C11.4497 0.315848 11.2908 0.25 11.125 0.25C10.9592 0.25 10.8003 0.315848 10.6831 0.433058C10.5659 0.550268 10.5 0.70924 10.5 0.875V1.5H5.50001V0.875C5.50001 0.70924 5.43416 0.550268 5.31695 0.433058C5.19974 0.315848 5.04077 0.25 4.87501 0.25C4.70924 0.25 4.55027 0.315848 4.43306 0.433058C4.31585 0.550268 4.25001 0.70924 4.25001 0.875V1.5H3.44594C1.79407 1.5 0.422818 2.78656 0.32438 4.42875C0.139068 7.5175 0.142505 10.6506 0.334693 13.7409C0.432193 15.3103 1.68938 16.5675 3.25875 16.665C4.83157 16.7628 6.41563 16.8116 7.99969 16.8116C9.58344 16.8116 11.1678 16.7628 12.7406 16.665C14.31 16.5675 15.5672 15.3103 15.6647 13.7409C15.8572 10.6522 15.8606 7.51937 15.6756 4.42875ZM14.4175 13.6634C14.3885 14.1191 14.1944 14.5487 13.8716 14.8716C13.5487 15.1944 13.1192 15.3885 12.6634 15.4175C9.56907 15.6097 6.43094 15.6097 3.33657 15.4175C2.88086 15.3885 2.45134 15.1944 2.12845 14.8716C1.80557 14.5487 1.61147 14.1191 1.58251 13.6634C1.43601 11.2785 1.40296 8.88803 1.48344 6.5H14.5169C14.5956 8.8875 14.5653 11.2884 14.4175 13.6634ZM4.87501 4C5.04077 4 5.19974 3.93415 5.31695 3.81694C5.43416 3.69973 5.50001 3.54076 5.50001 3.375V2.75H10.5V3.375C10.5 3.54076 10.5659 3.69973 10.6831 3.81694C10.8003 3.93415 10.9592 4 11.125 4C11.2908 4 11.4497 3.93415 11.5669 3.81694C11.6842 3.69973 11.75 3.54076 11.75 3.375V2.75H12.5541C13.5456 2.75 14.3688 3.52031 14.4278 4.50344C14.4425 4.75156 14.4488 5.00125 14.4609 5.25H1.53907C1.55157 5.00125 1.55751 4.75156 1.57219 4.50344C1.63126 3.52031 2.45407 2.75 3.44594 2.75H4.25001V3.375C4.25001 3.54076 4.31585 3.69973 4.43306 3.81694C4.55027 3.93415 4.70924 4 4.87501 4Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M4.875 10.25C5.39277 10.25 5.8125 9.83027 5.8125 9.3125C5.8125 8.79473 5.39277 8.375 4.875 8.375C4.35723 8.375 3.9375 8.79473 3.9375 9.3125C3.9375 9.83027 4.35723 10.25 4.875 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M8 10.25C8.51777 10.25 8.9375 9.83027 8.9375 9.3125C8.9375 8.79473 8.51777 8.375 8 8.375C7.48223 8.375 7.0625 8.79473 7.0625 9.3125C7.0625 9.83027 7.48223 10.25 8 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M4.875 13.375C5.39277 13.375 5.8125 12.9553 5.8125 12.4375C5.8125 11.9197 5.39277 11.5 4.875 11.5C4.35723 11.5 3.9375 11.9197 3.9375 12.4375C3.9375 12.9553 4.35723 13.375 4.875 13.375Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M11.125 10.25C11.6428 10.25 12.0625 9.83027 12.0625 9.3125C12.0625 8.79473 11.6428 8.375 11.125 8.375C10.6072 8.375 10.1875 8.79473 10.1875 9.3125C10.1875 9.83027 10.6072 10.25 11.125 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M11.125 13.375C11.6428 13.375 12.0625 12.9553 12.0625 12.4375C12.0625 11.9197 11.6428 11.5 11.125 11.5C10.6072 11.5 10.1875 11.9197 10.1875 12.4375C10.1875 12.9553 10.6072 13.375 11.125 13.375Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M8 13.375C8.51777 13.375 8.9375 12.9553 8.9375 12.4375C8.9375 11.9197 8.51777 11.5 8 11.5C7.48223 11.5 7.0625 11.9197 7.0625 12.4375C7.0625 12.9553 7.48223 13.375 8 13.375Z"
                            className="fill-edpurple"
                          />
                        </svg>
                      </span>
                      <span>18 Dec, 2024</span>
                    </span>
                    <h6 className="font-semibold text-[15px] text-black">
                      <a
                        href="#"
                        className="hover:text-edpurple"
                      >
                        Keep Your Business Safe &amp; Endure High Availability
                      </a>
                    </h6>
                  </div>
                </div>
                {/* single post */}
                <div className="flex items-center gap-[16px]">
                  <div className="rounded-[6px] w-[78px] h-[79px] overflow-hidden shrink-0">
                    <img
                      src="assets/img/blog-2.png"
                      alt="Post Image"
                      className="h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="date text-[14px] text-edgray flex items-center gap-[12px] mb-[3px]">
                      <span className="icon">
                        <svg
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6756 4.42875C15.5769 2.78656 14.2056 1.5 12.5541 1.5H11.75V0.875C11.75 0.70924 11.6842 0.550268 11.5669 0.433058C11.4497 0.315848 11.2908 0.25 11.125 0.25C10.9592 0.25 10.8003 0.315848 10.6831 0.433058C10.5659 0.550268 10.5 0.70924 10.5 0.875V1.5H5.50001V0.875C5.50001 0.70924 5.43416 0.550268 5.31695 0.433058C5.19974 0.315848 5.04077 0.25 4.87501 0.25C4.70924 0.25 4.55027 0.315848 4.43306 0.433058C4.31585 0.550268 4.25001 0.70924 4.25001 0.875V1.5H3.44594C1.79407 1.5 0.422818 2.78656 0.32438 4.42875C0.139068 7.5175 0.142505 10.6506 0.334693 13.7409C0.432193 15.3103 1.68938 16.5675 3.25875 16.665C4.83157 16.7628 6.41563 16.8116 7.99969 16.8116C9.58344 16.8116 11.1678 16.7628 12.7406 16.665C14.31 16.5675 15.5672 15.3103 15.6647 13.7409C15.8572 10.6522 15.8606 7.51937 15.6756 4.42875ZM14.4175 13.6634C14.3885 14.1191 14.1944 14.5487 13.8716 14.8716C13.5487 15.1944 13.1192 15.3885 12.6634 15.4175C9.56907 15.6097 6.43094 15.6097 3.33657 15.4175C2.88086 15.3885 2.45134 15.1944 2.12845 14.8716C1.80557 14.5487 1.61147 14.1191 1.58251 13.6634C1.43601 11.2785 1.40296 8.88803 1.48344 6.5H14.5169C14.5956 8.8875 14.5653 11.2884 14.4175 13.6634ZM4.87501 4C5.04077 4 5.19974 3.93415 5.31695 3.81694C5.43416 3.69973 5.50001 3.54076 5.50001 3.375V2.75H10.5V3.375C10.5 3.54076 10.5659 3.69973 10.6831 3.81694C10.8003 3.93415 10.9592 4 11.125 4C11.2908 4 11.4497 3.93415 11.5669 3.81694C11.6842 3.69973 11.75 3.54076 11.75 3.375V2.75H12.5541C13.5456 2.75 14.3688 3.52031 14.4278 4.50344C14.4425 4.75156 14.4488 5.00125 14.4609 5.25H1.53907C1.55157 5.00125 1.55751 4.75156 1.57219 4.50344C1.63126 3.52031 2.45407 2.75 3.44594 2.75H4.25001V3.375C4.25001 3.54076 4.31585 3.69973 4.43306 3.81694C4.55027 3.93415 4.70924 4 4.87501 4Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M4.875 10.25C5.39277 10.25 5.8125 9.83027 5.8125 9.3125C5.8125 8.79473 5.39277 8.375 4.875 8.375C4.35723 8.375 3.9375 8.79473 3.9375 9.3125C3.9375 9.83027 4.35723 10.25 4.875 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M8 10.25C8.51777 10.25 8.9375 9.83027 8.9375 9.3125C8.9375 8.79473 8.51777 8.375 8 8.375C7.48223 8.375 7.0625 8.79473 7.0625 9.3125C7.0625 9.83027 7.48223 10.25 8 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M4.875 13.375C5.39277 13.375 5.8125 12.9553 5.8125 12.4375C5.8125 11.9197 5.39277 11.5 4.875 11.5C4.35723 11.5 3.9375 11.9197 3.9375 12.4375C3.9375 12.9553 4.35723 13.375 4.875 13.375Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M11.125 10.25C11.6428 10.25 12.0625 9.83027 12.0625 9.3125C12.0625 8.79473 11.6428 8.375 11.125 8.375C10.6072 8.375 10.1875 8.79473 10.1875 9.3125C10.1875 9.83027 10.6072 10.25 11.125 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M11.125 13.375C11.6428 13.375 12.0625 12.9553 12.0625 12.4375C12.0625 11.9197 11.6428 11.5 11.125 11.5C10.6072 11.5 10.1875 11.9197 10.1875 12.4375C10.1875 12.9553 10.6072 13.375 11.125 13.375Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M8 13.375C8.51777 13.375 8.9375 12.9553 8.9375 12.4375C8.9375 11.9197 8.51777 11.5 8 11.5C7.48223 11.5 7.0625 11.9197 7.0625 12.4375C7.0625 12.9553 7.48223 13.375 8 13.375Z"
                            className="fill-edpurple"
                          />
                        </svg>
                      </span>
                      <span>18 Dec, 2024</span>
                    </span>
                    <h6 className="font-semibold text-[15px] text-black">
                      <a
                        href="#"
                        className="hover:text-edpurple"
                      >
                        Make Your Own Expanding Contracting
                      </a>
                    </h6>
                  </div>
                </div>
                {/* single post */}
                <div className="flex items-center gap-[16px]">
                  <div className="rounded-[6px] w-[78px] h-[79px] overflow-hidden shrink-0">
                    <img
                      src="assets/img/blog-3.png"
                      alt="Post Image"
                      className="h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="date text-[14px] text-edgray flex items-center gap-[12px] mb-[3px]">
                      <span className="icon">
                        <svg
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6756 4.42875C15.5769 2.78656 14.2056 1.5 12.5541 1.5H11.75V0.875C11.75 0.70924 11.6842 0.550268 11.5669 0.433058C11.4497 0.315848 11.2908 0.25 11.125 0.25C10.9592 0.25 10.8003 0.315848 10.6831 0.433058C10.5659 0.550268 10.5 0.70924 10.5 0.875V1.5H5.50001V0.875C5.50001 0.70924 5.43416 0.550268 5.31695 0.433058C5.19974 0.315848 5.04077 0.25 4.87501 0.25C4.70924 0.25 4.55027 0.315848 4.43306 0.433058C4.31585 0.550268 4.25001 0.70924 4.25001 0.875V1.5H3.44594C1.79407 1.5 0.422818 2.78656 0.32438 4.42875C0.139068 7.5175 0.142505 10.6506 0.334693 13.7409C0.432193 15.3103 1.68938 16.5675 3.25875 16.665C4.83157 16.7628 6.41563 16.8116 7.99969 16.8116C9.58344 16.8116 11.1678 16.7628 12.7406 16.665C14.31 16.5675 15.5672 15.3103 15.6647 13.7409C15.8572 10.6522 15.8606 7.51937 15.6756 4.42875ZM14.4175 13.6634C14.3885 14.1191 14.1944 14.5487 13.8716 14.8716C13.5487 15.1944 13.1192 15.3885 12.6634 15.4175C9.56907 15.6097 6.43094 15.6097 3.33657 15.4175C2.88086 15.3885 2.45134 15.1944 2.12845 14.8716C1.80557 14.5487 1.61147 14.1191 1.58251 13.6634C1.43601 11.2785 1.40296 8.88803 1.48344 6.5H14.5169C14.5956 8.8875 14.5653 11.2884 14.4175 13.6634ZM4.87501 4C5.04077 4 5.19974 3.93415 5.31695 3.81694C5.43416 3.69973 5.50001 3.54076 5.50001 3.375V2.75H10.5V3.375C10.5 3.54076 10.5659 3.69973 10.6831 3.81694C10.8003 3.93415 10.9592 4 11.125 4C11.2908 4 11.4497 3.93415 11.5669 3.81694C11.6842 3.69973 11.75 3.54076 11.75 3.375V2.75H12.5541C13.5456 2.75 14.3688 3.52031 14.4278 4.50344C14.4425 4.75156 14.4488 5.00125 14.4609 5.25H1.53907C1.55157 5.00125 1.55751 4.75156 1.57219 4.50344C1.63126 3.52031 2.45407 2.75 3.44594 2.75H4.25001V3.375C4.25001 3.54076 4.31585 3.69973 4.43306 3.81694C4.55027 3.93415 4.70924 4 4.87501 4Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M4.875 10.25C5.39277 10.25 5.8125 9.83027 5.8125 9.3125C5.8125 8.79473 5.39277 8.375 4.875 8.375C4.35723 8.375 3.9375 8.79473 3.9375 9.3125C3.9375 9.83027 4.35723 10.25 4.875 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M8 10.25C8.51777 10.25 8.9375 9.83027 8.9375 9.3125C8.9375 8.79473 8.51777 8.375 8 8.375C7.48223 8.375 7.0625 8.79473 7.0625 9.3125C7.0625 9.83027 7.48223 10.25 8 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M4.875 13.375C5.39277 13.375 5.8125 12.9553 5.8125 12.4375C5.8125 11.9197 5.39277 11.5 4.875 11.5C4.35723 11.5 3.9375 11.9197 3.9375 12.4375C3.9375 12.9553 4.35723 13.375 4.875 13.375Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M11.125 10.25C11.6428 10.25 12.0625 9.83027 12.0625 9.3125C12.0625 8.79473 11.6428 8.375 11.125 8.375C10.6072 8.375 10.1875 8.79473 10.1875 9.3125C10.1875 9.83027 10.6072 10.25 11.125 10.25Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M11.125 13.375C11.6428 13.375 12.0625 12.9553 12.0625 12.4375C12.0625 11.9197 11.6428 11.5 11.125 11.5C10.6072 11.5 10.1875 11.9197 10.1875 12.4375C10.1875 12.9553 10.6072 13.375 11.125 13.375Z"
                            className="fill-edpurple"
                          />
                          <path
                            d="M8 13.375C8.51777 13.375 8.9375 12.9553 8.9375 12.4375C8.9375 11.9197 8.51777 11.5 8 11.5C7.48223 11.5 7.0625 11.9197 7.0625 12.4375C7.0625 12.9553 7.48223 13.375 8 13.375Z"
                            className="fill-edpurple"
                          />
                        </svg>
                      </span>
                      <span>18 Dec, 2024</span>
                    </span>
                    <h6 className="font-semibold text-[15px] text-black">
                      <a
                        href="#"
                        className="hover:text-edpurple"
                      >
                        Keep Your Business Safe &amp; Endure High Availability
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Tags widget */}
            <div className="bg-edoffwhite rounded-[10px] p-[30px] xxs:px-[20px] pt-[20px] xxs:pt-[10px]">
              <h4 className="font-semibold text-[18px] text-black border-b border-[#dddddd] relative pb-[11px] before:content-normal before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-[2px] before:bg-edpurple">
                Tags
              </h4>
              <div className="flex flex-wrap gap-[10px] mt-[30px]">
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Speaker
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Venue
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Tech
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Personal
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Digital
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Technology
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* MAIN CONTENT END */}
  </main>
</>

  )
}

export default Blog;
