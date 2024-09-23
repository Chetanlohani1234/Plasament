import React from 'react'

const Contact = () => {
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
    {/* CONTACT SECTION START */}
    <section className="py-[120px] xl:py-[80px] md:py-[60px]">
      <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-[60px] xl:gap-[40px] items-center">
          {/* left side contact infos */}
          <div className="rounded-[16px] overflow-hidden">
            <div className="bg-edpurple p-[40px] sm:p-[30px] xxs:p-[20px] space-y-[24px] text-[16px]">
              {/* single contact info */}
              <div className="flex flex-wrap xxs:flex-col items-center xxs:items-start gap-[20px] gap-y-[10px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
                <span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
                  <img src="assets/img/icon/call-msg.svg" alt="icon" />
                </span>
                <div className="txt">
                  <span className="font-normal">Call Us 7/24</span>
                  <h4 className="font-medium text-[24px] xxs:text-[22px]">
                    <a href="tel:+9548055756">+9548055756</a>
                  </h4>
                </div>
              </div>
              {/* single contact info */}
              <div className="flex flex-wrap xxs:flex-col items-center xxs:items-start gap-[20px] gap-y-[10px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
                <span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
                  <img src="assets/img/icon/mail-at.svg" alt="icon" />
                </span>
                <div className="txt">
                  <span className="font-normal">Make a Quote</span>
                  <h4 className="font-medium text-[24px] xxs:text-[22px]">
                    <a href="mailto:eventek@gmail.com">info@gmail.com</a>
                  </h4>
                </div>
              </div>
              {/* single contact info */}
              <div className="flex flex-wrap xxs:flex-col items-center xxs:items-start gap-[20px] gap-y-[10px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
                <span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
                  <img
                    src="assets/img/icon/location-dot-circle.svg"
                    alt="icon"
                  />
                </span>
                <div className="txt">
                  <span className="font-normal">Location</span>
                  <h4 className="font-medium text-[24px] xxs:text-[22px]">
                    53/1 Indra Colony.
                  </h4>
                </div>
              </div>
            </div>
            {/* video cover */}
            <div className="relative">
              <img
                src="assets/img/contact-video-cover.jpg"
                alt="video cover"
                className="w-full brightness-[80%]"
              />
              <a
                href="https://youtu.be/5ppDzM8m9lI?si=zml3HbV176DBsZlg"
                data-fslightbox=""
                className="video-btn-shadow w-[58px] aspect-square rounded-full bg-white text-[18px] text-edpurple flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
              >
                <i className="fa-solid fa-play" />
              </a>
            </div>
          </div>
          {/* right side contact form */}
          <div>
            <h2 className="text-[40px] md:text-[35px] sm:text-[30px] xxs:text-[28px] font-semibold text-edblue mb-[7px]">
              Ready to Get Started?
            </h2>
            <p className="text-edgray font-normal text-[16px] mb-[38px]">
              Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
              blandit felis odio in turpis. Quisque rhoncus, eros in auctor
              ultrices,
            </p>
            <form
              action="#"
              className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] xs:gap-[20px] text-[16px]"
            >
              <div>
                <label
                  htmlFor="ed-contact-name"
                  className="font-lato font-semibold text-edblue block mb-[12px]"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="ed-contact-name"
                  placeholder="Your Name"
                  className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="ed-contact-email"
                  className="font-lato font-semibold text-edblue block mb-[12px]"
                >
                  Your Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="ed-contact-email"
                  placeholder="Your Email"
                  className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                />
              </div>
              <div className="col-span-2 xxs:col-span-1">
                <label
                  htmlFor="ed-contact-message"
                  className="font-lato font-semibold text-edblue block mb-[12px]"
                >
                  Your Message*
                </label>
                <textarea
                  name="message"
                  id="ed-contact-message"
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
                  Send Message{" "}
                  <span className="icon pl-[10px]">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT SECTION END */}
  </main>
</>

  )
}

export default Contact;
