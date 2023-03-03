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
    <div>
    <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Problem</th>
          <th>Done</th>
          <th>Bookmark</th>
          <th>Notes</th>
          <th>URL</th>
          <th>URL2</th>
        </tr>
      </thead>
      <tbody>
      {questions.map((q, index) => (
    q.questions.map((question, qIndex) => (
      <tr key={qIndex}>
        {/* <td>{index + 1}</td> */}
        <td>{index * q.questions.length + qIndex + 1}</td>
        <td>{question.Problem}</td>
        <td>{question.Done !== undefined ? question.Done.toString() : ""}</td>
        <td>{question.Bookmark !== undefined ? question.Bookmark.toString() : ""}</td>
        <td>{question.Notes !== undefined ? question.Notes : ""}</td>
        <td><a href={question.URL}>{question.URL !== undefined ? question.URL : ""}</a></td>
        <td><a href={question.URL2}>{question.URL2 !== undefined ? question.URL2 : ""}</a></td>
      </tr>
    ))
  ))}
      </tbody>
    </table>
    </div>
  );
};

export default QuestionsTable;
