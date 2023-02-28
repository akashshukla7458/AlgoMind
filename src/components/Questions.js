import React from 'react';
import QuestionData from '../services/QuestionData';

const QuestionsTable = ({ topicName }) => {
  const questions = QuestionData.filter(q => q.topicName === topicName);
   console.log('questions',questions)
  
  return (
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
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{q.Problem}</td>
            <td>{q.Done !== undefined ? q.Done.toString() : ""}</td>
            <td>{q.Bookmark !== undefined ? q.Bookmark.toString() : ""}</td>
            <td>{q.Notes !== undefined ? q.Notes : ""}</td>
            <td><a href={q.URL}>{q.URL !== undefined ? q.URL : ""}</a></td>
            <td><a href={q.URL2}>{q.URL2 !== undefined ? q.URL2 : ""}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionsTable;
