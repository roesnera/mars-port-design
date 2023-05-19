import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const nameChange = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    setFormName(newName);
  }

  const emailChange = (e) => {
    e.preventDefault();
    const newEmail = e.target.value;
    setFormEmail(newEmail);
  }

  const messageChange = (e) => {
    e.preventDefault();
    const newMessage = e.target.value;
    setFormMessage(newMessage);
  }



  return <section className='contact-section' id="contact">
    <h2 className='contact-header'>Send me a message</h2>
    <h4 className="contact-subheader">Have a question or proposal or just want to connect? Contact me here.</h4>
    <form className='contact-form' action={"mailto:aaroesner@gmail.com?body="+formMessage} method='POST' encType='application/x-www-form-urlencoded'>
      <div className="form-item form-name">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" value={formName} onChange={nameChange} placeholder='Enter your name'/>
      </div>
      <div className="form-item form-email">
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" value={formEmail} onChange={emailChange} placeholder='Enter your email address'/>
      </div>
      <div className="form-item form-message">
        <label htmlFor="body">Your Message</label>
        <input type="text" name="body" value={formMessage} onChange={messageChange} placeholder='Hi, I think we need to work on the front end of our website . . .'/>
      </div>
      <button type='submit' className='form-button'>Send it</button>
    </form>
  </section>;
}
