import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
<section className="Contactsection section__padding" >
    <h1 className='gradient__text'>Contact Us</h1>
    <div className="about">
        <div className="contentbx">
            <div className="form">
        <div className="inputbx">
            <input type="text" name="" placeholder="Full Name"/>
        </div>
        <div className="inputbx">
            <input type="text" name="" placeholder="Email Address"/>
        </div>
        <div className="inputbx">
            <input type="text" name="" placeholder="Mobile No."/>
        </div>
        <div className="inputbx">
            <textarea placeholder="Write your message here"></textarea>
        </div>
        <div className="inputbx">
            <input type="submit" name="" value="Send"/>
        </div>
    </div>
</div>
<div className="imgbx2"></div>
</div>
</section>
  )
}

export default Contact