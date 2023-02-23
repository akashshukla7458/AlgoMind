import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Bottom from '../components/Bottom'

const Homepage = () => {
  return (
    <div className="gradient__bg">
      <Navbar/>    
    <Header/>
    <Testimonials/>
    <Bottom />

    </div>
  )
}

export default Homepage
