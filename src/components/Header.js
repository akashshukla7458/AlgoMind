import React from 'react'
import { useHistory } from 'react-router-dom';
import ai from '../assests/ai.png'
import './header.css'
const Header = () => {
  const history= useHistory();
  const handleClick = () => {
    history.push('/topiccard')
  }
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Ace Your Campus Placements with AlgoMind</h1>
        <p>Ready to dominate your campus placement exams? Look no further, AlgoMind has got you covered! With our comprehensive DSA tracking tools, you'll be on your way to acing your placements in no time.</p>


        <button className='button' type="button" onClick={handleClick}>Get Started</button>
      </div>


      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  )
}

export default Header
