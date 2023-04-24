import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './Contact.css';
import { AlgoState } from '../Context';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const { setAlert } = AlgoState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
        setError('Please fill in all required fields');
        setAlert({
            open: true,
            message: "Fill the fields",
            type: "error"
          })
        return;
      }
  
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name,
        email,
        mobile,
        message,
      });
    //   alert('Message sent!');
      setAlert({
        open: true,
        message: "Message Sent!!",
        type: "success"
      })
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
<section className="Contactsection section__padding" >
    <h1 className='gradient__text'>Contact Us</h1>
    <div className="about">
        <div className="contentbx">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="inputbx">
                <input type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="inputbx">
                <input type="text" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="inputbx">
                <input type="text" name="mobile" placeholder="Mobile No." value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
              <div className="inputbx">
                <textarea name="message" placeholder="Write your message here" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <div className="inputbx">
                <input type="submit" name="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
        <div className="imgbx2"></div>
      </div>
    </section>
  );
};

export default Contact;
