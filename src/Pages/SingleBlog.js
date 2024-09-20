import React from 'react'

const SingleBlog = () => {
  return (
    <>

     <main>
  {/* MAIN CONTENT START */}
  <div className="ed-event-details-content py-[120px] xl:py-[80px] md:py-[60px]">
    <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
      <div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
        {/* left content */}
        <div className="left grow space-y-[40px] md:space-y-[30px]">
          {/* post */}
          <div>
            <div className="img overflow-hidden rounded-[8px] mb-[30px] relative">
              <img
                src="assets/img/news-details-img-1.jpg"
                alt="news-cover"
                className="max-h-[380px] max-w-full aspect-[770/380]"
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
              <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-semibold text-black mb-[18px]">
                <a href="news-details.html" className="hover:text-edpurple">
                  Make Your Expanding Contracting Content
                </a>
              </h3>
              <p className="font-normal text-[16px] text-edgray mb-[16px]">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                made of owl the quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                dolor in reprehenderit.
              </p>
              <p className="font-normal text-[16px] text-edgray mb-[16px]">
                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                eleifend porta arcu In hac habitasse the is platea augue
                thelorem turpoi dictumst. In lacus libero faucibus at malesuada
                sagittis placerat eros sed istincidunt augue ac ante rutrum sed
                the is sodales augue consequat.
              </p>
              <p className="font-normal text-[16px] text-edgray mb-[16px]">
                Nulla facilisi. Vestibulum tristique sem in eros eleifend
                imperdiet. Donec quis convallis neque. In id lacus pulvinar
                lacus, eget vulputate lectus. Ut viverra bibendum lorem, at
                tempus nibh mattis in. Sed a massa eget lacus consequat auctor.
              </p>
              {/* img */}
              <div className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px] mt-[32px] mb-[33px]">
                <img
                  src="assets/img/news-details-img-2.jpg"
                  alt="Image"
                  className="rounded-[10px]"
                />
                <img
                  src="assets/img/news-details-img-3.jpg"
                  alt="Image"
                  className="rounded-[10px]"
                />
              </div>
              <p className="font-normal text-[16px] text-edgray mb-[16px]">
                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                eleifend porta arcu In hac sodales habitasse the is platea augue
                thelorem turpoi dictumst. In lacus libero faucibus at malesuada
                sagittis placerat eros sed istincidunt augue ac ante rutrum sed
                the is augue consequat.
              </p>
              <blockquote className="bg-edoffwhite italic rounded-[10px] px-[40px] xxs:p-[25px] pr-[120px] xxs:pr-[100px] py-[30px] mt-[32px] mb-[28px] relative text-[16px] font-normal">
                Pellentesque sollicitudin congue dolor non aliquam. Morbi
                volutpat, nisi vel ultricies urnacondimentum, sapien neque
                lobortis tortor, quis efficitur mi eu metus. Praesent eleifend
                orci sit amet est vehicula.
                <span className="icon absolute right-[40px] bottom-[35px]">
                  <svg
                    width={36}
                    height={26}
                    viewBox="0 0 36 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15.3691H7.71428L2.57139 25.5539H10.2857L15.4286 15.3691V0.0917969H0V15.3691Z"
                      className="fill-edpurple"
                    />
                    <path
                      d="M20.5703 0.0917969V15.3691H28.2846L23.1417 25.5539H30.856L35.9989 15.3691V0.0917969H20.5703Z"
                      className="fill-edpurple"
                    />
                  </svg>
                </span>
              </blockquote>
              <p className="font-normal text-[16px] text-edgray mb-[16px]">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                made of owl the quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                dolor in reprehenderit.
              </p>
            </div>
          </div>
          {/* actions */}
          <div className="border-y border-[#d9d9d9] py-[24px] flex items-center justify-between xs:flex-col xs:items-start gap-[20px]">
            <div className="flex gap-[28px] items-center">
              {/* tags  */}
              <h6 className="font-medium text-[16px] text-black">Tags:</h6>
              <div className="flex flex-wrap gap-[13px]">
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Course
                </a>
                <a
                  href="#"
                  className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-edpurple hover:border-edpurple hover:text-white"
                >
                  Education
                </a>
              </div>
            </div>
            {/* share options */}
            <div className="flex gap-[28px] items-center">
              <h6 className="font-medium text-[16px] text-black">Share:</h6>
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
          {/* comments */}
          <div className="!mt-[60px] xxs:!mt-[30px]">
            <h5 className="font-medium text-[24px] text-black mb-[32px] xxs:mb-[20px]">
              02 Comments
            </h5>
            <div className="all-comments space-y-[40px] xxs:space-y-[25px]">
              {/* single comment */}
              <div className="ed-event-details-comment flex xxs:flex-col items-start gap-x-[20px] pb-[40px] xxs:pb-[25px] border-b border-[#ECECEC]">
                <div className="user-img rounded-full overflow-hidden w-[96px] h-[96px] shrink-0">
                  <img
                    src="assets/img/user-2.png"
                    alt="user"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="pt-[17px]">
                  <div className="user-info mb-[19px]">
                    <h5 className="user-name font-medium text-[20px] text-black mb-[9px]">
                      Ralph edwards
                    </h5>
                    <h6 className="font-normal text-[16px] text-edgray">
                      February 10, 2024 at 2:37 pm
                    </h6>
                  </div>
                  <div className="comment">
                    <p className="text-[16px] text-edgray2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit voluptatum quaerat nemo eaque delectus ratione
                      maiores expedita pariatur illum facilis at repellendus
                      nesciunt veniam animi, omnis corrupti reiciendis explicabo
                      itaque id.
                    </p>
                  </div>
                  <button className="h-[30px] px-[16px] bg-edpurple text-[14px] text-white rounded-[6px] mt-[22px] hover:bg-black">
                    Reply
                  </button>
                </div>
              </div>
              {/* single comment */}
              <div className="ed-event-details-comment flex xxs:flex-col items-start gap-x-[20px] pb-[40px] xxs:pb-[25px] border-b border-[#ECECEC]">
                <div className="user-img rounded-full overflow-hidden w-[96px] h-[96px] shrink-0">
                  <img
                    src="assets/img/user-4.png"
                    alt="user"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="pt-[17px]">
                  <div className="user-info mb-[19px]">
                    <h5 className="user-name font-medium text-[20px] text-black mb-[9px]">
                      Esther Howard
                    </h5>
                    <h6 className="font-normal text-[16px] text-edgray">
                      February 10, 2024 at 2:37 pm
                    </h6>
                  </div>
                  <div className="comment">
                    <p className="text-[16px] text-edgray2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit voluptatum quaerat nemo eaque delectus ratione
                      maiores expedita pariatur illum facilis at repellendus
                      nesciunt veniam animi, omnis corrupti reiciendis explicabo
                      itaque id.
                    </p>
                  </div>
                  <button className="h-[30px] px-[16px] bg-edpurple text-[14px] text-white rounded-[6px] mt-[22px] hover:bg-black">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* comment form */}
          <div className="!mt-[60px] xxs:!mt-[30px]">
            <h5 className="font-medium text-[24px] text-black mb-[32px] xxs:mb-[20px]">
              Leave a Comment
            </h5>
            <form
              action="#"
              className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px]"
            >
              <div>
                <label
                  htmlFor="ed-comment-form-name"
                  className="block mb-[11px] font-medium text-[16px] text-black"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="ed-comment-form-name"
                  placeholder="Your Name"
                  className="h-[60px] xxs:h-[50px] text-[16px] px-[20px] xxs:px-[15px] rounded-[4px] border border-[#E5E5E5] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="ed-comment-form-email"
                  className="block mb-[11px] font-medium text-[16px] text-black"
                >
                  Your Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="ed-comment-form-email"
                  placeholder="Your Email"
                  className="text-[16px] h-[60px] xxs:h-[50px] px-[20px] xxs:px-[15px] rounded-[4px] border border-[#E5E5E5] w-full focus:outline-none"
                />
              </div>
              <div className="col-span-2 xxs:col-span-1">
                <label
                  htmlFor="ed-comment-form-message"
                  className="block mb-[11px] font-medium text-[16px] text-black"
                >
                  Your Review*
                </label>
                <textarea
                  name="message"
                  id="ed-comment-form-message"
                  placeholder="Write Message"
                  className="h-[200px] text-[16px] py-[18px] px-[20px] xxs:px-[15px] rounded-[4px] border border-[#E5E5E5] w-full focus:outline-none"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-edpurple h-[55px] px-[24px] rounded-[8px] text-white text-[16px] hover:bg-black"
                >
                  Post Comment{" "}
                  <span className="pl-[5px]">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </button>
              </div>
            </form>
          </div>
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
              <button type="submit" className="text-[16px] hover:text-edpurple">
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
                    <a href="news-details.html" className="hover:text-edpurple">
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
                    <a href="news-details.html" className="hover:text-edpurple">
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
                    <a href="news-details.html" className="hover:text-edpurple">
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

export default SingleBlog
