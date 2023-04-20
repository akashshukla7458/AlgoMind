import React from 'react'
// import bgimg from '../assests/bgimg2.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <div>
        <section className="homepage">
            {/* <img src={bgimg} alt=" Background for banner" /> */}
            <div className="contentbxbx">
                <h2 className='gradient__text'>Elevate Your Career with Algomind</h2>
                <p>Algomind is a web application that is dedicated to helping students succeed in landing jobs at top software companies. Our platform provides access to a vast collection of top questions related to DSA, making it easy for students to prepare for interviews and tests.</p>
            </div>
    </section>
    </div>
  )
}

export default Banner