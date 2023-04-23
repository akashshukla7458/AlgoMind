import React, { useState, useEffect }  from 'react';
import QuestionData from '../services/QuestionData';
import './Questions.css'

const QuestionsTable = ({ topicName }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const filteredQuestions = QuestionData.filter(q => q.topicName === topicName);
    setQuestions(filteredQuestions);
    // console.log(filteredQuestions);
  }, [topicName]);
  
  return (
    <div className='Table_content'>
    <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Problem</th>
          <th>Bookmark</th>
          <th>Notes</th>
          <th>URL 1</th>
          <th>URL 2</th>
          <th>Mark As Done</th>
        </tr>
      </thead>
      <tbody>
      {questions.map((q, index) => (
    q.questions.map((question, qIndex) => (
      <tr key={qIndex}>
        {/* <td>{index + 1}</td> */}
        <td>{index * q.questions.length + qIndex + 1}</td>
        <td>{question.Problem}</td>
        <td>{question.Bookmark !== undefined ? question.Bookmark.toString() : ""}</td>
        <td>{question.Notes !== undefined ? question.Notes : ""}</td>
        <td className='Linktable'><a href={question.URL} target="_blank" rel="noreferrer" className='QLinks'>{question.URL !== undefined ? "Link 1" : ""}</a></td>
        <td className='Linktable'><a href={question.URL2} target="_blank" rel="noreferrer" className='QLinks'>{question.URL2 !== undefined ? "Link 2" : ""}</a></td>
        <td><input type="checkbox" ></input></td>        
      </tr>
    ))
  ))}
      </tbody>
    </table>
    </div>
  );
};

export default QuestionsTable;
