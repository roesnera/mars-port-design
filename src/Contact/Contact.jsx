import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");




  return <section className='contact-section'>
    <h2 className='contact-header'>Send me a message</h2>
    <h4 className="contact-subheader">Have a question or proposal or just want to connect? Contact me here.</h4>
    <form className='contact-form'>
      <div className="form-name">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" value={formName}/>
      </div>
      <div className="form-email">
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" value={formEmail}/>
      </div>
      <div className="form-message">
        <label htmlFor="message">Your Message</label>
        <input type="text" name="message" value={formMessage}/>
      </div>
      <button type='submit' className='form-button'>Send it</button>
    </form>
  </section>;
}
