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



  return <section className='contact-section'>
    <h2 className='contact-header'>Send me a message</h2>
    <h4 className="contact-subheader">Have a question or proposal or just want to connect? Contact me here.</h4>
    <form className='contact-form' action='https://formsubmit.co/aaroesner@gmail.com' method='POST'>
      <div className="form-name">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" value={formName} onChange={nameChange}/>
      </div>
      <div className="form-email">
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" value={formEmail} onChange={emailChange}/>
      </div>
      <div className="form-message">
        <label htmlFor="text">Your Message</label>
        <input type="text" name="text" value={formMessage} onChange={messageChange}/>
      </div>
      <button type='submit' className='form-button'>Send it</button>
    </form>
  </section>;
}
