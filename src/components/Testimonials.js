import React from 'react'
import './Testimonials.css';
import tim1 from '../assests/1.png';
import tim2 from '../assests/2.png';
import tim3 from '../assests/3.png';


const Testimonials = () => {
  return (
    <div className='Testimonials_Section section__padding'>
      <h1 className='gradient__text'>Algomind's DSA Questions: Helping Students Excel in Coding Careers</h1>
      <h2>Real Success Stories from Our Students Who Used Algomind to Ace Coding Rounds</h2>
      <div className='testimonials section__padding'>
      <div className='avatar_image'>
        <img src={tim1} alt=" Testimonial 1" />
      </div>
      <div className='testimonials-content'>
        <h1 className='gradient__text'>"Algomind Helped Me Ace My Coding Interviews!"</h1>
        <p>"Before using Algomind, I struggled with DSA questions and felt unsure about my abilities. However, after using Algomind for just a few weeks, I noticed a significant improvement in my understanding and problem-solving skills. The questions are challenging yet achievable, and I felt much more confident going into my coding interviews. Thanks to Algomind, I was able to secure a job offer from my dream company!"</p>
        <h4>Sarah, (Algomind user)</h4>
      </div>
      </div>

      <div className='testimonials section__padding tstmnl2'>
      <div className='avatar_image testimonial2_image'>
        <img src={tim2} alt=" Testimonial 2" />
      </div>
      <div className='testimonials-content tstmnl2_content'>
        <h1 className='gradient__text'>"Maximize Your Potential with Algomind's Top DSA Questions!"</h1>
        <p>"I've tried a lot of different study materials for coding interviews, but nothing compares to Algomind. The questions are thoughtfully curated and cover a wide range of topics, so I never feel like I'm wasting my time. Plus, the platform is user-friendly and easy to navigate. Algomind has definitely helped me maximize my potential and take my coding skills to the next level."</p>
        <h4>Akash, (Algomind user)</h4>
      </div>
      </div>

      <div className='testimonials section__padding'>
      <div className='avatar_image'>
        <img src={tim3} alt=" Testimonial 3" />
      </div>
      <div className='testimonials-content'>
        <h1 className='gradient__text'>"Revolutionize Your Coding Journey with Algomind!"</h1>
        <p>"I can't recommend Algomind enough! As a self-taught programmer, I often struggle with structuring my learning and making progress. Algomind has been a game-changer for me. The questions are well-explained and come with helpful hints and solutions, which has saved me a lot of time and frustration. I've already seen a huge improvement in my problem-solving abilities, and I feel like I'm on the right track to achieving my career goals. Thank you, Algomind!"</p>
        <h4>Priya, (Algomind user)</h4>
      </div>
      </div>

    </div>
    
  );
  }
export default Testimonials
