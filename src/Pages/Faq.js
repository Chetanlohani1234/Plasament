// import React from 'react'

// const Faq = () => {
//   return (
//     <>

// <main>
//   {/* FAQ SECTION START */}
//   <section className="ed-faq py-[120px] xl:py-[80px] md:py-[60px]">
//     <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
//       {/* faq section */}
//       <div className="grid grid-cols-2 md:grid-cols-1 gap-x-[70px] xl:gap-x-[50px] lg:gap-x-[30px] gap-y-[40px]">
//         <div>
//           <img
//             src="assets/img/faq-img.jpg"
//             alt="image"
//             className="rounded-[8px] h-full object-cover"
//           />
//         </div>
//         <div>
//           {/* heading */}
//           <div className="mb-[22px]">
//             <h6 className="ed-section-sub-title">Ask Questions</h6>
//             <h2 className="ed-section-title">Frequently Asked Questions</h2>
//           </div>
//           <div className="ed-accordion space-y-[16px]">
//             {/* single question */}
//             <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px]">
//               <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
//                 <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
//                   How long should a business plan be?
//                 </h3>
//                 <span className="text-[15px]">
//                   <i className="fa-solid fa-angles-right" />
//                 </span>
//               </div>
//               <div className="ed-single-accordion-item__body">
//                 <p className="font-light text-[16px] text-etGray">
//                   Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
//                   massa, quis semper odio. Mauris et mollis quam. Nullam
//                   fringilla erat id ante commodo sodales. In maximus ultrices
//                   euismod. Vivamus porta justo ex.
//                 </p>
//               </div>
//             </div>
//             {/* single question */}
//             <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] open">
//               <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
//                 <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
//                   What is included in your services?
//                 </h3>
//                 <span className="text-[15px]">
//                   <i className="fa-solid fa-angles-right" />
//                 </span>
//               </div>
//               <div className="ed-single-accordion-item__body">
//                 <p className="font-light text-[16px] text-etGray">
//                   Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
//                   massa, quis semper odio. Mauris et mollis quam. Nullam
//                   fringilla erat id ante commodo sodales. In maximus ultrices
//                   euismod. Vivamus porta justo ex.
//                 </p>
//               </div>
//             </div>
//             {/* single question */}
//             <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px]">
//               <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
//                 <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
//                   What type of company is measured?
//                 </h3>
//                 <span className="text-[15px]">
//                   <i className="fa-solid fa-angles-right" />
//                 </span>
//               </div>
//               <div className="ed-single-accordion-item__body">
//                 <p className="font-light text-[16px] text-etGray">
//                   Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
//                   massa, quis semper odio. Mauris et mollis quam. Nullam
//                   fringilla erat id ante commodo sodales. In maximus ultrices
//                   euismod. Vivamus porta justo ex.
//                 </p>
//               </div>
//             </div>
//             {/* single question */}
//             <div className="ed-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px]">
//               <div className="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
//                 <h3 className="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
//                   What type of company is measured?
//                 </h3>
//                 <span className="text-[15px]">
//                   <i className="fa-solid fa-angles-right" />
//                 </span>
//               </div>
//               <div className="ed-single-accordion-item__body">
//                 <p className="font-light text-[16px] text-etGray">
//                   Nullam faucibus eleifend mi eu varius. Integer vel tincidunt
//                   massa, quis semper odio. Mauris et mollis quam. Nullam
//                   fringilla erat id ante commodo sodales. In maximus ultrices
//                   euismod. Vivamus porta justo ex.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* FAQ SECTION END */}
// </main>

      
//     </>
//   )
// }

// export default Faq

import React,{useState} from 'react';
import './Faq.css';

const Faq = () => {

  const data = [
    {
      question: 'Question 1',
      answer:
        'This is the answer to Question 1. It contains a longer text to demonstrate the "Read More" functionality.',
    },
    {
      question: 'Question 2',
      answer:
        'This is the answer to Question 2. It also has more text to show how answers can be truncated and expanded.',
    },
    {
      question: 'Question 3',
      answer:
        'This is the answer to Question 3. You can click on the "Read More" button to expand this text.',
    },
  ];

  // Component to handle truncated text and read more functionality
  const [showFullAnswer, setShowFullAnswer] = useState(Array(data.length).fill(false));

  const toggleReadMore = (index) => {
    const updatedState = [...showFullAnswer];
    updatedState[index] = !updatedState[index];
    setShowFullAnswer(updatedState);
  };

  return (
    <div className="container">
      {/* First Section: Q&A Section with form */}
      <div className="section qna-section">
        <form className="form-section">
        <div className="form-group">
  <label htmlFor="college" style={{color:'#00a7ac'}}>College</label>
  <input type="text" id="college" placeholder="Search course..." />
  
  <div className="checkbox-group">
    {/* Specific names for each checkbox */}
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">LPU, Jalandhar - [544]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIM Indore, Indore - [383]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIM Ahmedabad, Ahmedabad - [381]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIT Bhubaneswar, Bhubaneswar - [349]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIM Mumbai, Mumbai - [322]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">BITS Pilani, Pilani - [321]</label>
    </div>
  </div>
</div>


          <div className="form-group">
  <label htmlFor="course" style={{color:'#00a7ac'}}>Course</label>
  <input type="text" id="course" placeholder="Search course..." />
  
  <div className="checkbox-group">
    {/* Specific names for each checkbox */}
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">MBA/PGDM - [47]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">PG Diploma in Management - [29]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">Executive MBA - [9]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">Graduate Certificate in Management - [5]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">M.Phil/Ph.D in Management - [3]</label>
    </div>
    <div>
      <input type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">BE/B.Tech - [1]</label>
    </div>
  </div>
</div>


        </form>
      </div>

      {/* Second Section: Feed Section */}
      <div className="section feed-section">
        <div className="feed-controls">
          <input type="text" placeholder="Search..." className="feed-search" />
          <button className="add-question-btn">Add Question</button>
          <select className="filter-dropdown">
            <option value="filter" style={{color:'black'}}>Filter</option>
            <option value="recent" style={{color:'black'}}>Most Recent</option>
            <option value="popular" style={{color:'black'}}>Most Popular</option>
          </select>
        </div>

        <div className="feed-content">
      {data.map((item, index) => (
        <div className="content-section" key={index}>
          {/* Top button group with space between two buttons */}
          <div className="button-group top">
            <button>Info</button>
            <div style={{ flexGrow: 1 }}></div> {/* Spacer */}
            <button>Jamshedpur</button>
          </div>

          {/* Question and Answer Section */}
          <div className="question-answer">
            <div className="question">
              <strong>{item.question}</strong>
            </div>

            <div className="answer">
              {showFullAnswer[index] ? item.answer : `${item.answer.substring(0, 100)}...`}
              <button className="read-more" onClick={() => toggleReadMore(index)}>
                {showFullAnswer[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Bottom button group */}


          {/* Like, Dislike, and Share icons */}
          <div className="actions">
            <button className="like-btn">👍 Like</button>
            <button className="dislike-btn">👎 Dislike</button>
            <button className="share-btn">🔗 Share</button>
          </div>
        </div>
      ))}
    </div>
      </div>

      {/* Third Section: Div with image, heading, buttons, and Q&A */}
      <div className="section third-section">
        {/* <div className="first-div">
          <div className="image-part">
            <img src="https://via.placeholder.com/100" alt="placeholder" />
          </div>
          <div className="info-part">
            <h2>Heading</h2>
            <div className="button-container">
              <button className="btn">Button 1</button>
              <button className="btn">Button 2</button>
            </div>
          </div>
        </div> */}

<div className="second-div">
      <h2 className="title">Most Viewed Questions</h2>
      <div className="qa-container">
        <div className="qa-part">
          {data.map((qa, index) => (
            <div className="qa-pair" key={index}>
              <div className="question">{qa.question}</div>
              <div className="answer">
                {/* Show either truncated or full answer */}
                {showFullAnswer[index] ? qa.answer : `${qa.answer.substring(0, 100)}...`}
                <button className="read-more" onClick={() => toggleReadMore(index)}>
                  {showFullAnswer[index] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Faq;

