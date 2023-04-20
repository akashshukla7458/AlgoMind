import React from 'react'
import Navbar from '../components/Navbar'
import Bottom from '../components/Bottom'
import Banner from '../components/Banner'
import Feature from '../components/Feature'
import Contact from '../components/Contact'
// import Feature from '../components/Feature'
const About = () => {
  return (
    <div className="gradient__bg">
      <Navbar/>
      <Banner/>
      <Feature/>
      <Contact/>
    <Bottom />

    </div>
  )
}

  export default About

