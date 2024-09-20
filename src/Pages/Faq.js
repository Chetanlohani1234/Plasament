import React from 'react'

const Faq = () => {
  return (
    <>

<main>
  {/* FAQ SECTION START */}
  <section className="ed-faq py-[120px] xl:py-[80px] md:py-[60px]">
    <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
      {/* faq section */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-x-[70px] xl:gap-x-[50px] lg:gap-x-[30px] gap-y-[40px]">
        <div>
          <img
            src="assets/img/faq-img.jpg"
            alt="image"
            className="rounded-[8px] h-full object-cover"
          />
        </div>
        <div>
          {/* heading */}
          <div className="mb-[22px]">
            <h6 className="ed-section-sub-title">Ask Questions</h6>
            <h2 className="ed-section-title">Frequently Asked Questions</h2>
          </div>
          <div className="ed-accordion space-y-[16px]">
            {/* single question */}
            <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px]">
              <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                  How long should a business plan be?
                </h3>
                <span className="text-[15px]">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </div>
              <div className="ed-single-accordion-item__body">
                <p className="font-light text-[16px] text-etGray">
                  Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
                  massa, quis semper odio. Mauris et mollis quam. Nullam
                  fringilla erat id ante commodo sodales. In maximus ultrices
                  euismod. Vivamus porta justo ex.
                </p>
              </div>
            </div>
            {/* single question */}
            <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] open">
              <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                  What is included in your services?
                </h3>
                <span className="text-[15px]">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </div>
              <div className="ed-single-accordion-item__body">
                <p className="font-light text-[16px] text-etGray">
                  Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
                  massa, quis semper odio. Mauris et mollis quam. Nullam
                  fringilla erat id ante commodo sodales. In maximus ultrices
                  euismod. Vivamus porta justo ex.
                </p>
              </div>
            </div>
            {/* single question */}
            <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px]">
              <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                  What type of company is measured?
                </h3>
                <span className="text-[15px]">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </div>
              <div className="ed-single-accordion-item__body">
                <p className="font-light text-[16px] text-etGray">
                  Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
                  massa, quis semper odio. Mauris et mollis quam. Nullam
                  fringilla erat id ante commodo sodales. In maximus ultrices
                  euismod. Vivamus porta justo ex.
                </p>
              </div>
            </div>
            {/* single question */}
            <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px]">
              <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                  What type of company is measured?
                </h3>
                <span className="text-[15px]">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </div>
              <div className="ed-single-accordion-item__body">
                <p className="font-light text-[16px] text-etGray">
                  Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
                  massa, quis semper odio. Mauris et mollis quam. Nullam
                  fringilla erat id ante commodo sodales. In maximus ultrices
                  euismod. Vivamus porta justo ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ SECTION END */}
</main>

      
    </>
  )
}

export default Faq
