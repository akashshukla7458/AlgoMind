import React from 'react'
import './Feature.css';
import image1 from '../assests/asset 9.svg';
import image2 from '../assests/asset 10.svg';
import image3 from '../assests/asset 11.svg';

const Feature = () => {
  return (
      <section className="collaboration">
        <div className="features">
            <h1 className="gradient__text">Master DSA and Land Your Dream Job with Algomind</h1>
            <p>Access Thousands of Free DSA Questions, Organized by Topic, and Stay on Track with Our Easy Checklist Feature.</p>
            <div className="feature-divs">
                <div className="each-feature">
                    <img src={image1} alt=" 1"className='img1'/>
                    <h2>Free of Cost</h2>
                    <p>Access Algomind's vast collection of DSA questions and features without any charges or hidden fees.</p>
                </div>
                <div className="each-feature">
                    <img src={image2} alt=" 2" className='img2'/>
                    <h2>Topic Wise Questions</h2>
                    <p>Our question bank is organized into different DSA topics, allowing students to focus on specific areas and prepare effectively.</p>
                </div>
                <div className="each-feature">
                    <img src={image3} alt=" 3" className='img3'/>
                    <h2>Easy Checklist</h2>
                    <p>Keep track of your progress and stay organized with our simple and intuitive checklist feature, which helps you manage your study plan and achieve your goals.</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Feature