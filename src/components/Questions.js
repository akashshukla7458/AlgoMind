import React, { useState, useEffect } from 'react';
import QuestionData from '../services/QuestionData';
import { getFirestore, collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import './Questions.css'
import { AlgoState } from '../Context';

const QuestionsTable = ({ topicName }) => {
  const { user } = AlgoState()
  const [questions, setQuestions] = useState([]);
  const userId = user ? user.uid : null;


  useEffect(() => {
    const filteredQuestions = QuestionData.filter(q => q.topicName === topicName);
    setQuestions(filteredQuestions);
  }, [topicName]);

  useEffect(() => {
    if (!userId) return;

    const db = getFirestore();
    const q = query(collection(db, 'questionsDone'), where('userId', '==', userId), where('topicName', '==', topicName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const doneQuestions = querySnapshot.docs.map((doc) => doc.data().question);
      const newQuestions = [...questions];
      newQuestions.forEach((q) => {
        q.questions.forEach((question) => {
          question.done = doneQuestions.includes(question.Problem);
        });
      });
      setQuestions(newQuestions);
    });
    return () => unsubscribe();
  }, [userId, topicName, questions]);





  const handleDoneChange = async (question, done) => {
    const db = getFirestore();
    if (!question) {
      console.error('Error: question is undefined');
      return;
    }
    try {
      await addDoc(collection(db, 'questionsDone'), {
        userId,
        topicName,
        question,
        done,
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <div className='Table_content'>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Problem</th>
            {/* <th>Bookmark</th> */}
            <th>URL 1</th>
            <th>URL 2</th>
            <th>Mark As Done</th>
          </tr>
        </thead>
        <tbody>



          {questions.map((q, index) => (
            q.questions.map((question, qIndex) => (




              <tr key={qIndex}>
                <td>{index * q.questions.length + qIndex + 1}</td>
                <td>{question.Problem}</td>
                <td><a href={question.URL} target="_blank" rel="noreferrer" className='QLinks'>{question.URL !== undefined ? "Link 1" : ""}</a></td>
                <td><a href={question.URL2} target="_blank" rel="noreferrer" className='QLinks'>{question.URL2 !== undefined ? "Link 2" : ""}</a></td>
                <td>
                  <input
                    type="checkbox"
                    checked={question.done||false}
                    onChange={(e) => {
                      const newQuestions = [...questions];
                      newQuestions[index].questions[qIndex].done = e.target.checked;
                      setQuestions(newQuestions);
                      handleDoneChange(question.Problem, e.target.checked);
                    }}
                  />
                  {question.done ? "😎" : ''}
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
