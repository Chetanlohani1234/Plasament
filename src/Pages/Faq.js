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
    <div className="container1">
      {/* First Section1: Q&A Section1 with form */}
      <div className="Section1 qna-Section1">
        <form className="form-Section1">
        <div className="form-group">
  <label htmlFor="college" style={{color:'#00a7ac'}}>College</label>
  <input className='input1' type="text" id="college" placeholder="Search course..." />
  
  <div className="checkbox-group1">
    {/* Specific names for each checkbox */}
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">LPU, Jalandhar - [544]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIM Indore, Indore - [383]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIM Ahmedabad, Ahmedabad - [381]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIT Bhubaneswar, Bhubaneswar - [349]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">IIM Mumbai, Mumbai - [322]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">BITS Pilani, Pilani - [321]</label>
    </div>
  </div>
</div>


          <div className="form-group">
  <label htmlFor="course" style={{color:'#00a7ac'}}>Course</label>
  <input className='input1' type="text" id="course" placeholder="Search course..." />
  
  <div className="checkbox-group1">
    {/* Specific names for each checkbox */}
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">MBA/PGDM - [47]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">PG Diploma in Management - [29]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">Executive MBA - [9]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">Graduate Certificate in Management - [5]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">M.Phil/Ph.D in Management - [3]</label>
    </div>
    <div>
      <input className='input1' type="checkbox" id="course-option" />
      <label className='labelName' htmlFor="course-option">BE/B.Tech - [1]</label>
    </div>
  </div>
</div>


        </form>
      </div>

      {/* Second Section1: Feed Section1 */}
      <div className="Section1 feed-Section1">
        <div className="feed-controls1">
          <input type="text" placeholder="Search..." className="feed-search" />
          
          <select className="filter-dropdown1">
            <option value="filter" style={{color:'black'}}>Filter</option>
            <option value="recent" style={{color:'black'}}>Most Recent</option>
            <option value="popular" style={{color:'black'}}>Most Popular</option>
          </select>
          <button className="add-question-btn" style={{height:'40px',fontSize:'10px'}}>Add Question</button>
        </div>

        <div className="feed-content1">
      {data.map((item, index) => (
        <div className="content-Section1" key={index}>
          {/* Top button group with space between two buttons */}
          {/* <div className="button-group top">
            <button>Info</button>
            <div style={{ flexGrow: 1 }}></div> 
            <button>Jamshedpur</button>
          </div> */}

          {/* Question and Answer Section1 */}
          <div className="question-answer1">
            <div className="question">
              <strong>{item.question}</strong>
            </div>

            <div className="add-answer1">
              {showFullAnswer[index] ? item.answer : `${item.answer.substring(0, 100)}...`}
              <button className="read-more1" onClick={() => toggleReadMore(index)}>
                {showFullAnswer[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Bottom button group */}


          {/* Like, Dislike, and Share icons */}
          <div className="actions1">
            <button className="like-btn">👍 Like</button>
            <button className="dislike-btn">👎 Dislike</button>
            <button className="share-btn">🔗 Share</button>
          </div>
        </div>
      ))}
    </div>
      </div>

      {/* Third Section1: Div with image, heading, buttons, and Q&A */}
      <div className="Section1 third-Section1">
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
      <h2 className="title1">Most Viewed Questions</h2>
      <div className="qa-container1">
        <div className="qa-part">
          {data.map((qa, index) => (
            <div className="qa-pair" key={index}>
              <div className="question">{qa.question}</div>
              <div className="answer">
                {/* Show either truncated or full answer */}
                {showFullAnswer[index] ? qa.answer : `${qa.answer.substring(0, 100)}...`}
                <button className="read-more1" onClick={() => toggleReadMore(index)}>
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

