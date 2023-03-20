import React from 'react'
import './Topiccard.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import QuestionData from '../services/QuestionData'




const TopicCard = () => {
  const topics = [...new Set(QuestionData.map((q) => q.topicName))];

  // create an object with separate arrays for each topic
  const questionsByTopic = {};
  topics.forEach((topic) => {
    questionsByTopic[topic] = QuestionData.filter((q) => q.topicName === topic);
  });

  
  function getBgClass(topic, index) {
    switch (topic) {
      case 'Array':
        return `bg-${index % 6}`;
        case 'Sorting':
        return `bg-${(index + 1) % 6}`;
        // add more cases for other topics
        default:
        return '';
    }
  }
  
  return (
    <div className='body gradient__bg '>
      <Navbar />


      {/* <div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

  */
      }

      {/* {topics.map((topic) => (
        <div key={topic}>

          <div className="ag-courses_box">
            {questionsByTopic[topic].map((q, index) => (
              <div className="ag-courses_item" key={index}>
                <a href={q.URL} className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">{topic}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))} */}




      {topics.map((topic) => (
        <div key={topic}>
          <div className="ag-courses_box">
            {questionsByTopic[topic].map((q, index) => (
              <div className={`ag-courses_item ${getBgClass(topic, index)}`} key={index}>
                <Link to={q.topicName} className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">{topic}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}


      
    </div>
  )
}

export default TopicCard
