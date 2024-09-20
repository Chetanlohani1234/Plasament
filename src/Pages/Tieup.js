import React,{useState} from 'react';
import './tieup.css';

const PartnerAndTieUps = () => {
  
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="partner-container">
      <img
        src="assets/img/ppac1.jpg" // Replace with your image URL
        alt="Partnership"
        className="partner-image"
      />
      <h1 className="title">PPAC</h1>
      <p className="description">
      Be a Pure Professional Affiliate Consultant.
      </p>
      <div className="partner-list">
        <div className="partner-item">
          <h2>Pure Professional Skill Development Institute</h2>
          <p>An opportunity to transform your career awaits! A Pure Professional
             Affiliate Consultant (PPAC) earns commissions by selling products and
              courses from the Pure Professional Skill Development Institute. Our 
              extensive offerings include training in accounts, digital marketing,
               human resource management, Excel, business law, mathematics, 
               personality development, English speaking, and degrees such as 
               B.Com, MBA, BCA, M.Com, BBA, MCA, B.Voc, M.Voc and D.Voc. We also 
               offer specialized courses in accounts, finance, taxation, human 
               resource management, marketing, and CA Article ship training for 
               aspiring accountants. Additionally, we provide a foundation course 
               and certificates in
             accounting, finance, taxation, HR, marketing, and Digital marketing.</p>
        </div>

        <div className="partner-item">
            <h2>Benefits of PPAC</h2>
            <ul className="benefits-list">
                <li>Low Investment <span className="benefit-detail">Minimal initial investment is required, making it accessible to a wide audience.</span></li>
                <li>Unlimited Earnings Potential <span className="benefit-detail">No limit on earnings, allowing affiliates to scale their income based on effort and performance.</span></li>
                <li>Lifetime Learning <span className="benefit-detail">Access to continuous learning opportunities from various Chartered Accountants and Professors.</span></li>
                <li>Certification and Branding<span className='benefit-detail'>Gain official branding as a certified PPAC, enhancing professional credibility and marketability.</span></li>
            </ul>
        </div>
     
         <h1 className='title'>Industry TIE-UP</h1>
         <p className='description'>Earning from ₹1 lakh – ₹20 lakh</p>
        <div className="partner-item">
            <h2>Benefits of Industry TIE-UP</h2>
            <ul className="benefits-list">
                <li>Ready-to-Go Business Model <span className="benefit-detail">You don’t need to reinvent the wheel. We provide you with a comprehensive business model that’s already been tested and proven effective. This means you can hit the ground running without the guesswork of starting from scratch.</span></li>
                <li>Proven Track Record <span className="benefit-detail">We’ve established a strong presence in the e-learning industry with a track record of success. Our platform has garnered trust and recognition, making it easier for franchisees to attract students.</span></li>
                <li>Extensive Support System <span className="benefit-detail">Access to continuous learning opportunities from various Chartered Accountants and Professors.</span></li>
                <li>Certification and Branding<span className='benefit-detail'>Gain official branding as a certified PPAC, enhancing professional credibility and marketability.</span></li>
            </ul>
        </div>

      </div>


      <button className="earn-us-button" onClick={openForm}>
        Earn Us
      </button>

      {/* Popup Form */}
      {isFormOpen && (
        <div className="form-popup">
          <div className="form-popup-content">
            <h2>Fill Your Details</h2>
            <form className="earn-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter your mobile number" required />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" placeholder="Enter your state" required />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter your city" required />
              </div>
              <div className="form-group">
                <label>Profession</label>
                <input type="text" placeholder="Enter your profession" required />
              </div>
              <div className="form-group">
                <label>Additional Information</label>
                <textarea placeholder="Enter additional information" />
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                <button type="button" className="cancel-button" onClick={closeForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
 
         

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you are interested in a partnership, please reach out!</p>
        <a href="mailto:info@example.com" className="contact-button">Contact Us</a>

        <h2>Stay Connected with Us</h2>
        <p>Let’s Create Together</p>
        <p>Connect with us to explore how we can make your vision a reality. Join us in shaping the future.</p>
        <p className="phone-number">+91 7065312312</p>
      </div>

      <br/><br/>

          {/* CTA SECTION START */}
    <section className="ed-2-cta overflow-hidden bg-edpurple pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(../assets/img/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
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


    </div>
  );
};

export default PartnerAndTieUps;
